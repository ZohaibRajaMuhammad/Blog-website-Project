import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../component/AuthContext';
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import "../styles/styles.css";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleCreatePost = () => {
    if (!currentUser) {
      navigate("/login");
    } else {
      navigate("/create-post");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Zarrin Logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="search-icon"><FaSearch /></li>

        {/* Contact Us Button */}
        <li>
          <button className="contact-btn">
            <Link to="/contact">Contact Us</Link>
          </button>
        </li>

        {/* Create Blog Post Button with Auth Check */}
        <li>
          <button className="create-post-btn" onClick={handleCreatePost}>
            Create Blog Post
          </button>
        </li>

        {/* Logout Button (visible when logged in) */}
        {currentUser && (
          <li>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;