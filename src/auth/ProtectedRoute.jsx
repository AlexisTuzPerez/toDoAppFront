import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



function ProtectedRoute({children}){
    const {user, loading} = useAuth()

    const navigate = useNavigate();


    useEffect(() =>{
        if(!loading && !user){
            navigate("/")
        }
    },[user, loading, navigate])


    if(loading){
        return <div> Loading </div>
    }

    return user ? children : null
    

}

ProtectedRoute.propTypes = {
    children: PropTypes.any.isRequired
}



export default ProtectedRoute