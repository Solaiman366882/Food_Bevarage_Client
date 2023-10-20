import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import './loader.css'


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    const location = useLocation();



    if(loading){
        return <div className="h-[80vh] w-full flex justify-center items-center"><div className="custom-loader"></div></div>
    }else{
        
        if(user){
            return children
        }else{
            return <Navigate state={location.pathname} to="/login"></Navigate>
        }
    }


         
};

PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute;