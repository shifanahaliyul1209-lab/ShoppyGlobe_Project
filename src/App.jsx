import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

// Code splitting: each page loads only when it is opened
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

// All routes of the app
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // Shown if something crashes while loading a route
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <NotFound />
      </Suspense>
    ),
    children: [
      { index: true, element: <ProductList /> }, // Home
      { path: "product/:id", element: <ProductDetail /> }, // dynamic route
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "*", element: <NotFound /> }, // unknown routes (404)
    ],
  },
]);
// Main component: sets up the app routes
function App() {
  return <RouterProvider router={router} />;
}

export default App;