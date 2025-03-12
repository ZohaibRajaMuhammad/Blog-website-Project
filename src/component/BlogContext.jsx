// import { createContext, useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { getDatabase, ref, onValue } from 'firebase/database';

// const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const db = getDatabase();
//     const postsRef = ref(db, 'posts');
    
//     // Real-time listener for Firebase data changes
//     const unsubscribe = onValue(postsRef, (snapshot) => {
//       const postsData = [];
//       snapshot.forEach((childSnapshot) => {
//         postsData.push({
//           id: childSnapshot.key, // Firebase-generated unique ID
//           ...childSnapshot.val()
//         });
//       });

//       // Sort posts by publish date (newest first)
//       const sortedPosts = postsData.sort((a, b) => 
//         new Date(b.publishDate) - new Date(a.publishDate)
//       );
      
//       setPosts(sortedPosts);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <BlogContext.Provider value={{ posts }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
// export const useBlog = () => useContext(BlogContext);

// BlogProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// BlogContext.js
import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogContext.Provider>
  );
}
export function useBlog() {
  return useContext(BlogContext);
}

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
//  return useContext(BlogContext);
// }