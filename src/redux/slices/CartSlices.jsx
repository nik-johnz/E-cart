import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],//wishlist may have more than one item
    reducers:{
        //actions
        //functions/logic to add items into wishlist array
        addToCart :(state, action)=>{
            state.push(action.payload)
        },
        //function to remove items from the wishlist
        removeFromCart :(state, action)=>{
            //filter returns a new array satisfying the condition. Inorder to add the new array into state we need to return it
            return state.filter(item=>item.id!=action.payload)
        },
        //function to remove all items from the cart
        emptyCart : (state)=>{
            return state = []
        }
    }
})

export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer