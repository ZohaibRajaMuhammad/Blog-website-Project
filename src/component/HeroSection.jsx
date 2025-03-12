// import React from "react";
import "../styles/styles.css";
import aiImage from "../assets/aiImage.avif"; // Replace with actual image

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="featured">Featured Post</p>
        <h1 className="hero-title">
          How AI will <br /> Change the Future
        </h1>
        <p className="hero-description">
          The future of AI will see home robots having enhanced intelligence,
          increased capabilities, and becoming more personal and possibly cute.
          For example, home robots will overcome navigation, direction.
        </p>
        <button className="read-more-btn">Read more</button>
      </div>
      
      <div className="hero-image">
        <img src={aiImage} alt="AI Future" />
      </div>
    </section>
  );
};

export default HeroSection;
