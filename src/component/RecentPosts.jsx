// const posts = [
//   {
//     id: 1,
//     category: "Travel",
//     date: "13 March 2023",
//     title: "8 Rules Of Travelling In Sea You Need To Know",
//     description:
//       "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs.",
//     image: travelImage,
//   },
//   {
//     id: 2,
//     category: "DEVELOPMENT",
//     date: "11 March 2023",
//     title: "How to build strong portfolio and get a Job in UI/UX",
//     description:
//       "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide.",
//     image: uiuxImage,
//   },
//   {
//     id: 3,
//     category: "Sports",
//     date: "10 March 2023",
//     title: "How to Be a Professional Footballer in 2023",
//     description:
//       "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
//     image: footballImage,
//   },
// ];
// import { useEffect, useState } from "react";
// import SubHeroSection from "../component/SubHeroSection";
// import travelImage from "../assets/travel-image.avif";
// import uiuxImage from "../assets/uiux-image.avif";
// import footballImage from "../assets/football-image.avif";//  useEffect(() => {
  //    const postsRef = ref(database, "posts");
    

       
  //      // Sort by creation date
  //      const sortedPosts = postsData.sort(
  //        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //      );
       
  //      setPosts(sortedPosts);
  //      setLoading(false);
  //    });
 
  //    return () => unsubscribe();
  //  }, []);
// import PostCard from "./PostCard";
// import "/src/styles/styles.css";
// import { Link } from "react-router-dom";
// import vrImage from "../assets/vr-image-1.avif";
// import { useEffect, useState } from "react";
// import { useBlog } from '../component/BlogContext';
// import { ref} from "firebase/database";
// import { database } from "../firebase";
// import { getDocs } from "firebase/firestore";



 
// const RecentPosts = () => {
//    const { posts, setPosts } = useBlog();
//    const [loading, setLoax ding] = useState(true);
  
  
 
//   const fetchPosts = async()  =>{
//     const docRef = ref(database , "blogs")
//     await getDocs(docRef)
//      .then((querySnapshot) => {
//        const postsData = [];
//        querySnapshot.forEach((doc) => {
//          postsData.push({ ...doc.data(), id: doc.id });
//        });
//        setPosts(postsData);
//        setLoading(false);
//      })
//   }
//   useEffect(() => {
//     fetchPosts();
//   }, [database]);

//    if (loading) return <div>Loading posts...</div>;
  

//   // Display 3 most recent posts
//   const recentPosts = posts.slice(0, 3);

//   return (
//     <section className="recent-posts">
//       <div className="recent-posts-header">
//         <h2>Our Recent Post</h2>
//         <button className="view-all-btn">View All</button>
//       </div>
//       <section className="hero-post">
//       <div className="hero-post-image">
//         <img src={vrImage} alt="VR & AI Technology" />
//       </div>
//       <div className="hero-post-content">
//     <Link to="./BlogPost.jsx" className="hero-post-link">
//         <p className="hero-post-category">
//           <strong>DEVELOPMENT</strong> <span>16 March 2023</span>
//         </p>
//         <h2 className="hero-post-title">
//           How to make a Game look more attractive with New VR & AI Technology
//         </h2>
//         <p className="hero-post-description">
//           Google has been investing in AI for many years and bringing its
//           benefits to individuals, businesses and communities. Whether it’s
//           publishing state-of-the-art research, building helpful products or
//           developing tools and resources that enable others, we’re committed to
//           making AI accessible to everyone.
//         </p>
//         <button className="hero-read-more">Read More</button>
//     </Link>
//       </div>
//     </section>

//       <div className="post-cards-container">
//         {posts.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </div>

      
//       <section className="recent-posts">
//       <h2>Recent Articles</h2>
//       <div className="posts-grid">
//         {recentPosts.map(post => (
//           <article key={post.id} className="post-card">
//             <h3>{post.title}</h3>
//             <p className="excerpt">{post.excerpt}</p>
//             <Link to={`/blog/${post.id}`} className="read-more">
//               Read More →
//             </Link>
//           </article>
//         ))}
//       </div>
//     </section>

    
//     <div className="recent-posts">
//       {posts.map((post) => (
//         <div key={post.id} className="post-card">
//           <h3>{post.title}</h3>
//           <p>{post.content.substring(0, 100)}...</p>
//           <div className="post-meta">
//             <span>By {post.author}</span>
//             <span>{new Date(post.createdAt).toLocaleDateString()}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//     </section>


    
//   );
// };

// export default RecentPosts;
      


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { database } from "../firebase";
// import PostCard from "./PostCard";
import "/src/styles/styles.css";
import { useBlog } from '../component/BlogContext';
import vrImage from "../assets/vr-image-1.avif";

const RecentPosts = () => {
  const { posts, setPosts } = useBlog();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Real-time posts listener
  useEffect(() => {
    const postsQuery = query(
      collection(database, "posts"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(postsQuery, 
      (snapshot) => {
        const postsData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          // Convert Firestore timestamp to Date
          if (data.createdAt) {
            data.createdAt = data.createdAt.toDate();
          }
          postsData.push({ 
            id: doc.id,
            ...data
          });
        });
        setPosts(postsData);
        setLoading(false);
      },
      (error) => {
        setError("Error loading posts");
        console.error("Firestore error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Get 3 most recent published posts
  const recentPosts = posts
    .filter(post => post.status === 'published')
    .slice(0, 3);

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="recent-posts">
      <div className="recent-posts-header">
        <h2>Our Recent Posts</h2>
        <Link to="/blog" className="view-all-btn">View All Posts</Link>
      </div>

      {/* Hero Post */}
      <section className="hero-post">
        <div className="hero-post-image">
          <img src={vrImage} alt="VR & AI Technology" />
        </div>
        <div className="hero-post-content">
          <div className="hero-post-meta">
            <span className="category">DEVELOPMENT</span>
            <span className="date">March 16, 2023</span>
          </div>
          <h2 className="hero-post-title">
            How to Make Games More Attractive with VR & AI
          </h2>
          <p className="hero-post-description">
            Explore the latest advancements in VR and AI technology that are 
            revolutionizing game development and user experiences.
          </p>
          <Link to="/blog/featured-post" className="hero-read-more">
            Read More
          </Link>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <div className="posts-grid">
        {recentPosts.map(post => (
          <article key={post.id} className="post-card">
            {post.coverImage && (
              <div className="post-image">
                <img src={post.coverImage} alt={post.title} />
              </div>
            )}
            <div className="post-content">
              <div className="post-meta">
                <span className="category">{post.category}</span>
                <span className="date">
                  {post.createdAt?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h3>{post.title}</h3>
              <p className="excerpt">{post.excerpt}</p>
              <div className="post-footer">
                <span className="author">By {post.author?.name || 'Anonymous'}</span>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && !loading && (
        <div className="no-posts">No posts available yet. Check back soon!</div>
      )}
    </section>
  );
};

export default RecentPosts;