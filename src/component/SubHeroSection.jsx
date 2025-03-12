// import React from "react";
import "../styles/styles.css";
import vrImage from "../assets/vr-image.avif"; // Replace with actual image

const SubHeroSection = () => {
  return (
    <section className="sub-hero">
      <div className="sub-hero-image">
        <img src={vrImage} alt="VR & AI Technology" />
      </div>
      <div className="sub-hero-content">
        <p className="sub-hero-category">
          <strong>DEVELOPMENT</strong> <span>16 March 2023</span>
        </p>
        <h2 className="sub-hero-title">
          How to make a Game look more attractive with New VR & AI Technology
        </h2>
        <p className="sub-hero-description">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
    </section>
  );
};

export default SubHeroSection;
