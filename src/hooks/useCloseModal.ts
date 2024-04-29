import { useEffect } from "react";

import type { RefObject } from "react";

interface Arguments{
    ref:RefObject<HTMLDivElement>
    closeFn:()=>void
}

type UseCloseModalType = ({ref,closeFn}:Arguments)=>void;


const useCloseModal:UseCloseModalType = ({ ref,closeFn}) => {

    useEffect(() => {
        const keyHandler = (e:KeyboardEvent)=>{
          if(e.key === "Escape") closeFn();
        }
        const clickHandler =(e: MouseEvent)=>{
            if(ref.current && e.target === ref.current){
                closeFn();
            }
        }
    
        window.addEventListener('keydown', keyHandler);
        window.addEventListener('mousedown', clickHandler);
    
        return ()=>{
          window.removeEventListener('keydown', keyHandler);
          window.removeEventListener('mousedown', clickHandler);
        }
    },[]);

}

export default useCloseModal;