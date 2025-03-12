// import React from "react";
import "../styles/styles.css"; // Custom CSS
import vrImage1 from "../assets/vr-image.avif"; // Replace with actual path
import vrImage2 from "../assets/vr-image.avif";
import popularPosts from "./RecentPosts"; // Import data for popular posts

const BlogPost = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <p className="category">Technology | February 26, 2025</p>
        <h1>How to make a Game look more attractive with New VR & AI Technology</h1>
        <img src={vrImage1} alt="VR Gaming" className="main-image" />
      </div>

      <div className="blog-content">
        <p>
          Gaming has been evolving at a crazy pace, with new graphics, AI-driven interactions, and immersive VR experiences.
          Whether you are a gamer, developer, or tech enthusiast, understanding how AI and VR are reshaping the industry
          is crucial.
        </p>

        <blockquote>
          People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.
          <span>— Pedro Domingos</span>
        </blockquote>

        <p>
          VR brings realism like never before, making the experience more engaging. AI helps improve NPC behavior, procedural
          world-building, and real-time adaptive difficulty, making games feel alive.
        </p>

        <img src={vrImage2} alt="VR Racing Game" className="secondary-image" />

        <p>
          As AI and VR evolve together, the future of gaming will be more interactive, highly immersive, and deeply personalized.
        </p>
      </div>

      <div className="popular-posts">
        <h2>Popular Post</h2>
        <div className="post-grid">
          {popularPosts.map((post, index) => (
            <div className="post-card" key={index}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.category} | {post.date}</p>
              <a href={post.link}>Read More...</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
