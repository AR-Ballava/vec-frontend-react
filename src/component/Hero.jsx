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
          <button onClick={()=> navigate("/collections")} className="primary-btn collection">Explore Collection</button>
          <button onClick={()=> navigate("/highlights")} className="secondary-btn highlight">View Highlights</button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="hero-gallery" >
        <button style={{backgroundColor: "transparent", border: "none"}} onClick={()=> navigate("/collections")}>
        <img
          src="/images/car01.avif"
          alt="Premium Car"
        /></button>
        <button style={{backgroundColor: "transparent", border: "none"}} onClick={()=> navigate("/collections")}>
        <img
          src="/images/yatch02.avif"
          alt="Luxury Car"
        /></button>
        <button style={{backgroundColor: "transparent", border: "none"}} onClick={()=> navigate("/collections")}>
        <img
          src="/images/bike03.avif"
          alt="Superbike"
        /></button>
        <button style={{backgroundColor: "transparent", border: "none"}} onClick={()=> navigate("/collections")}>
         <img
          src="/images/car04.avif"
          alt="Premium Bike"
        /></button>


      </div>
    </section>
  );
};

export default Hero;
