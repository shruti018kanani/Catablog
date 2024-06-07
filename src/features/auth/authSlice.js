import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    user:null,
    likes:[]
 };

 const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
            state.likes=[];
        },
        logout:(state)=>{
            state.user=null;
            state.likes=[];
        },
        updateUser:(state,action)=>{
            state.user={...state.user,...action.payload}
        },
        likeblog:(state,action)=>{
            state.likes.push(action.payload)
        }
    }
 });
 export const {login,logout,updateUser,likeblog}=authSlice.actions;
 export default authSlice.reducer;