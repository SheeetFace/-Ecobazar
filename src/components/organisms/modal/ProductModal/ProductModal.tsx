import {  useContext, useEffect, useRef } from 'react';

import ProductDetails from '../../ProductDetails/ProductDetails';

import { manageModalDisplay } from '../../../../utils/manageModalDisplay';

import useCloseModal from '../../../../hooks/useCloseModal';
import useScrollLock from '../../../../hooks/useScrollLock';

import { ProductModalContext } from '../../../../context/ProductModalContext';

import styles from '../ProductModal/ProductModal.module.scss';

const ProductModal:React.FC = () => {

    const {isShow,dataProduct, closeProductModal} = useContext(ProductModalContext)

    const modalRef= useRef<HTMLDivElement>(null)
    const modalCloseRef= useRef<HTMLDivElement>(null)

    const isFirstOpen = useRef<boolean>(false);

    useScrollLock(isShow, {current:null});

    useCloseModal({
        closeFn:closeProductModal,
        modalCloseRef
    })

    useEffect(()=>{
        if(modalRef.current){
            manageModalDisplay(isShow, isFirstOpen, modalRef, styles._showProductModal, styles._hideProductModal)
        }
    },[isShow])


    return (
        <section className={styles.ProductModal} ref={modalRef}>

                {dataProduct && isShow ? 
                    <div className={styles._container}>

                        <div className={styles._closeModal}>
                            <span onClick={()=>closeProductModal()}>✖</span>
                        </div>

                        <ProductDetails forwardRef={modalCloseRef}
                                        data={dataProduct}
                                        viewMode='modal'/>

                    </div>
                :
                    <span>LOADING...</span>
                }


        </section>
    )
}

export default ProductModal;