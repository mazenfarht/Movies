import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./index.css";
import Layout from "./Components/Mainlayout/Layout";
import ProductionHouse from "./Components/ProductionHouse/ProductionHouse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Movies = lazy(() => import("./Components/Detailes/Movies"));
const Series = lazy(() => import("./Components/Detailes/Series"));
const Detailes = lazy(() => import("./Components/Detailes/Detailes"));
const WatchList = lazy(() => import("./Components/WatchList/WatchList"));
const ActionMovies = lazy(() => import("./Components/Detailes/ActionMovies"));
const PageNotFound = lazy(() => import("./Components/PageNotFound"));
const Slider = lazy(() => import("./Components/Slider/Slider"));

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "slider", element: <Slider /> },
        { path: "/", element: <ProductionHouse /> },
        { path: "/home", element: <ProductionHouse /> },
        { path: "watchlist", element: <WatchList /> },
        { path: "/details/:itemId", element: <Detailes /> },
        { path: "/movies", element: <Movies /> },
        { path: "/series", element: <Series /> },
        { path: "/action", element: <ActionMovies /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer theme="colored" />

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-white text-2xl">
            Loading...
          </div>
        }
      >
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
}

export default App;
