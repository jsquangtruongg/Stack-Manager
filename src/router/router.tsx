import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";

import HomeLayout from "../layout/headerLayout";
import StackPage from "../pages/stack";
import WordStackPage from "../pages/wordStack";
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
      {
        path: "/word-stack",
        element: <WordStackPage />,
      },
    ],
  },
]);

export default router;
