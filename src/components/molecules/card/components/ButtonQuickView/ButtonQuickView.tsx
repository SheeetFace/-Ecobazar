import { useAppDispatch } from '../../../../../store/store';

import { openProductModal } from '../../../../../store/slices/productModalSlice';

import Button from '../../../../atoms/Button/Button';
import EyeIcon from '../../../../atoms/icon/navigate/EyeIcon';

import styles from '../ButtonQuickView/ButtonQuickView.module.scss';

import type { ProductDataType as ButtonQuickViewProps} from '../../../../../types/productDataTypes';
import type { MouseEvent } from 'react';

const ButtonQuickView:React.FC<ButtonQuickViewProps> = (props) => {

    const dispatch = useAppDispatch();

    const openQuickView =(id:string,e:MouseEvent)=>{
        e.preventDefault()
        dispatch(openProductModal(props))
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