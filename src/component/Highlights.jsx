import "../style/Highlights.css";

const highlights = [
  {
    title: "Hyper Luxury Cars",
    subtitle: "Performance • Prestige",
    image:
      "/images/car05.avif",
  },
  {
    title: "Superbikes Collection",
    subtitle: "Speed • Control",
    image:
      "/images/bike06.avif",
  },
  {
    title: "Private Luxury Yachts",
    subtitle: "Freedom • Power",
    image:
      "/images/yatch07.avif",
  },
  {
    title: "Exclusive Private Islands",
    subtitle: "Silence • Status",
    image:
      "/images/iland08.avif",
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
