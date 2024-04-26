import {  useContext, useEffect, useRef } from 'react';

import ProductModalHeader from '../../../molecules/modal/ProductModal/ProductModalHeader/ProductModalHeader';

import { manageModalDisplay } from '../../../../utils/manageModalDisplay';

import { ProductModalContext } from '../../../../context/ProductModalContext';

import styles from '../ProductModal/ProductModal.module.scss';

const ProductModal:React.FC = () => {

    const {isShow,dataProduct, closeProductModal} = useContext(ProductModalContext)

    const modalRef= useRef<HTMLDivElement>(null)

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
                <span>ProductModal</span>
               

                {dataProduct ? 
                    <div className={styles._container}>

                        <div className={styles._closeModal}>
                            <span onClick={()=>closeProductModal()}>✖</span>
                        </div>

                        <div className={styles._wrapper}>
                            <div className={styles._img}>
                                <img alt={dataProduct.name} 
                                    src={dataProduct.src}/>
                            </div>

                            <div>
                                <ProductModalHeader name={dataProduct.name}
                                                    currentCost={dataProduct.currentCost}
                                                    oldCost={dataProduct.oldCost}
                                                    sale={dataProduct.sale}
                                                    rating={dataProduct.rating}
                                                    />
                            </div>
                        </div>

                    </div>
                :
                    <span>LOADING...</span>
                }


        </section>
    )
}

export default ProductModal;