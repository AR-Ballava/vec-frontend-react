import { Navigate, useNavigate } from "react-router-dom";
import "../style/Hero.css";

const Hero = () => {

  const navigate = useNavigate();


  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          Create <span>The Life</span> You See In Your Mind
        </h1>
        <p className="hero-tagline">
        <span className="hero-line-1">
            Luxury isn’t luck. It’s a mindset.
        </span>
        <span className="hero-line-2">
            Explore premium cars, bikes, islands, and yachts designed for those who think beyond limits.
        </span>
        </p>


        <div className="hero-actions">
          <button onClick={()=> navigate("/products")} className="primary-btn collection">Explore Collection</button>
          <button onClick={()=> navigate("/highlights")} className="secondary-btn highlight">View Highlights</button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="hero-gallery" >
        <img
          src="https://images.unsplash.com/photo-1612825173281-9a193378527e?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Premium Car"
        />
        <img
          src="https://images.unsplash.com/photo-1723444413887-998a2cfa508a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Car"
        />
        <img
          src="https://images.unsplash.com/photo-1615812595024-43ac7a9c0586?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Superbike"
        />
        <img
          src="https://images.unsplash.com/photo-1580654712603-eb43273aff33?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Premium Bike"
        />
      </div>
    </section>
  );
};

export default Hero;
