import { createContext, useState } from 'react';

interface ProductModalProviderProps{
    children:React.ReactNode
}

interface ProductModalContextType{
    openProductModal:()=>void
    closeProductModal:() => void
    isShow:boolean
}

export const ProductModalContext = createContext<ProductModalContextType>({
    openProductModal:() => {},
    closeProductModal:() => {},
    isShow: false
});

export const ProductModalProvider:React.FC<ProductModalProviderProps> = ({ children }) => {

    const [isShow, setIsShow]=useState<boolean>(false)

    const openProductModal=()=>{
        console.log('openProductModal')
        setIsShow(true)
    }
    const closeProductModal = () =>{
        setIsShow(false)
    }

    return(
        <ProductModalContext.Provider value={{isShow, openProductModal, closeProductModal }}>
          {children}
        </ProductModalContext.Provider>
    )
}
