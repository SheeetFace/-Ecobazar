import { useEffect, MutableRefObject } from 'react';

const useScrollLock =(isLocked:boolean, ref:MutableRefObject<HTMLElement|null>)=>{

  useEffect(()=>{
    const handleScrollEvent=(event:Event)=>{

        if(isLocked){

            const targetElement = ref.current;

            if(targetElement){
                const { scrollTop, scrollHeight, clientHeight } = targetElement;
                const isAtTop = scrollTop === 0;
                const isAtBottom = scrollTop + clientHeight >= scrollHeight;

                if((isAtTop && (event as WheelEvent).deltaY < 0)||(isAtBottom && (event as WheelEvent).deltaY > 0)){
                    event.preventDefault();

                }else if(!targetElement.contains(event.target as Node)) event.preventDefault();
            
            }else{
                event.preventDefault();
            }
        }
    };

    window.addEventListener('wheel', handleScrollEvent, { passive: false });
    window.addEventListener('touchmove', handleScrollEvent, { passive: false });

    return () => {
        window.removeEventListener('wheel', handleScrollEvent);
        window.removeEventListener('touchmove', handleScrollEvent);
    };
  },[isLocked, ref]);
};

export default useScrollLock;