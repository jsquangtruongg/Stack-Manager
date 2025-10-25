import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";

import HomeLayout from "../layout/headerLayout";
const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
