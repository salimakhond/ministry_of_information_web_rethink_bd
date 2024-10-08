import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./ui/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default router;
