import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../redux/cartSlice";

// Checkout: dummy form + order summary + Place Order button
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  // State for the form fields and the success message
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Update the field the user is typing in
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // stop the page from reloading

    setOrderPlaced(true); // show "Order placed"
    dispatch(clearCart()); // empty the cart in Redux

    // Go back to the Home page after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // Show the success message after placing the order
  if (orderPlaced) {
    return (
      <div className="order-success">
        <h2>Order placed ✅</h2>
        <p>Thank you for shopping! Redirecting to Home...</p>
      </div>
    );
  }

  // If the cart is empty, there is nothing to check out
  if (cartItems.length === 0) {
    return <p className="message">Your cart is empty.</p>;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-content">
        {/* Dummy form to collect user details */}
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Place Order</button>
        </form>

        {/* Summary of the products in the cart */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <p key={item.id}>
              {item.title} × {item.quantity} = $
              {(item.price * item.quantity).toFixed(2)}
            </p>
          ))}
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Checkout;