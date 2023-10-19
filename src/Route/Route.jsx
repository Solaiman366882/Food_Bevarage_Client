import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/AddProducts/AddProducts";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";




export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
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
                element:<AddProducts></AddProducts>
            },
            {
                path:'/my_cart',
                element:<></>
            },
            {
                path:'/brand/:name',
                element:<BrandDetails></BrandDetails>
            }
        ]
    }
])

