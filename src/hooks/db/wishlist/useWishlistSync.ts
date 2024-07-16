import { useDataSync } from "../useDataSync"

import {setWishlistItems, selectWishlistItemsArray } from "../../../store/slices/wishlistSlice";

import { firebaseGetWishlistService } from "../../../services/db/wishlist/firebaseGetWishlistService";
import { firebaseUpdateWishlistService } from "../../../services/db/wishlist/firebaseUpdateWishlistService";

export const useWishlistSync = () => {
    useDataSync<string[]>({
        selectItems: selectWishlistItemsArray,
        setItems: setWishlistItems,
        getService: firebaseGetWishlistService,
        updateService:firebaseUpdateWishlistService
    })
}