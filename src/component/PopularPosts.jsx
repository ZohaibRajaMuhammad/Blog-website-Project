// import React from "react";
import "/src/styles/styles.css";
import train from "../assets/train.avif";
import laptop from "../assets/laptop.avif";
import Dancer from "../assets/dancer.avif";
import Singer from "../assets/singer.avif";
import business from "../assets/business.png";
import PostCard from "./PostCard";
import chocolates from "../assets/chocolates.png";

const posts = [
  {
    category: "Travel",
    date: "13 March 2023",
    title: "Train Or Bus Journey? Which one suits?",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person.",
    image: train, // Replace with actual image paths
  },
  {
    category: "DEVELOPMENT",
    date: "11 March 2023",
    title: "Best Website to research for your next project",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs.",
    image: laptop,
  },
  {
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Dancer in 2023 with proper skills?",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure proactive.",
    image: Dancer,
  },
  {
    category: "Travel",
    date: "13 March 2023",
    title: "Who is the best singer on chart? Know him?",
    description:
      "Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and...",
    image: Singer,
  },
  {
    category: "DEVELOPMENT",
    date: "11 March 2023",
    title: "How to start export import business from home?",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs.",
    image: business,
  },
  {
    category: "Sports",
    date: "10 March 2023",
    title: "Make some drinks with chocolates, chocolates and milk",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure proactive.",
    image: chocolates,
  },
];

const PopularPosts = () => {
  return (
    <section className="popular-posts">
      <div className="header">
        <h2>Popular Post</h2>
        <button className="view-all">View All</button>
      </div>
      <div className="post-cards-container">
        {posts.map((post) => (
          <PostCard key={post.image} post={post} />
        ))}
      </div>
      {/* <div className="posts-grid">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <img src={`/assets/${post.image}`} alt={post.title} />
            <p className="category">
              <strong>{post.category}</strong> <span>{post.date}</span>
            </p>
            <h3>{post.title}</h3>
            <p className="description">{post.description}</p>
            <a href="#">Read More...</a>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default PopularPosts;
