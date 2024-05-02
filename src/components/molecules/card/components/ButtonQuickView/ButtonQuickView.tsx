import { useContext } from 'react';
import { ProductModalContext } from '../../../../../context/ProductModalContext';

import Button from '../../../../atoms/Button/Button';

import EyeIcon from '../../../../atoms/icon/navigate/EyeIcon';

import styles from '../ButtonQuickView/ButtonQuickView.module.scss';

import type { ProductDataType as ButtonQuickViewProps} from '../../../../../types/productDataTypes';
import type { MouseEvent } from 'react';

const ButtonQuickView:React.FC<ButtonQuickViewProps> = (props) => {

    const {openProductModal} = useContext(ProductModalContext)

    const openQuickView =(id:string,e:MouseEvent)=>{
        console.log(`${id} opened quick view`)
        e.preventDefault()
        openProductModal(props)
    }

    return (
        <div className={styles.ButtonQuickView} 
             onClick={(e)=>openQuickView(props.id,e)}>
                        <div className={styles.ButtonQuickView}>
                        <Button className='ButtonTransparent' 
                                icon={<EyeIcon className={styles._buttonQuickViewIcon}/>}
                                type='button'/>
                </div>
        </div>
    )
}

export default ButtonQuickView;