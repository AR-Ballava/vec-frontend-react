import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Products.css";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // ✅ NEW

  const size = 12;
  const [activeCategory, setActiveCategory] = useState("ALL");

  const fetchProducts = (pageNumber, category = "ALL", reset = false) => {
    const url =
      category === "ALL"
        ? `http://localhost:8083/api/product/getAll?page=${pageNumber}&size=${size}`
        : `http://localhost:8083/api/product/getAll/${category}?page=${pageNumber}&size=${size}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductList((prev) =>
          reset ? data.content : [...prev, ...data.content]
        );
        setIsLastPage(data.last);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts(0, "ALL", true);
  }, []);

  const filterByCategory = (cat) => {
    setLoading(true);
    setPage(0);
    setActiveCategory(cat);
    fetchProducts(0, cat, true);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage, activeCategory);
  };

  if (loading && productList.length === 0) {
    return <h3 className="loading-text">Loading...</h3>;
  }

  return (
    <div className="main-home">
      {/* FILTER BUTTONS */}
      <div className="mb-5 text-center">
        {["ALL", "CAR", "BIKE", "YACHT", "ISLAND", "WATCH"].map((cat) => (
          <button
            key={cat}
            onClick={() => filterByCategory(cat)}
            type="button"
            className={`btn btn-outline-${getBtnColor(cat)} mx-5 category-btn`}
          >
            {cat.split("").join(" ")}
          </button>
        ))}
      </div>

      {/* PRODUCT CARDS */}
      <div className="product-wrapper">
        {productList.map((data) => (
          <div key={data.productId} className="product-card">
            <div
              className="image-wrapper hover_effect"
              onClick={() => navigate(`/product/${data.productId}`)} // ✅ CLICK
              style={{ cursor: "pointer" }}
            >
              <img
                src={data.imageLinks[0]}
                alt={data.name}
                loading="lazy"
                className="product-image"
              />
            </div>

            <div className="product-info">
              <h6>{data.name}</h6>
              <h9>₹ {data.price}</h9>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      {!isLastPage && (
        <div className="load-more-wrapper">
          <button
            className="btn btn-outline-light load-more-btn"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

const getBtnColor = (cat) => {
  switch (cat) {
    case "CAR":
      return "success";
    case "BIKE":
      return "danger";
    case "YACHT":
      return "warning";
    case "ISLAND":
      return "info";
    case "WATCH":
      return "light";
    default:
      return "primary";
  }
};

export default Products;
