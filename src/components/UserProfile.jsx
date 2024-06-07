import { useState } from "react"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {updateUser} from '../features/auth/authSlice'

const UserProfile = () => {
  const user=useSelector(state=>state.auth.user)
  const dispatch=useDispatch()
  const [username,setUsername]=useState(user.username||'')
  const [email,setEmail]=useState(user.email ||'')
  const [profilePicture,setProfilePicture]=useState(user.profilePicture||'')
  const handleProfilePictureChange=(e)=>{
    const file=e.target.files[0]
    const render=new FileReader();
    render.onloadend=()=>{
      setProfilePicture(render.result)
    }
    if(file){
      render.readAsDataURL(file)
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newUserData={
      username,
      email,
      profilePicture
    }
    dispatch(updateUser(newUserData))
    alert('profile is Upadated')
  }
  return (
    <div className=" m-5 p-5 container w-1/2 bg-purple-100 mx-auto rounded-xl shadow-lg  hover:shadow-violet-500 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
      <form action="" onSubmit={handleSubmit}>
      <div className='m-4 p-3'>
          <label>Username:</label>
          <input
            type="text"
            className="w-full  border rounded p-2"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div >
      <div className='m-4 p-3'>
          <label>Email:</label>
          <input
            type="email"
            className="w-full  border rounded p-2"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div >
      <div className='m-4 p-3'>
          <label>Profile Picture:</label>
          <input
            type="file"
            className="w-full  border rounded p-2"
            name="Profile Picture"
            onChange={handleProfilePictureChange}
          />
          {profilePicture && (
            <img src={profilePicture} alt="Profile" className="mt-4 w-32 h-32 rounded-full" />
          )}
        </div >
        <div className="m-4 p-3 text-center">
        <button className="bg-purple-500 text-white px-4 py-2 rounded mt-4 hover:bg-purple-800">Update Profile</button>
        </div>
      </form>
    </div>
  )
}

export default UserProfile
