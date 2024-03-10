import { configureStore } from "@reduxjs/toolkit"
import WishlistSlices from "./slices/WishlistSlices"
import cartSlice from "./slices/CartSlices"


const store = configureStore({
    reducer:{
        wishlistReducer:WishlistSlices,
        cartReducer:cartSlice
    }
})

export default store