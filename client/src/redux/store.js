import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
export const store = configureStore({
    name:"bakingStore",
    reducer:{
        auth:authReducer,
    }
})