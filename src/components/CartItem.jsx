import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice";

// CartItem: shows one product in the cart. The item data comes from Cart as a prop.
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} loading="lazy" />

      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p className="price">${item.price}</p>

        <div className="qty-controls">
          {/* Disabled at 1, so quantity never goes below 1 */}
          <button
            onClick={() => dispatch(decreaseQty(item.id))}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        </div>

        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Removes the product from the Redux cart */}
      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
};

// PropTypes check the type of data we receive
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;