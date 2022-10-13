import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'feedback',
  initialState: {
    name: '',
    email: '',
    message: ''
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
    }
  }
})

export const {setName, setEmail, setMessage} = todoSlice.actions;

export default todoSlice.reducer;