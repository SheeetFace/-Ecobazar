import { useEffect } from 'react';

import type { InitProductFilter } from '../types/productFilterType';
import type { InitBlogFilter } from '../types/blogFilterTypes';

type Ref =React.RefObject<HTMLDivElement>

type UseSmoothTransition = (ref:Ref,filter:InitProductFilter|InitBlogFilter,currentPage:number)=>void

const useSmoothTransition:UseSmoothTransition=(ref,filter,currentPage)=>{

    useEffect(() => {
        if(ref.current){
        ref.current.classList.add('fadeInOutContent');

        const timer = setTimeout(()=>{
            ref.current?.classList.remove('fadeInOutContent');
        },600);

        return ()=>clearTimeout(timer);
        }
    }, [filter,currentPage]);
}

export default useSmoothTransition;
