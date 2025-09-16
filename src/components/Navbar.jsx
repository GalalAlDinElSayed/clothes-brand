// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../assets/1.jpg";
import "./Navbar.css";

export default function Navbar({ cart }) {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="ClothesBrand Logo" className="logo-img" />
        <h2 className="logo-text">Ninja Dark</h2>
      </div>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/cart">
            Cart ({cart.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
}
