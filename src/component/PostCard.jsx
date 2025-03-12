// import React from "react";
import "../styles/styles.css";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} className="post-card-image" />
      <div className="post-card-content">
        <p className="post-card-category">
          <strong>{post.category}</strong> <span>{post.date}</span>
        </p>
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-description">{post.description}</p>
        <a href="#" className="read-more-link">
          Read More...
        </a>
      </div>
    </div>
  );
};

export default PostCard;
