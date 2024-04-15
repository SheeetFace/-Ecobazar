import { useEffect } from 'react';

import { useLocation} from 'react-router-dom';

import BreadcrumbItem from '../../atoms/BreadcrumbItem/BreadcrumbItem';

import styles from '../Breadcrumb/Breadcrumb.module.scss';

import type { ILocation } from '../../../types/locationTypes';

const Breadcrumb:React.FC = ()=>{

    const location:ILocation = useLocation()

    useEffect(()=>{
      console.log(location)
    },[location])//breadcrumb

    const renderBreadcrumbItem = ():JSX.Element[]=>{
        return tempBreadcrumbData.map((item,i)=>{
            return(
                <>
                    <BreadcrumbItem name={item.name} 
                                    pathBack={item.pathBack}
                                    key={i}/>

                    {tempBreadcrumbData.length-1 !== i 
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


const tempBreadcrumbData  = [
    {
        name:'Home',
        pathBack:'/'
    },
    {
        name:'Vegetables',
        pathBack:'/shop'
    },
    {
        name:'Chinese Cabbage',
        pathBack:'/vegetables'
    },

]