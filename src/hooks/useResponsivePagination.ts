import { useEffect, useState } from "react"

import { debounce } from 'lodash';

type Breakpoint = {[key: number]:number}

interface Options{
    defaultItems:number
    breakpoints: Breakpoint[]
}

type UseResponsivePagination = (options:Options)=>number;

const useResponsivePagination:UseResponsivePagination = ({defaultItems,breakpoints})=>{
    const [itemsPerPage, setItemsPerPage] = useState<number>(defaultItems)

    useEffect(()=>{

        const handleResize = ()=>{
            const width = window.innerWidth
            let items = defaultItems
            
            for( const breakpoint of breakpoints){
                const [value] =Object.entries(breakpoint)
                if(width < +value[0] ) items = value[1]
            }
            setItemsPerPage(items)
        }

        const debouncedHandleResize = debounce(handleResize, 150);

        window.addEventListener('resize', debouncedHandleResize);
        return () => window.removeEventListener('resize', debouncedHandleResize);

    },[defaultItems,breakpoints])

    return itemsPerPage
}
export default useResponsivePagination;