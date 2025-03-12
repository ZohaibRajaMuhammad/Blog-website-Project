import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BlogProvider } from './component/BlogContext'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </StrictMode>
)
// import { ThemeProvider } from 'styled-components';

// const theme = {
//   colors: {
//     primary: '#2d3436',
//     background: 'rgba(255, 255, 255, 0.95)',
//     text: '#4a5568'
//   }
// };

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </StrictMode>
// );