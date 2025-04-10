import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Weather from "@/pages/Weather.jsx";
import Detect from "@/pages/Detect.jsx";
import Manage from "@/pages/Manage.jsx"
import Home from "@/pages/Home.jsx";
import Login from "@/pages/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Weather",
        element: <Weather/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/detect",
        element: <Detect/>
      },
      {
        path: "/manage",
        element: <Manage/>
      },
    ],
  },
]);

export default router;
