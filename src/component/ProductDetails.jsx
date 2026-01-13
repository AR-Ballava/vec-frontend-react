import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  /* ---------- FETCH PRODUCT ---------- */
  useEffect(() => {
    fetch(`http://localhost:8083/api/product/get/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.imageLinks[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  /* ---------- FETCH QUOTE (API NINJAS) ---------- */
  useEffect(() => {
    fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom", {
      headers: {
        "X-Api-Key": "TMSRENhv1agqAR1YMv2g7Cz2KwaXSDOqXRlO12Iv"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setQuote(data[0].quote);
          setQuoteAuthor(data[0].author);
        }
      })
      .catch(() => {
        setQuote(
          "True power is built quietly. It moves with intention and reshapes outcomes long before it is ever noticed."
        );
        setQuoteAuthor("Unknown");
      });
  }, []);

  if (loading) return <h3 className="loading-text">Loading...</h3>;
  if (!product) return <h3>Product not found</h3>;

  /* ---------- VIRTUAL WORTH ---------- */
  const virtualWorthUSD = (product.price * 0.237).toFixed(2);

  /* ---------- DESCRIPTION ---------- */
  const generateDescription = (name) => {
    const n = name.toLowerCase();

    if (n.includes("lamborghini"))
      return `Lamborghini is engineered for dominance, not compromise.
Every curve and every roar exists to remind the world that restraint is optional.`;

    if (n.includes("ferrari"))
      return `Ferrari carries decades of racing heritage refined into perfection.
It is owned for legacy, not speed alone.`;

    if (n.includes("rolex"))
      return `Rolex represents mastery over time and discipline.
It speaks quietly while commanding universal respect.`;

    if (n.includes("island"))
      return `Owning an island is independence at its peak.
It is not escape — it is control.`;

    return `This product reflects foresight, authority, and restraint.
It is designed for individuals who operate beyond limits.`;
  };

  return (
    <div className="product-page">
      {/* IMAGE SECTION */}
      <div className="image-section">
        <div className="thumbnail-column">
          {product.imageLinks.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumb"
              className={`thumbnail ${
                selectedImage === img ? "active-thumb" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="main-image-box">
          <img src={selectedImage} alt={product.name} />
        </div>
      </div>

      {/* DETAILS */}
      <div className="details-section">
        <h1 className="product-title">{product.name}</h1>
        <p className="category-text">{product.category}</p>

        <div className="price-worth-row">
          <span className="price">₹{product.price}</span>
          <span className="price-separator">|</span>
          <span className="worth-value">${virtualWorthUSD}M</span>
        </div>

        <div className="text-row">
          <p className="tax-text">Payable amount</p>
          <p className="tax-text">Virtual Worth</p>
        </div>

        <div className="divider"></div>

        <div className="action-buttons">
          <button className="btn-buy">Buy Now</button>
        </div>
        
        <h4>Description</h4>
        <p className="description-text">
          {generateDescription(product.name)}
        </p>
      </div>

      {/* QUOTE PANEL */}
      <div className="mindset-panel">
        <p className="mindset-quote">“{quote}”</p>
        <span className="mindset-sub">— {quoteAuthor}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
