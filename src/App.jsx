// // // import React from "react";
// // // import React from "react";
// // import Navbar from "./component/NavBar";
// // import HeroSection from "./component/HeroSection";
// // import SubHeroSection from "./component/SubHeroSection";
// // import RecentPosts from "./component/RecentPosts";
// // import PopularPosts from "./component/PopularPosts";
// // import Footer from "./component/Footer";

// // function App() {
// //   return (
// //     <div>
      
// //       <Navbar />
// //       <HeroSection />
// //       <SubHeroSection />
// //       <RecentPosts />
// //       <PopularPosts />
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import BlogGrid from "./component/BlogGrid"; // Ensure this path is correct
// import Home from "./component/Home"; // Replace with your actual home component
// import AboutUs from "./component/AboutUs";
// import ContactUs from "./component/ContactUs";
// import RecentPosts from "./component/RecentPosts";
// import BlogPost from "./component/BlogPost";
// import BlogPostForm from "./component/BlogPostForm";


// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blog" element={<BlogGrid />} />
//         <Route path="/about" element={<AboutUs/>} />
//         <Route path="/Contact" element={<ContactUs/>} />
//         <Route path="/create-post" element={<BlogPostForm />} /> {/* Blog Post Form */}
//         <Route path="/" element={<RecentPosts />} />
//         <Route path="/blog-post" element={<BlogPost />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Home from "./component/Home";
// import BlogGrid from "./component/BlogGrid";
// import AboutUs from "./component/AboutUs";
// import ContactUs from "./component/ContactUs";
// import BlogPost from "./component/BlogPost";
// import BlogPostForm from "./component/BlogPostForm";
// import Footer from "./component/Footer";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
        
//         <Routes>
//           {/* Home page with all sections */}
//           <Route path="/" element={<Home />} />
          
//           {/* Blog listing page */}
//           <Route path="/blog" element={<BlogGrid />} />
          
//           {/* Individual blog post */}
//           <Route path="/blog/:id" element={<BlogPost />} />
          
//           {/* About page */}
//           <Route path="/about" element={<AboutUs />} />
          
//           {/* Contact page */}
//           <Route path="/contact" element={<ContactUs />} />
          
//           {/* Create new post form */}
//           <Route path="/create-post" element={<BlogPostForm />} />
//         </Routes>
        
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import Navbar from "./component/NavBar";
import BlogGrid from "./component/BlogGrid";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import BlogPost from "./component/BlogPost";
import BlogPostForm from "./component/BlogPostForm";
import Login from "./component/Login";
import Footer from "./component/Footer";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogGrid />} />
              <Route path="/blogpost" element={<BlogPost />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              
              {/* Protected Route */}
              <Route path="/create-post" element={
                <ProtectedRoute>
                  <BlogPostForm />
                </ProtectedRoute>
              } />
            </Routes>
          </main>

        <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
