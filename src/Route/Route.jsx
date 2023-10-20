import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/AddProducts/AddProducts";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import ProductUpdate from "../Pages/ProductsUpdate/ProductUpdate";
import Cart from "../Pages/Cart/Cart";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";




export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/add_product',
                element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path:'/my_cart',
                element:<PrivateRoute><Cart></Cart></PrivateRoute>,
                loader:() => fetch('https://food-bevarage-server-mu.vercel.app/cart')
            },
            {
                path:'/brand/:name',
                element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
                loader:() => fetch('https://food-bevarage-server-mu.vercel.app/products')
            },
            {
                path:'/product/:id',
                element:<PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
                loader:({params}) => fetch(`https://food-bevarage-server-mu.vercel.app/product/${params.id}`)
            },
            {
                path:'/productUpdate/:id',
                element:<PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>,
                loader:({params}) => fetch(`https://food-bevarage-server-mu.vercel.app/product/${params.id}`)

            }
        ]
    }
])

