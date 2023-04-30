import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Generator from "../components/Generator/Generator";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import PrivetRoute from "../components/Auth/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/generator",
        element: (
          <PrivetRoute>
            <Generator></Generator>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
