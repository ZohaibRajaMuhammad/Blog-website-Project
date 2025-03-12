// import { useState } from "react";
// import styled from "styled-components";
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, push } from "firebase/database";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const storage = getStorage(app);

// const BlogForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     author: "",
//     bio: "",
//     category: "Technology",
//     tags: "",
//     excerpt: "",
//     content: "",
//     metaTitle: "",
//     metaDescription: "",
//     slug: "",
//     allowComments: false,
//     publishDate: "",
//     featured: false,
//     coverImage: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       coverImage: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       toast.info("Uploading blog post...", { autoClose: 2000 });

//       let imageUrl = "";
//       if (formData.coverImage) {
//         const storageReference = storageRef(storage, `blogImages/${formData.coverImage.name}`);
//         await uploadBytes(storageReference, formData.coverImage);
//         imageUrl = await getDownloadURL(storageReference);
//       }

//       const postData = {
//         ...formData,
//         tags: formData.tags.split(",").map((tag) => tag.trim()),
//         createdAt: new Date().toISOString(),
//         coverImageUrl: imageUrl,
//       };

//       const postsRef = ref(database, "posts");
//       await push(postsRef, postData);

//       toast.success("Blog post submitted successfully!");
//       setFormData({
//         title: "",
//         subtitle: "",
//         author: "",
//         bio: "",
//         category: "Technology",
//         tags: "",
//         excerpt: "",
//         content: "",
//         metaTitle: "",
//         metaDescription: "",
//         slug: "",
//         allowComments: false,
//         publishDate: "",
//         featured: false,
//         coverImage: null,
//       });
//     } catch (error) {
//       toast.error("Error submitting blog post");
//       console.error("Submission error:", error);
//     }
//   };

//   return (
//     <FormContainer>
//       <ToastContainer />
//       <h2>Submit a Blog Post</h2>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label>Title:</Label>
//           <Input type="text" name="title" value={formData.title} onChange={handleChange} required />
//         </FormGroup>

//         <FormGroup>
//           <Label>Subtitle:</Label>
//           <Input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} />
//         </FormGroup>

//         <FormRow>
//           <FormGroup>
//             <Label>Author Name:</Label>
//             <Input type="text" name="author" value={formData.author} onChange={handleChange} required />
//           </FormGroup>

//           <FormGroup>
//             <Label>Category:</Label>
//             <Select name="category" value={formData.category} onChange={handleChange}>
//               <option value="Technology">Technology</option>
//               <option value="Health">Health</option>
//               <option value="Business">Business</option>
//               <option value="Lifestyle">Lifestyle</option>
//             </Select>
//           </FormGroup>
//         </FormRow>

//         <FormGroup>
//           <Label>Author Bio:</Label>
//           <TextArea name="bio" value={formData.bio} onChange={handleChange} maxLength="150" />
//         </FormGroup>

//         <FormGroup>
//           <Label>Tags (comma separated):</Label>
//           <Input type="text" name="tags" value={formData.tags} onChange={handleChange} />
//         </FormGroup>

//         <FormGroup>
//           <Label>Featured Snippet:</Label>
//           <TextArea name="excerpt" value={formData.excerpt} onChange={handleChange} maxLength="200" />
//         </FormGroup>

//         <FormGroup>
//           <Label>Main Blog Content:</Label>
//           <TextArea name="content" value={formData.content} onChange={handleChange} required rows="6" />
//         </FormGroup>

//         <FormGroup>
//           <Label>Post Cover Image:</Label>
//           <Input type="file" accept="image/*" onChange={handleImageUpload} />
//         </FormGroup>

//         <FormRow>
//           <FormGroup>
//             <Label>Meta Title:</Label>
//             <Input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} maxLength="60" />
//           </FormGroup>

//           <FormGroup>
//             <Label>Publish Date:</Label>
//             <Input type="datetime-local" name="publishDate" value={formData.publishDate} onChange={handleChange} />
//           </FormGroup>
//         </FormRow>

//         <CheckboxGroup>
//           <CheckboxLabel>
//             <input type="checkbox" name="allowComments" checked={formData.allowComments} onChange={handleChange} />
//             Allow Comments
//           </CheckboxLabel>

//           <CheckboxLabel>
//             <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} />
//             Featured Post
//           </CheckboxLabel>
//         </CheckboxGroup>

//         <SubmitButton type="submit">Submit Post</SubmitButton>
//       </Form>
//     </FormContainer>
//   );
// };

// // Styled Components
// const FormContainer = styled.div`
//   max-width: 800px;
//   margin: 2rem auto;
//   padding: 2.5rem;
//   background: rgba(255, 255, 255, 0.95);
//   border-radius: 20px;
//   backdrop-filter: blur(12px);
//   box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   animation: formEntrance 0.6s cubic-bezier(0.23, 1, 0.32, 1);

//   @keyframes formEntrance {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   h2 {
//     text-align: center;
//     font-family: 'Poppins', sans-serif;
//     font-size: 2.2rem;
//     color: #2d3436;
//     margin-bottom: 2rem;
//     position: relative;

//     &::after {
//       content: '';
//       position: absolute;
//       bottom: -12px;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 60px;
//       height: 3px;
//       background: linear-gradient(90deg, #4ecdc4, #45b7af);
//     }
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
// `;

// const FormRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 2rem;
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 1.5rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 600;
//   color: #2d3436;
//   font-size: 0.95rem;
//   margin-left: 0.5rem;
// `;

// const Input = styled.input`
//   padding: 1rem;
//   border: 2px solid #e2e8f0;
//   border-radius: 12px;
//   font-size: 1rem;
//   transition: all 0.3s ease;
//   background: rgba(255, 255, 255, 0.8);

//   &:focus {
//     border-color: #4ecdc4;
//     box-shadow: 0 0 0 4px rgba(78, 205, 196, 0.2);
//     background: white;
//   }

//   &[type="file"] {
//     padding: 0.8rem;
//     border: 2px dashed #e2e8f0;
//     background: rgba(78, 205, 196, 0.05);
    
//     &:hover {
//       border-color: #4ecdc4;
//     }
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 1rem;
//   border: 2px solid #e2e8f0;
//   border-radius: 12px;
//   min-height: 120px;
//   resize: vertical;
//   font-size: 1rem;
//   transition: all 0.3s ease;
//   background: rgba(255, 255, 255, 0.8);

//   &:focus {
//     border-color: #4ecdc4;
//     box-shadow: 0 0 0 4px rgba(78, 205, 196, 0.2);
//     background: white;
//   }
// `;

// const Select = styled.select`
//   padding: 1rem;
//   border: 2px solid #e2e8f0;
//   border-radius: 12px;
//   font-size: 1rem;
//   appearance: none;
//   background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232d3436' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") 
//     no-repeat right 1rem center/1.2em;
//   transition: all 0.3s ease;

//   &:focus {
//     border-color: #4ecdc4;
//     box-shadow: 0 0 0 4px rgba(78, 205, 196, 0.2);
//   }
// `;

// const CheckboxGroup = styled.div`
//   display: flex;
//   gap: 2.5rem;
//   margin: 1.5rem 0;
// `;

// const CheckboxLabel = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
//   cursor: pointer;
//   font-weight: 500;
//   color: #4a5568;

//   input[type="checkbox"] {
//     width: 1.2em;
//     height: 1.2em;
//     accent-color: #4ecdc4;
//     border: 2px solid #e2e8f0;
//     border-radius: 4px;
//   }
// `;

// const SubmitButton = styled.button`
//   background: linear-gradient(135deg, #4ecdc4, #45b7af);
//   color: white;
//   padding: 1.2rem 2.5rem;
//   border: none;
//   border-radius: 12px;
//   font-size: 1.1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   margin-top: 1rem;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 8px 20px rgba(78, 205, 196, 0.3);
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `;

// // export default BlogForm;
// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, push } from "firebase/database";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useAuth } from "../component/AuthContext";
// import slugify from "slugify";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { database } from "../firebase";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   // ... other firebase config
// };

// // In your form component
// const { currentUser } = useAuth();
// useEffect(() => {
//   console.log("Current user:", currentUser);
// }, [currentUser]);

// const app = initializeApp(firebaseConfig);
// // const database = getDatabase(app);
// const storage = getStorage(app);

// const BlogForm = () => {
//   const { currentUser } = useAuth();
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     author: currentUser?.displayName || "",
//     bio: "",
//     category: "Technology",
//     tags: [],
//     excerpt: "",
//     content: "",
//     metaTitle: "",
//     metaDescription: "",
//     slug: "",
//     allowComments: true,
//     publishDate: new Date().toISOString().slice(0, 16),
//     featured: false,
//     coverImage: null,
//     status: "draft",
//   });

//   const [loading, setLoading] = useState(false);

//   // Auto-generate slug and meta fields
//   useEffect(() => {
//     if (formData.title) {
//       const slug = slugify(formData.title, { lower: true, strict: true });
//       setFormData(prev => ({
//         ...prev,
//         slug,
//         metaTitle: formData.metaTitle || `${formData.title} | My Blog`,
//         metaDescription: formData.metaDescription || formData.excerpt.slice(0, 160)
//       }));
//     }
//   }, [formData.title, formData.excerpt]);

//   const handleEditorChange = (content) => {
//     setFormData(prev => ({ ...prev, content }));
//   };

//   const handleImageUpload = async (file) => {
//     try {
//       const storageReference = storageRef(storage, `blogImages/${file.name}`);
//       await uploadBytes(storageReference, file);
//       return await getDownloadURL(storageReference);
//     } catch (error) {
//       toast.error("Image upload failed");
//       throw error;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let imageUrl = "";
//       if (formData.coverImage) {
//         imageUrl = await handleImageUpload(formData.coverImage);
//       }

//       const postData = {
//         ...formData,
//         author: currentUser?.email || "Anonymous",
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//         views: 0,
//         likes: 0,
//         coverImageUrl: imageUrl,
//         tags: formData.tags.split(",").map(tag => tag.trim()),
//         userId: currentUser?.uid || null,
//       };

//       const postsRef = ref(database, "posts");
//       await push(postsRef, postData);

//       toast.success("Blog post published successfully!");
//       resetForm();
//     } catch (error) {
//       toast.error(error.message || "Submission failed");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       // ... reset all fields
//     });
//   };
// const BlogPostForm = () => {
//   const { currentUser } = useAuth();
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     author: currentUser?.displayName || "",
//     createdAt: new Date().toISOString(),
//     // ... other fields
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Validate required fields
//       if (!formData.title.trim() || !formData.content.trim()) {
//         alert("Title and content are required!");
//         return;
//       }

//       // Create post object
//       const postData = {
//         ...formData,
//         userId: currentUser?.uid || null,
//         views: 0,
//         likes: 0,
//         comments: []
//       };

//       // Push to Firebase
//       const postsRef = ref(database, "posts");
//       const newPostRef = push(postsRef, postData);
      
//       console.log("Post saved with ID:", newPostRef.key);
//       alert("Post created successfully!");
      
//       // Reset form
//       setFormData({
//         title: "",
//         content: "",
//         // ... reset other fields
//       });

//     } catch (error) {
//       console.error("Firebase save error:", error);
//       alert("Error saving post: " + error.message);
//     }
//   };

//   return (
//     <FormContainer>
//       <ToastContainer />
//       <h2>Create New Blog Post</h2>
      
//       <Form onSubmit={handleSubmit}>
//         {/* Existing form fields */}

//         <FormGroup>
//           <Label>Featured Image:</Label>
//           <ImageUploadContainer>
//             <input 
//               type="file" 
//               onChange={(e) => setFormData({...formData, coverImage: e.target.files[0]})}
//               accept="image/*"
//             />
//             {formData.coverImage && (
//               <ImagePreview>
//                 <img src={URL.createObjectURL(formData.coverImage)} alt="Preview" />
//                 <button type="button" onClick={() => setFormData({...formData, coverImage: null})}>
//                   Remove
//                 </button>
//               </ImagePreview>
//             )}
//           </ImageUploadContainer>
//         </FormGroup>

//         <FormGroup>
//           <Label>Blog Content:</Label>
//           <RichTextEditor
//             value={formData.content}
//             onChange={handleEditorChange}
//             modules={{
//               toolbar: [
//                 [{ header: [1, 2, false] }],
//                 ["bold", "italic", "underline", "blockquote"],
//                 [{ list: "ordered" }, { list: "bullet" }],
//                 ["link", "image"],
//                 ["clean"]
//               ]
//             }}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Post Status:</Label>
//           <Select 
//             name="status" 
//             value={formData.status}
//             onChange={handleChange}
//           >
//             <option value="draft">Draft</option>
//             <option value="published">Published</option>
//             <option value="archived">Archived</option>
//           </Select>
//         </FormGroup>

//         <SubmitButton type="submit" disabled={loading}>
//           {loading ? "Publishing..." : "Publish Post"}
//         </SubmitButton>
//       </Form>
//     </FormContainer>
//   );
// };
// // Rest of the styled components remain the same

// // New Styled Components
// const RichTextEditor = styled(ReactQuill)`
//   .ql-container {
//     min-height: 300px;
//     font-size: 1rem;
//     border-radius: 0 0 8px 8px !important;
//   }

//   .ql-toolbar {
//     border-radius: 8px 8px 0 0 !important;
//   }
// `;

// const ImageUploadContainer = styled.div`
//   input[type="file"] {
//     display: none;
//   }

//   label {
//     display: inline-block;
//     padding: 0.8rem 1.5rem;
//     background: #4ecdc4;
//     color: white;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: all 0.3s ease;

//     &:hover {
//       background: #45b7af;
//     }
//   }
// `;

// const ImagePreview = styled.div`
//   margin-top: 1rem;
//   position: relative;

//   img {
//     max-width: 300px;
//     max-height: 200px;
//     border-radius: 8px;
//     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//   }

//   button {
//     position: absolute;
//     top: 8px;
//     right: 8px;
//     padding: 0.3rem 0.6rem;
//     background: rgba(255,0,0,0.8);
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//   }
// `;

// // Rest of the styled components remain the same

// //   return (
// //     // JSX for BlogForm component
// //   );
// // };

// const SubmitButton = styled.button`
//   background: linear-gradient(135deg, #4ecdc4, #45b7af);
//   color: white;
//   padding: 1.2rem 2.5rem;
//   border: none;
//   border-radius: 12px;
//   font-size: 1.1rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   margin-top: 1rem;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 8px 20px rgba(78, 205, 196, 0.3);
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `;

// export default BlogForm;



// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { ref, push } from "firebase/database";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useAuth } from "../component/AuthContext";
// // import slugify from "slugify";
// // import ReactQuill from "react-quill";
// // import "react-quill/dist/quill.snow.css";
// import { database } from "../firebase";

// // Initialize Firebase Storage
// const storage = getStorage();

// const BlogForm = () => {
//   const { currentUser } = useAuth();
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     author: currentUser?.displayName || "",
//     bio: "",
//     category: "Technology",
//     tags: [],
//     excerpt: "",
//     content: "",
//     metaTitle: "",
//     metaDescription: "",
//     slug: "",
//     allowComments: true,
//     publishDate: new Date().toISOString().slice(0, 16),
//     featured: false,
//     coverImage: null,
//     status: "draft",
//   });

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     console.log("Current user:", currentUser);
//   }, [currentUser]);

//   // Auto-generate slug and meta fields
//   useEffect(() => {
//     if (formData.title) {
//       const slug = slugify(formData.title, { lower: true, strict: true });
//       setFormData(prev => ({
//         ...prev,
//         slug,
//         metaTitle: formData.metaTitle || `${formData.title} | My Blog`,
//         metaDescription: formData.metaDescription || formData.excerpt.slice(0, 160)
//       }));
//     }
//   }, [formData.title, formData.excerpt]);

//   const handleEditorChange = (content) => {
//     setFormData(prev => ({ ...prev, content }));
//   };

//   const handleImageUpload = async (file) => {
//     try {
//       const reference = storageRef(storage, `blogImages/${file.name}`);
//       await uploadBytes(reference, file);
//       return await getDownloadURL(reference);
//     } catch (error) {
//       toast.error("Image upload failed");
//       throw error;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let imageUrl = "";
//       if (formData.coverImage) {
//         imageUrl = await handleImageUpload(formData.coverImage);
//       }

//       const postData = {
//         ...formData,
//         author: currentUser?.email || "Anonymous",
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//         views: 0,
//         likes: 0,
//         coverImageUrl: imageUrl,
//         tags: formData.tags.split(",").map(tag => tag.trim()),
//         userId: currentUser?.uid || null,
//       };

//       const postsRef = ref(database, "posts");
//       await push(postsRef, postData);

//       toast.success("Blog post published successfully!");
//       resetForm();
//     } catch (error) {
//       toast.error(error.message || "Submission failed");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       subtitle: "",
//       author: currentUser?.displayName || "",
//       bio: "",
//       category: "Technology",
//       tags: [],
//       excerpt: "",
//       content: "",
//       metaTitle: "",
//       metaDescription: "",
//       slug: "",
//       allowComments: true,
//       publishDate: new Date().toISOString().slice(0, 16),
//       featured: false,
//       coverImage: null,
//       status: "draft",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   return (
//     <FormContainer>
//       <ToastContainer />
//       <h2>Create New Blog Post</h2>
      
//       <Form onSubmit={handleSubmit}>
//         {/* Form fields */}

//         <FormGroup>
//           <Label>Featured Image:</Label>
//           <ImageUploadContainer>
//             <input 
//               type="file" 
//               onChange={(e) => setFormData({...formData, coverImage: e.target.files[0]})}
//               accept="image/*"
//             />
//             {formData.coverImage && (
//               <ImagePreview>
//                 <img src={URL.createObjectURL(formData.coverImage)} alt="Preview" />
//                 <button type="button" onClick={() => setFormData({...formData, coverImage: null})}>
//                   Remove
//                 </button>
//               </ImagePreview>
//             )}
//           </ImageUploadContainer>
//         </FormGroup>

//         <FormGroup>
//           <Label>Blog Content:</Label>
//           <RichTextEditor
//             value={formData.content}
//             onChange={handleEditorChange}
//             modules={{
//               toolbar: [
//                 [{ header: [1, 2, false] }],
//                 ["bold", "italic", "underline", "blockquote"],
//                 [{ list: "ordered" }, { list: "bullet" }],
//                 ["link", "image"],
//                 ["clean"]
//               ]
//             }}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Post Status:</Label>
//           <Select 
//             name="status" 
//             value={formData.status}
//             onChange={handleChange}
//           >
//             <option value="draft">Draft</option>
//             <option value="published">Published</option>
//             <option value="archived">Archived</option>
//           </Select>
//         </FormGroup>

//         <SubmitButton type="submit" disabled={loading}>
//           {loading ? "Publishing..." : "Publish Post"}
//         </SubmitButton>
//       </Form>
//     </FormContainer>
//   );
// };

// // Styled Components
// const FormContainer = styled.div`
//   max-width: 800px;
//   margin: 2rem auto;
//   padding: 2.5rem;
//   background: rgba(255, 255, 255, 0.95);
//   border-radius: 20px;
//   backdrop-filter: blur(12px);
//   box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
//   border: 1px solid rgba(255, 255, 255, 0.3);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
// `;

// const Label = styled.label`
//   font-weight: 600;
//   color: #2d3436;
//   font-size: 0.95rem;
//   margin-left: 0.5rem;
// `;

// const RichTextEditor = styled(ReactQuill)`
//   .ql-container {
//     min-height: 300px;
//     font-size: 1rem;
//     border-radius: 0 0 8px 8px !important;
//   }
//   .ql-toolbar {
//     border-radius: 8px 8px 0 0 !important;
//   }
// `;

// const ImageUploadContainer = styled.div`
//   input[type="file"] {
//     display: none;
//   }
// `;

// const ImagePreview = styled.div`
//   margin-top: 1rem;
//   position: relative;
//   img {
//     max-width: 300px;
//     max-height: 200px;
//     border-radius: 8px;
//   }
// `;

// const Select = styled.select`
//   padding: 1rem;
//   border: 2px solid #e2e8f0;
//   border-radius: 12px;
//   font-size: 1rem;
// `;

// const SubmitButton = styled.button`
//   background: linear-gradient(135deg, #4ecdc4, #45b7af);
//   color: white;
//   padding: 1.2rem 2.5rem;
//   border: none;
//   border-radius: 12px;
//   font-size: 1.1rem;
//   cursor: pointer;
// `;
import { useState, useEffect } from "react";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../component/AuthContext";
import { database, storage } from "../firebase/index.js";
import "../styles/BlogForm.css"
// // import {Footer}  from "../component/Footer"
// import Footer from "../component/Footer";


const BlogForm = () => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Technology",
    tags: "",
    excerpt: "",
    allowComments: true,
    featured: false,
    status: "draft",
    coverImage: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
      setSuccess("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [error, success]);

  const handleImageUpload = async (file) => {
    if (!file) return null;
    
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPEG/PNG)");
      return null;
    }

    try {
      const reference = storageRef(storage, `blogImages/${Date.now()}_${file.name}`);
      await uploadBytes(reference, file);
      return await getDownloadURL(reference);
    } catch (err) {
      console.error("Upload error:", err);
      setError("Image upload failed. Please try again.");
      return null;
    }
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Title is required");
      return false;
    }
    if (!formData.content.trim()) {
      setError("Content is required");
      return false;
    }
    if (formData.tags.split(",").length > 5) {
      setError("Maximum 5 tags allowed");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      setError("You must be logged in to create a post");
      return;
    }
    
    if (!validateForm()) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Upload image first if exists
      const imageUrl = formData.coverImage 
        ? await handleImageUpload(formData.coverImage)
        : null;

      // Prepare post data
      const postData = {
        title: formData.title.trim(),
        content: formData.content.trim(),
        category: formData.category,
        tags: formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
        excerpt: formData.excerpt.trim() || `${formData.content.trim().substring(0, 100)}...`,
        author: {
          uid: currentUser.uid,
          name: currentUser.displayName || "Anonymous",
          email: currentUser.email,
        },
        status: formData.status,
        featured: formData.featured,
        allowComments: formData.allowComments,
        coverImage: imageUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        views: 0,
        likes: 0,
      };

      // Add to Firestore
      const docRef = await addDoc(collection(database, "posts"), postData);
      
      setSuccess(`Blog post ${formData.status === 'draft' ? 'saved as draft' : 'published successfully'}!`);
      resetForm();
      
      console.log("Document written with ID: ", docRef.id);

    } catch (err) {
      console.error("Submission error:", err);
      setError(err.message || "Failed to publish post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      category: "Technology",
      tags: "",
      excerpt: "",
      allowComments: true,
      featured: false,
      status: "draft",
      coverImage: null,
    });
  };

  return (
    <div className="BlogFormHead">
    <div className="form-container">
      <ToastContainer />
      <h2>Create New Blog Post</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Content:</label>
          <textarea name="content" value={formData.content} onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <label>Post Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Publishing..." : "Publish Post"}
        </button>
      </form>

    </div>
{/* <Footer/> */}
    </div>
    
  );
};

export default BlogForm;
