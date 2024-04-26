import { useContext } from 'react';
import { ProductModalContext } from '../../../../../context/ProductModalContext';

import Button from '../../../../atoms/Button/Button';

import EyeIcon from '../../../../atoms/icon/navigate/EyeIcon';

import styles from '../ButtonQuickView/ButtonQuickView.module.scss';

interface ButtonQuickViewProps{
    id:string
}

const ButtonQuickView:React.FC<ButtonQuickViewProps> = ({id}) => {

    const {openProductModal, closeProductModal} = useContext(ProductModalContext)

    const openQuickView =(id:string)=>{
        console.log(`${id} opened quick view`)
        openProductModal()
    }

    return (
        <div className={styles.ButtonQuickView}>
                        <div className={styles.ButtonQuickView}>
                        <Button className='ButtonTransparent' 
                                icon={<EyeIcon className={styles._buttonQuickViewIcon}/>}
                                onClick={()=>openQuickView(id)} 
                                type='button'/>
                </div>
        </div>
    )
}

export default ButtonQuickView;