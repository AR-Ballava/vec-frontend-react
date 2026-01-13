import { Link, useNavigate } from "react-router-dom";
import "../style//Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // auth state synced with localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleAuth = () => {
    if (isLoggedIn) {
      // LOGOUT
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/");
    } else {
      // LOGIN
      navigate("/login");
    }

    setMenuOpen(false); // close mobile menu after action
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          IMRICH<span>STORE</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="nav desktop-nav">
        <Link to="/collections">Collections</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>

        <button
          className={`btn ${isLoggedIn ? "logout" : "login"}`}
          onClick={toggleAuth}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Product
          </Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>
          <Link to="/collections" onClick={() => setMenuOpen(false)}>
            Collections
          </Link>

          <button
            className={`btn ${isLoggedIn ? "logout" : "login"}`}
            onClick={toggleAuth}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
