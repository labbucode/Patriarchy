import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CoverPage from './pages/CoverPage.jsx';
import IndexPage from './pages/ContentPage.jsx';
import Advantage from './pages/Advantage.jsx';
import DisAdvantage from './pages/DisAdvantage.jsx';
import HeroPage from './pages/HeroPage.jsx';
import Reference from './pages/Reference.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoverPage />,
  },
  {
    path: "indexpage",
    element: <IndexPage />,
  },
  {
    path: "advantage",
    element: <Advantage />,
  },
  {
    path: "reference",
    element: <Reference />,
  },
  {
    path: "heropage",
    element: <HeroPage />,
  },
  {
    path: "disadvantage",
    element: <DisAdvantage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
