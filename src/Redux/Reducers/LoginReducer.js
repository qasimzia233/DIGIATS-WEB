import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name: 'myActions',
  initialState:{
      obj:null
  },
  reducers: {
    isUserLoggedIn(state,action) {
      console.log(action.payload);
       state.obj=action.payload
    },
    isUserLogout(state,action) {
        console.log(state);
    //   state.value--
    },
    incrementByAmount(state, action) {
      state.count += action.payload
    },
  },
})
   
export const { isUserLoggedIn, isUserLogout, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer