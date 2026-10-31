import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

// ProductDetail: fetches and shows one product based on the id in the URL
const ProductDetail = () => {
  // useParams reads the id from the route: /product/:id
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Runs when the component mounts (and again if the id changes)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        // Handle failed requests gracefully
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="message">Loading product...</p>;
  if (error) return <p className="message error">Error: {error}</p>;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} loading="lazy" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="category">Category: {product.category}</p>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <p>Rating: {product.rating} ⭐</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;