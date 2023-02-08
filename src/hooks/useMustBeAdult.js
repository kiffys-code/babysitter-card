import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getIsAdult } from "config/storage";

const useMustBeAdult = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const isAdult = getIsAdult();

    useEffect(() => {
        if(!isAdult && !location.pathname.includes('adult')) {
            navigate('/adult-policy');
        }
    }, [location, isAdult, navigate])
}

export default useMustBeAdult;