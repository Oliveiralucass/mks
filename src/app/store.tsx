import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import cartSlice from './reducers/cartSlice'
import ProductSlice from './reducers/productSlice'

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

export default store