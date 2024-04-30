import { useEffect } from "react";

import type { RefObject } from "react";

interface Arguments{
    closeFn:()=>void
    modalCloseRef:RefObject<HTMLDivElement>
}

type UseCloseModalType = ({closeFn,modalCloseRef}:Arguments)=>void;


const useCloseModal:UseCloseModalType = ({closeFn,modalCloseRef}) => {

    useEffect(() => {
        const keyHandler = (e:KeyboardEvent)=>{
          if(e.key === "Escape") closeFn();
        }
        const clickHandler =(e: MouseEvent)=>{
            if(modalCloseRef.current && !modalCloseRef.current.contains(e.target as Node)){
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