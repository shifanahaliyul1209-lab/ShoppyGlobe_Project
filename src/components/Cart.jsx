import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/cartSlice";
import CartItem from "./CartItem";

// Cart: shows all items in the cart, the total price and a checkout link
const Cart = () => {
  // Read data from the Redux store using selectors
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  // Show a message when the cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/" className="btn-link">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {/* key must be unique for each item in the list */}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <Link to="/checkout" className="btn-link">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;