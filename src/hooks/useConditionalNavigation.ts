import { useEffect } from "react";

import { useNavigate,useLocation } from "react-router-dom";


const useConditionalNavigation = (redirect:string) => {
    
    const navigate = useNavigate()

    const locationState = useLocation();
    const data = locationState.state?.data;
    const hash = locationState.hash;
    
    useEffect(()=>{
        if(!data && !hash) return navigate(redirect)
    },[data,hash,navigate])

    return {data,hash};
}

export default useConditionalNavigation;