import { Link, useLocation, useRouteError } from "react-router-dom";

// NotFound: 404 page shown for unknown routes, with error details on the UI
const NotFound = () => {
  // useLocation gives the address the user tried to open
  const location = useLocation();
  // useRouteError gives error details if a route fails (undefined for a normal 404)
  const routeError = useRouteError();

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page <strong>{location.pathname}</strong> does not exist.
      </p>

      {/* Show error details if there are any */}
      {routeError && (
        <p className="error">
          Error details: {routeError.statusText || routeError.message}
        </p>
      )}

      <Link to="/" className="btn-link">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;