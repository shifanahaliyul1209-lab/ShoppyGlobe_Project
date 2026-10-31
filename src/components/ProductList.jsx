import { useSelector, useDispatch } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import { selectSearchTerm, setSearchTerm } from "../redux/searchSlice";
import ProductItem from "./ProductItem";

// ProductList: fetches products, filters them by the Redux search term, and shows them
const ProductList = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  // Our custom hook gives us the data, loading status and error
  const { products, loading, error } = useFetchProducts();

  // Show a message while loading or if the fetch failed
  if (loading) return <p className="message">Loading products...</p>;
  if (error) return <p className="message error">Error: {error}</p>;

  // Keep only the products whose title matches the search text
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-page">
      <input
        type="text"
        className="search-box"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />

      {filteredProducts.length === 0 ? (
        <p className="message">No products found.</p>
      ) : (
        <div className="product-grid">
          {/* key must be unique for each item in a list */}
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;