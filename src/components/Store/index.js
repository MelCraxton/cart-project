import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart( state, action ){
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity += 1
            
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price
            }

        },

        removeItemFromCart( state, action ){
            const id = action.payload
            const existingItem = state.items.find(item => item.id == id)
            state.totalQuantity = state.totalQuantity - 1

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity = existingItem.quantity - 1
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})


const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartVisible: false },
    reducers: { 
        toggle(state) { state.cartVisible = !state.cartVisible }
    }
})


const store = configureStore({
    reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer }
})


export const cartActions = cartSlice.actions
export const uiActions = uiSlice.actions

export default store
