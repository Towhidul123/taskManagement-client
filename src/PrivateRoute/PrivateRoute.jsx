import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProvider";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <span className="flex place-content-center justify-center justify-items-center items-center loading loading-spinner loading-lg"></span>
    }


    if(user){
     return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>

    
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}