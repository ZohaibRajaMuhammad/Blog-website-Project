// import React from "react";
import "../styles/styles.css";
// import Navbar from "../component/NavBar";
import { useBlog } from '../component/BlogContext';
// import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import train from "../assets/train.avif";
import laptop from "../assets/laptop.avif";
import Dancer from "../assets/dancer.avif";
import Singer from "../assets/singer.avif";
import business from "../assets/business.png";
import chocolates from "../assets/chocolates.png";
import travelImage from "../assets/travel-image.avif";
import uiuxImage from "../assets/uiux-image.avif";
import footballImage from "../assets/football-image.avif";

const blogs = [
  {
    category: "Travel",
    date: "13 March 2023",
    title: "Train Or Bus Journey? Which one suits?",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance, time available, cost, and personal preference.",
    image: train,
  },
  {
    category: "Development",
    date: "11 March 2023",
    title: "Best Website to research for your next project",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
    image: laptop,
  },
  {
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Dancer in 2023 with proper skills?",
    description:
      "Organically grow the holistic world view of disruptive innovation in workplace diversity and empowerment.",
    image: Dancer,
  },
  {
    category: "Travel",
    date: "13 March 2023",
    title: "Who is the best singer on chart? Know him?",
    description:
      "Chart by Billboard ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100.",
    image: Singer,
  },
  {
    category: "Development",
    date: "11 March 2023",
    title: "How to start export import business from home?",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
    image: business,
  },
  {
    category: "Sports",
    date: "10 March 2023",
    title: "Make some drinks with chocolates, chocolates, and milk",
    description:
      "Organically grow the holistic world view of disruptive innovation in workplace diversity and empowerment.",
    image: chocolates,
  },
  {
    category: "Travel",
    date: "13 March 2023",
    title: "8 Rules Of Travelling In Sea You Need To Know",
    description:
      "Explore the most important tips and rules for traveling across the sea safely and efficiently.",
    image: travelImage,
  },
  {
    category: "Development",
    date: "11 March 2023",
    title: "How to build strong portfolio and get a job in UI/UX",
    description:
      "Improve your UI/UX portfolio and attract top-tier job opportunities with these expert tips.",
    image: uiuxImage,
  },
  {
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Professional Footballer in 2023",
    description:
      "Learn the key strategies and skills required to excel as a professional footballer in today’s competitive sports industry.",
    image: footballImage,
  },
];

const BlogGrid = () => {
  
  const { posts } = useBlog();

  return (
    <div className="BlogGridDiv">
    {/* <Navbar /> */}

    <section className="blog-grid">
      <div className="container">
        <h2 className="section-title">Find our all blogs from here</h2>
        <p className="section-subtitle">
          We bring you the latest research, insights, and analysis across
          various fields. Stay up to date with our blogs on technology,
          lifestyle, and more.
        </p>

        <div className="grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <p className="blog-meta">
                  <span className="category">{blog.category}</span> •{" "}
                  <span className="date">{blog.date}</span>
                </p>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <a href="#" className="read-more">
                  Read More...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <div className="blog-page">
      <h1>All Blog Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p className="excerpt">{post.excerpt}</p>
            <div className="meta">
              <span>By {post.author}</span>
              <time>
                {new Date(post.publishDate).toLocaleDateString()}
              </time>
            </div>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read Full Article
            </Link>
          </article>
        ))}
      </div>
    </div>


    {/* <Footer /> */}
    </div>
  );
};

export default BlogGrid;
