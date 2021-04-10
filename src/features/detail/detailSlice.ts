import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'
import axios from 'axios'

const axiosGraphQL = axios.create({
  baseURL: 'https://b2cdemo.getswift.asia/graphql',
})

const GET_DETAIL = (sku: string) => `
{ 
    productDetail: products(
        pageSize: 5
        filter: {
            sku: { eq: "${sku}" }
        }
        ) {
        total_count
        items {
            sku
            name
            image {
            url
            label
            }
            small_image{
                url
                label
            }
            price_range {
                minimum_price {
                  regular_price {
                    value
                    currency
                  }
                }
              }
            media_gallery {
                url
                label
                ... on ProductVideo {
                    video_content {
                        media_type
                        video_provider
                        video_url
                        video_title
                        video_description
                        video_metadata
                    }
                }
            }
        }
    }
}`

interface DetailState {
  data: {
    name: string
    sku: string
    image: { url: string }
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

const initialState: DetailState = {
  data: [],
}

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    getDetail: (state, action: PayloadAction<[]>) => {
      state.data = action.payload
    },
  },
})

const { getDetail } = detailSlice.actions

export const fetchDetail = (sku: string): AppThunk => (dispatch) => {
  axiosGraphQL.post('', { query: GET_DETAIL(sku) }).then((result) => {
    dispatch(getDetail(result?.data?.data?.productDetail?.items))
  })
}

export const selectedDetail = (state: RootState) => state.detailProduct.data

export default detailSlice.reducer
