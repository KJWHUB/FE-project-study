import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "@src/pages/home";

const DefalutLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefalutLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
