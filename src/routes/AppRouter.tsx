import MainLayout from "@/layouts/MainLayout";
import {
  AboutPage,
  CareerPage,
  Contact,
  Error,
  Home,
  ProductPage,
  ProductsPage,
} from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
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
          element: <AboutPage />,
        },
        {
          path: "products/:productId",
          element: <ProductPage />,
        },
        {
          path: "products",
          element: <ProductsPage />,
        },
        {
          path: "career",
          element: <CareerPage />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const AppRouter = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default AppRouter;
