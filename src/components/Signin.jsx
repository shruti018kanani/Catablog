import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    dispatch(login({email}))
    navigate('/')
  }
  
  return (
    <div className=" m-5 p-5 container w-1/2 bg-purple-100 mx-auto rounded-xl shadow-lg  hover:shadow-violet-500 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Signin</h2>
      <form action="" onSubmit={handleLogin}>
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
        <div className="m-4 p-3">
          <label>Password:</label>
          <input
            type="password"
            className="w-full border rounded p-2"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="m-4 p-3 text-center">
        <button className="bg-purple-500 text-white px-4 py-2 rounded mt-4 hover:bg-purple-800">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Signin
