import {  useContext, useEffect, useRef } from 'react';

import ProductDetails from '../../ProductDetails/ProductDetails';

import { manageModalDisplay } from '../../../../utils/manageModalDisplay';

import useCloseModal from '../../../../hooks/useCloseModal';

import { ProductModalContext } from '../../../../context/ProductModalContext';

import styles from '../ProductModal/ProductModal.module.scss';

const ProductModal:React.FC = () => {

    const {isShow,dataProduct, closeProductModal} = useContext(ProductModalContext)

    const modalRef= useRef<HTMLDivElement>(null)
    const modalCloseRef= useRef<HTMLDivElement>(null)

    useCloseModal({
        closeFn:closeProductModal,
        modalCloseRef
    })

    const isFirstOpen = useRef<boolean>(false);

    useEffect(()=>{
        if(modalRef.current){
            document.documentElement.style.overflow = isShow ? 'hidden' : 'auto';
            manageModalDisplay(isShow, isFirstOpen, modalRef, styles._showProductModal, styles._hideProductModal)
        }

        return()=>{ document.documentElement.style.overflow = 'auto' }

    },[isShow])


    return (
        <section className={styles.ProductModal} ref={modalRef}>

                {dataProduct && isShow ? 
                    <div className={styles._container}>

                        <div className={styles._closeModal}>
                            <span onClick={()=>closeProductModal()}>✖</span>
                        </div>

                        <ProductDetails forwardRef={modalCloseRef}
                                        data={dataProduct}/>

                    </div>
                :
                    <span>LOADING...</span>
                }


        </section>
    )
}

export default ProductModal;