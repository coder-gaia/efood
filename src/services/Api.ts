import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Plate from '../Components/Plates'

type Plate = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Plate[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: number
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/checkout'
  }),
  endpoints: (builder) => ({
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePurchaseMutation } = api
export default api
