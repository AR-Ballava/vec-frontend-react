import React from "react";
import "../style/About.css"

const About = () => {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>
          Why <span>IMRICH STORE</span> Exists
        </h1>
        <p>
          Because dreams deserve a place to live — even before they become real.
        </p>
      </section>

      {/* SECTION 1 — IMAGE LEFT | TEXT RIGHT */}
      <section className="about-section">
        <div className="about-image">
          <img
            src="/images/car09.avif"
            alt="Luxury Car"
          />
        </div>
        <div className="about-text">
          <h2>The Dream Everyone Carries</h2>
          <p>
            Almost every person imagines a life beyond limits — supercars,
            private jets, rare watches, and absolute freedom.
          </p>
          <p>
            These dreams are not about showing off. They are about achievement,
            confidence, and reaching the highest level of life.
          </p>
        </div>
      </section>

      {/* SECTION 2 — TEXT LEFT | IMAGE RIGHT */}
      <section className="about-section reverse">
        <div className="about-image">
          <img
            src="/images/road10.avif"
            alt="Private Jet"
          />
        </div>

        <div className="about-text">
          <h2>Why This Platform Was Created</h2>
          <p>
            IMRICH STORE was created to give those dreams a home — a space where
            ambition can exist without limits.
          </p>
          <p>
            Even if reality hasn’t caught up yet, the mind should never feel
            restricted. Visualization is the first step toward ownership.
          </p>
        </div>
      </section>

      {/* SECTION 3 — IMAGE LEFT | TEXT RIGHT */}
      <section className="about-section">
        <div className="about-image">
          <img
            src="/images/beech11.avif"
            alt="Luxury Yacht"
          />
        </div>
        <div className="about-text">
          <h2>Virtual Ownership, Real Emotion</h2>
          <p>
            This platform is not about pretending to own luxury —
            it is about feeling it.
          </p>
          <p>
            Choosing a Lamborghini, exploring a private island, or admiring elite
            collections builds belief before reality arrives.
          </p>
        </div>
      </section>

      {/* SECTION 4 — TEXT LEFT | IMAGE RIGHT */}
      <section className="about-section reverse">
        <div className="about-image">
          <img
            src="/images/people12.avif"
            alt="Luxury Lifestyle"
          />
        </div>

        <div className="about-text">
          <h2>The Philosophy Behind IMRICH</h2>
          <ul>
            <li>Luxury begins in the mind</li>
            <li>Dreams deserve space</li>
            <li>Visualization fuels success</li>
            <li>Ambition shapes destiny</li>
          </ul>
          <p>
            Not everyone is rich today — but many are rich in vision.
          </p>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="about-final">
        <p>
          IMRICH STORE is not about owning luxury today.
          <br />
          It is about believing you will.
        </p>
      </section>
    </div>
  );
};

export default About;
