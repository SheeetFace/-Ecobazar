import {  useContext, useEffect, useRef } from 'react';
import { ProductModalContext } from '../../../../context/ProductModalContext';

import styles from '../ProductModal/ProductModal.module.scss';

const ProductModal:React.FC = () => {

    const {isShow, closeProductModal} = useContext(ProductModalContext)

    const modalRef= useRef<HTMLDivElement>(null)

    const isFirstOpen = useRef<boolean>(false);

    useEffect(()=>{
        if(modalRef.current){
            document.documentElement.style.overflow = isShow ? 'hidden' : 'auto';

            if(isShow){
                isFirstOpen.current = true;
                modalRef.current.style.display='block'
                modalRef.current.classList.remove(styles._hideProductModal);
                modalRef.current.classList.add(styles._showProductModal);
            }else{
                if(isFirstOpen.current){
                    modalRef.current.classList.remove(styles._showProductModal);
                    modalRef.current.classList.add(styles._hideProductModal);
                }else{
                    modalRef.current.style.display='none'
                }
            }
        }

        return()=>{ document.documentElement.style.overflow = 'auto' }

    },[isShow])


    return (
        <section className={styles.ProductModal} ref={modalRef}>
                <span>ProductModal</span>
                <button onClick={()=>closeProductModal()}>CLOSE</button>
        </section>
    )
}

export default ProductModal;