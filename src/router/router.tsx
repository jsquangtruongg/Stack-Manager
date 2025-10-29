import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";

import HomeLayout from "../layout/headerLayout";
import StackPage from "../pages/stack";
import WordStackPage from "../pages/wordStack";
import AuthPage from "../pages/authPage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
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
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
