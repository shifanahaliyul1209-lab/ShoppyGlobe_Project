import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

// Header is also lazy loaded (loaded only when needed)
const Header = lazy(() => import("./Header"));

// Layout: Header on top, and the current page below it
const Layout = () => {
  return (
    <>
      <Suspense fallback={<p className="message">Loading header...</p>}>
        <Header />
      </Suspense>

      <main className="main-content">
        {/* Suspense shows the fallback while a lazy page is loading */}
        <Suspense fallback={<p className="message">Loading page...</p>}>
          {/* Outlet is where the current route's page appears */}
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;