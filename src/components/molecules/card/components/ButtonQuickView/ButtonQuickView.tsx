import { useContext } from 'react';
import { ProductModalContext } from '../../../../../context/ProductModalContext';

import Button from '../../../../atoms/Button/Button';

import EyeIcon from '../../../../atoms/icon/navigate/EyeIcon';

import styles from '../ButtonQuickView/ButtonQuickView.module.scss';

interface ButtonQuickViewProps{
    name:string,
    id:string,
    src:string,
    currentCost:string,
    oldCost:string,
    sale:string,
    rating:string,
    promotedCategories:string[]
    weight:string
    color:string
    type:string
    category:string
    stockStatus:string
    date:string
    tag:string
    description:string
}

const ButtonQuickView:React.FC<ButtonQuickViewProps> = (props) => {

    const {openProductModal} = useContext(ProductModalContext)

    const openQuickView =(id:string)=>{
        console.log(`${id} opened quick view`)
        openProductModal(props)
    }

    return (
        <div className={styles.ButtonQuickView}>
                        <div className={styles.ButtonQuickView}>
                        <Button className='ButtonTransparent' 
                                icon={<EyeIcon className={styles._buttonQuickViewIcon}/>}
                                onClick={()=>openQuickView(props.id)} 
                                type='button'/>
                </div>
        </div>
    )
}

export default ButtonQuickView;