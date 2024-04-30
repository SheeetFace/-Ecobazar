import {  useContext, useEffect, useRef } from 'react';

import ProductModalHeader from '../../../molecules/modal/ProductModal/ProductModalHeader/ProductModalHeader';
import ProductModalDescription from '../../../molecules/modal/ProductModal/ProductModalDescription/ProductModalDescription';
import ProductModalButtons from '../../../molecules/modal/ProductModal/ProductModalButtons/ProductModalButtons';
import ProductModalFooter from '../../../molecules/modal/ProductModal/ProductModalFooter/ProductModalFooter';
import ProductModalSlider from '../../../molecules/modal/ProductModal/ProductModalSlider/ProductModalSlider';
import Divider from '../../../atoms/Divider/Divider';

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

                        <div className={styles._wrapper} ref={modalCloseRef}>

                            <ProductModalSlider src={dataProduct.src}/>

                            <div className={styles._img}>
                                <img alt={dataProduct.name} 
                                    src={dataProduct.src}/>
                            </div>

                            <div>
                                <div>
                                    <ProductModalHeader name={dataProduct.name}
                                                        currentCost={dataProduct.currentCost}
                                                        oldCost={dataProduct.oldCost}
                                                        sale={dataProduct.sale}
                                                        rating={dataProduct.rating}
                                                        stockStatus={dataProduct.stockStatus}
                                                        />
                                    
                                    <Divider type='horizontal' className={styles._divider}/>
                                </div>

                                <div>
                                    <ProductModalDescription description={dataProduct.description}/>

                                    <Divider type='horizontal' className={styles._divider}/>
                                </div>

                                <div>
                                    <ProductModalButtons id={dataProduct.id}/>

                                    <Divider type='horizontal' className={styles._divider}/>
                                </div>

                                <div>
                                    <ProductModalFooter category={dataProduct.category}
                                                        tag={dataProduct.tag}/>
                                </div>
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