// // import React from "react";
// // import React from "react";
// // import Navbar from "../component/NavBar";
// import HeroSection from "../component/HeroSection";
// import SubHeroSection from "../component/SubHeroSection";
// import RecentPosts from "../component/RecentPosts";
// import PopularPosts from "../component/PopularPosts";
// import Footer from "../component/Footer";

// function App() {
//   return (
//     <div>
      
//       {/* <Navbar /> */}
//       <HeroSection />
//       <SubHeroSection />
//       <RecentPosts />
//       <PopularPosts />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import HeroSection from "../component/HeroSection";
import SubHeroSection from "../component/SubHeroSection";
import RecentPosts from "../component/RecentPosts";
import PopularPosts from "../component/PopularPosts";
// import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <SubHeroSection />
      <RecentPosts />
      <PopularPosts />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;