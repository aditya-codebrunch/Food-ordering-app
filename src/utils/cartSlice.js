import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items.pop();
        },
        clearCart:(state,action) => {
            state.items = [];
        }
    }
});
console.log(cartSlice);
const cartSliceReducer = cartSlice.reducer;
export default cartSliceReducer;

export const {addItem, removeItem, clearCart} = cartSlice.actions;