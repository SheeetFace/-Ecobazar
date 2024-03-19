import BreadcrumbItem from '../../atoms/BreadcrumbItem/BreadcrumbItem';

import styles from '../Breadcrumb/Breadcrumb.module.scss';

const Breadcrumb:React.FC = ()=>{

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
        <div className={styles.Breadcrumb}>
            <div className={styles._container}>
                <div className='center'>
                    {renderBreadcrumbItem()}
                </div>
            </div>
        </div>
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