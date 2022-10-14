import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'feedback',
  initialState: {
    name: '',
    email: '',
    message: '',
    id: null
  },
  reducers: {
    setName: (state, {payload}) => {
      state.name = payload
    },
    setEmail: (state, {payload}) => {
      state.email = payload
    },
    setMessage: (state, {payload}) => {
      state.message = payload
    },
    setId: (state, {payload}) => {
      state.id = payload
    }
  }
})

export const {
  setName, 
  setEmail,
  setId, 
  setMessage} = todoSlice.actions;

export default todoSlice.reducer;