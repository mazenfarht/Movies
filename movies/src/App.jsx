import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ActionMovies from './Components/Detailes/ActionMovies';
import Detailes from './Components/Detailes/Detailes';
import Movies from './Components/Detailes/Movies';
import Series from './Components/Detailes/Series';
import Layout from './Components/Mainlayout/Layout';
import PageNotFound from './Components/PageNotFound';
import ProductionHouse from './Components/ProductionHouse/ProductionHouse';
import Slider from './Components/Slider/Slider';
import WatchList from './Components/WatchList/WatchList';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter([ // Declare routes with 'const'
    {
      path: '',
      element: <Layout />,
      children: [
        { path: 'slider', element: <Slider /> },
        { path: '/', element: <ProductionHouse /> },
        { path: '/home', element: <ProductionHouse /> },
        {path:'watchlist', element:<WatchList/>},
        { path: "/details/:itemId", element: <Detailes /> },
        { path: "/movies", element: <Movies/> },
        { path: "/series", element: <Series/> },
        { path: "/action", element: <ActionMovies/> },
        { path: "*", element: <PageNotFound/> },
      ]
    }
  ]);

  return (
    <>
    <ToastContainer theme="colored" />

    <RouterProvider router={routes} />
    </>
  
  );
}

export default App;
