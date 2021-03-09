import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Reducers/LoginReducer'


export default configureStore({ 
    reducer:{
        user:loginReducer
    }
 })

