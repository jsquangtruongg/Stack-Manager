import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";

import HomeLayout from "../layout/headerLayout";
import StackPage from "../pages/stack";
const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/mywork/today",
        element: <StackPage />,
      },
    ],
  },
]);

export default router;
