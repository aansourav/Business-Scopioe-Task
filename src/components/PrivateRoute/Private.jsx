
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpiner";



const Private = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();

    if(loading){
        return <LoadingSpinner/>
    }
    
    if(user){
        return children
    }
    return (
       <Navigate state={location?.pathname || '/'} to='/'></Navigate>
    );
};

export default Private;