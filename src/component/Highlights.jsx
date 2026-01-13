import "../style/Highlights.css";

const highlights = [
  {
    title: "Hyper Luxury Cars",
    subtitle: "Performance • Prestige",
    image:
      "https://images.unsplash.com/photo-1744223786000-4f92d4285bf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Superbikes Collection",
    subtitle: "Speed • Control",
    image:
      "https://images.unsplash.com/photo-1635073943212-f34dfbfcc3b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Private Luxury Yachts",
    subtitle: "Freedom • Power",
    image:
      "https://images.unsplash.com/photo-1599257559270-eeccb1f266df?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Exclusive Private Islands",
    subtitle: "Silence • Status",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>RECENT HIGHLIGHTS</h2>
        <p>A reflection of who you’re becoming, not just what you own </p>
      </div>

      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div className="highlight-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="highlight-overlay">
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
