import { useState, useEffect } from 'react';

const useDebounce=(value:string, delay:number)=>{
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timerID = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);

        return()=>{clearTimeout(timerID)};
        
    }, [value, delay]);

    return debouncedValue;
}

export  default useDebounce;