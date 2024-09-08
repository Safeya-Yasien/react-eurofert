import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, Error, Home, Jobs, LastNews, Shop } from "../pages";
import { MainLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "last-news",
        element: <LastNews />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
