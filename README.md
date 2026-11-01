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