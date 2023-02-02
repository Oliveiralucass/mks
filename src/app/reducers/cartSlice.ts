import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/interfaces";

interface ICartState {
    precoTotal: number
    items: IProduct[]
}

const initialState: ICartState = {
    precoTotal: 0,
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart : (state, action:PayloadAction<IProduct>) => {
            let isInCart = state.items.some((item) => item.id === action.payload.id);
            if (!isInCart) {                
              return {
                precoTotal: state.precoTotal + Number(action.payload.price),
                items: [...state.items, { ...action.payload, quantity: 1 }],
              };
            } else {
              state.items = state.items.map((product) => {
                if (product.id === action.payload.id) {
                product.quantity += 1;
                state.precoTotal += Number(action.payload.price);
                }
                return product;
            });
            }  
        },

        removeFromCart: (state, { payload }) => {
            let precoAcumulado = payload.price * payload.quantity;
            state.precoTotal -= precoAcumulado;
            state.items = state.items.filter((product) => product.id !== payload.id);
        },
      
        addQuantity: (state, { payload }) => {
            state.items = state.items.map((product) => {
                if (product.id === payload.id) {
                product.quantity += 1;
                state.precoTotal += payload.price;
                }
                return product;
            });
        },
      
        removeQuantity: (state, { payload }) => {
          state.items = state.items.map((product) => {
            if (product.quantity > 1) {
              if (product.id === payload.id) {
                  product.quantity -= 1;
                state.precoTotal -= payload.price;
              }
            }
            return product;
          });
        },
    }
});

export const {
    addToCart,
    removeFromCart,
    addQuantity,
    removeQuantity
  } = cartSlice.actions;

export default cartSlice.reducer;
