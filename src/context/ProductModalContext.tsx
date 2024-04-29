import { createContext, useState } from 'react';

import type { ProductDataType as ProductData} from '../types/productDataTypes';

interface ProductModalProviderProps{
    children:React.ReactNode
}

interface ProductModalContextType{
    openProductModal:(data:ProductData)=>void
    closeProductModal:() => void
    isShow:boolean
    dataProduct:ProductData|null
}

export const ProductModalContext = createContext<ProductModalContextType>({
    openProductModal:(data) => {},
    closeProductModal:() => {},
    isShow: false,
    dataProduct:null
});

export const ProductModalProvider:React.FC<ProductModalProviderProps> = ({ children }) => {

    const [isShow, setIsShow]=useState<boolean>(false)
    const [dataProduct, setDataProduct] =useState<ProductData|null>(null)

    const openProductModal=(data:ProductData)=>{
        console.log('openProductModal')
        setDataProduct(data)
        setIsShow(true)
    }
    const closeProductModal = () =>{
        setIsShow(false)
    }

    return(
        <ProductModalContext.Provider value={{isShow,dataProduct, openProductModal, closeProductModal }}>
          {children}
        </ProductModalContext.Provider>
    )
}
