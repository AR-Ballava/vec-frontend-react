import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Highlights from './component/Highlights'
import About from './component/About'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import ProfilePaage from './pages/ProfilePaage'
import RegisterPage from './pages/RegisterPage'
import HighlightsPage from './pages/HighlightsPage'
import ProductDetails from './component/ProductDetails'
import ProductDetaisPage from './pages/ProductDetaisPage'
import Header from './component/Header'
import Users from './component/Users'
import ProtectedRoute from './component/ProtectedRoute'
import MyOrders from './component/MyProducts'




function App() {
  return (
    <>
{/* <Users/> */}
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/highlights" element={<HighlightsPage/>} />
          <Route path="/collections" element={<ProductPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/about" element={<About/>} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePaage />
              </ProtectedRoute>
            }
          />
          <Route path="/my-orders" element={<MyOrders/>} />
          <Route path="/product/:id" element={<ProductDetaisPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
