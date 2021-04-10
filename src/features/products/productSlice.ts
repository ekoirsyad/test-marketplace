import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'
import axios from 'axios'

const axiosGraphQL = axios.create({
  baseURL: 'https://b2cdemo.getswift.asia/graphql',
})

const GET_PRODUCTS = `
{
  products(
    search: ""
    pageSize: 25
    sort: { price: DESC }
  ) {
    items {
      name
      sku
      small_image{
          url
      }
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    total_count
    page_info {
      page_size
    }
  }
}`

interface ProductState {
  data: {
    id: number
    name: string
    sku: string
    small_image: { url: string }
    price_range: {
      minimum_price: {
        regular_price: {
          value: string
          currency: string
        }
      }
    }
  }[]
}

const initialState: ProductState = {
  data: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<[]>) => {
      state.data = action.payload
    },
  },
})

export const { getProducts } = productSlice.actions

export const fetchProducts = (): AppThunk => (dispatch) => {
  axiosGraphQL.post('', { query: GET_PRODUCTS }).then((result) => {
    dispatch(getProducts(result?.data?.data?.products?.items))
  })
}

export const selectProduct = (state: RootState) => state.products.data

export default productSlice.reducer
