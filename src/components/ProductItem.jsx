import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../redux/cartSlice";

// ProductItem: shows one product. The product data comes from ProductList as a prop.
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      {/* loading="lazy" loads the image only when it comes into view */}
      <img src={product.thumbnail} alt={product.title} loading="lazy" />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="details-link">
        View Details
      </Link>
      {/* Sends the product to the Redux cart */}
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

// PropTypes check that the data we receive has the right type
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;