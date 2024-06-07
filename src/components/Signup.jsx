import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login} from '../features/auth/authSlice'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfilePicture=(e)=>{
    const file=e.target.files[0];
    const reader=new FileReader()
    reader.onload=()=>{
      setProfilePicture(reader.result)
    }
    if(file){
      reader.readAsDataURL(file)
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newUser={
      id:Date.now().toString(),
      username,
      email,
      password,
      profilePicture
    }
    dispatch(login(newUser))
    navigate('/')
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
          <label>Password:</label>
          <input
            type="password"
            className="w-full  border rounded p-2"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div >
      <div className='m-4 p-3'>
          <label>Profile Picture:</label>
          <input
            type="file"
            className="w-full  border rounded p-2"
            name="Profile Picture"
            onChange={handleProfilePicture}
          />
          {profilePicture && (
            <img src={profilePicture} alt="Profile" className="mt-4 w-32 h-32 rounded-full" />
          )}
        </div >
        <div className="m-4 p-3 text-center">
        <button className="bg-purple-500 text-white px-4 py-2 rounded mt-4 hover:bg-purple-800">Sign Up</button>
        </div>

      </form>
    </div>
  )
}

export default Signup
