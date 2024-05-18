import { useEffect } from 'react';

const useScrollLock=(isLocked: boolean)=>{

    useEffect(() => {
        const handleWindowWheel =(event:WheelEvent)=>{
            if(isLocked) event.preventDefault();
        };

        window.addEventListener('wheel', handleWindowWheel, { passive: false });

        return()=>{
            window.removeEventListener('wheel', handleWindowWheel);
        };
    }, [isLocked]);
}

export default useScrollLock;