import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    blogs:[]
 }

 const blogSlice=createSlice({
    name:'blog',
    initialState,
    reducers:{
        addblog:(state,action)=>{
            state.blogs.push(action.payload)
        },
        updateblog:(state,action)=>{
            const {id,data}=action.payload;
            const index=state.blogs.findIndex(blog=>blog.id===id)
            if(index!==-1){
                state.blogs[index]={...state.blogs[index],...data}
            }
        },
        deleteblog:(state,action)=>{
            state.blogs=state.blogs.filter(blog=>blog.id !==action.payload)
        },
        likeblog:(state,action)=>{
            const blog=state.blogs.find(blog=>blog.id===action.payload)
            if(blog){
                blog.likes+=1
            }
        },
        addcomment:(state,action)=>{
            const {blogId,comment}=action.payload
            const blog=state.blogs.find(blog=>blog.id===blogId)
            if(blog){
                blog.comments.push(comment)
            }
        }
    }
 })

 export const{addblog,updateblog,deleteblog,likeblog,addcomment}=blogSlice.actions
 export default blogSlice.reducer;