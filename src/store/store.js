import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import blogReducer from '../features/blog/blogSlice'
export const store=configureStore({
    reducer:{
        blog:blogReducer,
        auth:authReducer,
    }
});