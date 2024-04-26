import { useEffect, useState } from 'react';

import { useLocation} from 'react-router-dom';

import { parsePathToBreadcrumb } from '../../../utils/parsePathToBreadcrumb';

import BreadcrumbItem from '../../atoms/BreadcrumbItem/BreadcrumbItem';

import styles from '../Breadcrumb/Breadcrumb.module.scss';

import type { ILocation } from '../../../types/locationTypes';
interface BreadcrumbItem{
    name:string
    pathBack:string
}

type Breadcrumb = BreadcrumbItem[]|[]


const Breadcrumb:React.FC = ()=>{

    const [breadcrumb, setBreadcrumb] = useState<Breadcrumb>([])

    const location:ILocation = useLocation()

    useEffect(()=>{
        if(location) setBreadcrumb(parsePathToBreadcrumb(location.pathname)) 
    },[location])

    const renderBreadcrumbItem =():JSX.Element[]=>{
            return breadcrumb.map((item,i)=>{

                const isLast = breadcrumb.length-1 === i;

                return(
                    <>
                        <BreadcrumbItem name={item.name} 
                                        pathBack={item.pathBack}
                                        key={item.pathBack}
                                        isLast={isLast}
                                        />

                        {!isLast 
                            ? 
                                <span className={styles._arrow}>&gt;</span>
                        :null}  
                    </>              
                ) 
        })
    }

    return(
        <section className={styles.Breadcrumb}>
            <div className={styles._container}>
                <div className='center'>
                    {renderBreadcrumbItem()}
                </div>
            </div>
        </section>
    )
}
export default Breadcrumb;
