import { createBrowserRouter } from "react-router-dom";
import axios from "axios";

// components
import LoginPage from "../Components/LoginPage.jsx";
import Main from "../Components/Main.jsx";
import Form from "../Components/Form.jsx";
import Projects from "../Components/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
    // errorElement: <ProductsError />,
  },
  {
    path: "/projects",
    element: <Projects />,
    // errorElement: <ProductsError />,
  },
  {
    path: "/dataCreateForm",
    element: <Form />,
    // errorElement: <ProductsError />,
  },
]);

export default router;
