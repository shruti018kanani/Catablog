import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../features/auth/authSlice'

const Navbar = () => {
  const user=useSelector(state=>state.auth.user)
  const dispatch=  useDispatch();

  const handleLogout=()=>{
    dispatch(logout())
  }

  return (
    <nav className="bg-purple-800 p-4 text-white w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className='text-3xl font-bold'>Catablog</Link>
        <div>
          {user?(
            <>
            <Link to='/add-new' className='m-4'>Add Blog</Link>
            <button onClick={handleLogout} className='m-4'>Logout</button>
            <Link to='/profile' className='m-4 mt-4'><img src={user.profilePicture} alt="Profile" className="mt-2 w-10 h-10 rounded-full float-right" /></Link>
            </>
          ):(
          <>  
          <Link to='/signin' className='mr-4'>Signin</Link>
          <Link to="/signup">Sign Up</Link>
          </>)}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
