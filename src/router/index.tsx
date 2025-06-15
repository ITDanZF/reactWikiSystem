import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import MainContentLayout from "../layout/MainContentLayout";
import About from "../pages/about/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/note",
        element: <MainContentLayout />,
        children: []
      }
    ]
  }
]);

export default router;
