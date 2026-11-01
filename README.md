# ShoppyGlobe

An Amazon-inspired e-commerce application built with React and Vite.

**GitHub Repository:** https://github.com/shifanahaliyul1209-lab/ShoppyGlobe_Project

## Features
- Product list fetched from the DummyJSON API using a custom hook (`useFetchProducts`)
- Search products (search term stored in Redux)
- Product detail page using route parameters (`/product/:id`)
- Cart with add, remove and quantity change (quantity never goes below 1)
- Checkout with a dummy form and order summary. "Place Order" shows "Order placed", empties the cart and redirects to Home
- 404 page with error details
- Error handling for failed data fetches
- Code splitting with `React.lazy` and `Suspense`, and lazy loaded images
- Responsive design for mobile, tablet and desktop

## Tech Stack
React, Vite, Redux Toolkit, React Router (`createBrowserRouter`), PropTypes, CSS

## Folder Structure
- `src/components`: Header, ProductList, ProductItem, ProductDetail, Cart, CartItem, Checkout, NotFound, Layout
- `src/redux`: cartSlice, searchSlice, store
- `src/hooks`: useFetchProducts

## How to Run
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173`

## Note
Product data and prices come from https://dummyjson.com/products (prices are in USD).