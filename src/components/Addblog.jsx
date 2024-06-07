import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addblog} from '../features/blog/blogSlice'
const Addblog = () => {
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const [photo,setPhoto]=useState(null)
  const user=useSelector(state=>state.auth.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handlePhoto=(e)=>{
    setPhoto(e.target.files[0]);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const reader=new FileReader();
    reader.onloadend=()=>{
    const newblog={
      id:Date.now().toString(),
      title,
      content,
      photo:reader.result,
      userId:user.id,
      likes:0,
      comments:[]
    }
    dispatch(addblog(newblog))
    navigate('/')
  };
    if(photo){
      reader.readAsDataURL(photo)
    }
  };

  return (
    <div className=" m-5 p-5 container w-1/2 bg-purple-100 mx-auto rounded-xl shadow-lg  hover:shadow-violet-500 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Blog</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className='m-4 p-3'>
          <label>Title:</label>
          <input
            type="text"
            className="w-full  border rounded p-2"
            value={title}
            name="username"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div >
        <div className='m-4 p-3'>
          <label>Content:</label>
          <textarea
            className="w-full  border rounded p-2"
            value={content}
            name="content"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div >
        <div className='m-4 p-3'>
          <label>Photo:</label>
          <input
            type="file"
            className="w-full  border rounded p-2"
            name="photo"
            onChange={handlePhoto}
            required
          />
        </div >
        <div className="m-4 p-3 text-center">
        <button className="bg-purple-500 text-white px-4 py-2 rounded mt-4 hover:bg-purple-800">Add Blog</button>
        </div>
      </form>
    </div>
  )
}

export default Addblog
