import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productReducer from '../features/products/productSlice'
import detailReducer from '../features/detail/detailSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    detailProduct: detailReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
