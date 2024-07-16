import { useDataSync } from '../useDataSync';

import { setCartItems,selectCartItemsArray } from '../../../store/slices/cartSlice';

import { firebaseUpdateCartService } from '../../../services/db/cart/firebaseUpdateCartService';
import { firebaseGetCartService } from '../../../services/db/cart/firebaseGetCartService';

export const useCartSync = () => {
    useDataSync<{ID:string, quantity:number}[]>({
        selectItems: selectCartItemsArray,
        setItems: setCartItems,
        getService: firebaseGetCartService,
        updateService: firebaseUpdateCartService
    })
}