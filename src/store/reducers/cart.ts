import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Prato from '../../Models/Prato'

type CartState = {
  plates: Prato[]
  isOpen: boolean
}

const initialState: CartState = {
  plates: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const plate = state.plates.find((plate) => plate.id === action.payload.id)

      if (!plate) {
        state.plates.push(action.payload)
      } else {
        alert('This plate is already in the cart!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.plates = state.plates.filter((plate) => plate.id != action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
