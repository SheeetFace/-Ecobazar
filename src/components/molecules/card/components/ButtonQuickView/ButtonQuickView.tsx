import { useContext } from 'react';
import { ProductModalContext } from '../../../../../context/ProductModalContext';

import Button from '../../../../atoms/Button/Button';

import EyeIcon from '../../../../atoms/icon/navigate/EyeIcon';

import styles from '../ButtonQuickView/ButtonQuickView.module.scss';

import type { ProductDataType as ButtonQuickViewProps} from '../../../../../types/productDataTypes';


const ButtonQuickView:React.FC<ButtonQuickViewProps> = (props) => {

    const {openProductModal} = useContext(ProductModalContext)

    const openQuickView =(id:string)=>{
        console.log(`${id} opened quick view`)
        openProductModal(props)
    }

    return (
        <div className={styles.ButtonQuickView} 
             onClick={()=>openQuickView(props.id)}>
                        <div className={styles.ButtonQuickView}>
                        <Button className='ButtonTransparent' 
                                icon={<EyeIcon className={styles._buttonQuickViewIcon}/>}
                                type='button'/>
                </div>
        </div>
    )
}

export default ButtonQuickView;