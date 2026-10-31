import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";

// Header: navigation menu and cart icon with item count
const Header = () => {
  // Read the total number of cart items from the Redux store
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="header">
      <Link to="/" className="logo">
        ShoppyGlobe
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;