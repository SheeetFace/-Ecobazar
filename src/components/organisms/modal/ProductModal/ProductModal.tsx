import { useEffect, useRef } from 'react';

import ProductDetails from '../../ProductDetails/ProductDetails';

import { manageModalDisplay } from '../../../../utils/manageModalDisplay';

import useCloseModal from '../../../../hooks/useCloseModal';
import useScrollLock from '../../../../hooks/useScrollLock';

import { useAppDispatch,useAppSelector } from '../../../../store/store';
import { closeProductModal } from '../../../../store/slices/productModalSlice';

import styles from '../ProductModal/ProductModal.module.scss';

const ProductModal:React.FC = () => {

    const dispatch = useAppDispatch()

    const isShow = useAppSelector((state)=> state.productModal.isShow);
    const dataProduct = useAppSelector((state)=> state.productModal.dataProduct);


    const modalRef= useRef<HTMLDivElement>(null)
    const modalCloseRef= useRef<HTMLDivElement>(null)

    const isFirstOpen = useRef<boolean>(false);

    useScrollLock(isShow, {current:null});

    const closeProductModalFn =()=>{
        dispatch(closeProductModal())
    }

    useCloseModal({
        closeFn:closeProductModalFn,
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
                        <span onClick={()=>closeProductModalFn}>✖</span>
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