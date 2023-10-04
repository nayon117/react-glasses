import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import NotFound from "../Components/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const url = 'https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses';
const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: async () => (fetch(url))
      },
      {
        path: 'products',
        element: <Products />,
        loader: async () => (fetch(url))
      },
      {
        path: 'product/:id',
        element: <PrivateRoute><ProductDetail /></PrivateRoute>,
        loader: async ({ params }) => (fetch(`${url}/${params.id}`))
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
     }
 ])

export default  myCreatedRoute;