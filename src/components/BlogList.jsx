import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const BlogList = () => {
  const blogs=useSelector(state=>state.blog.blogs)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {blogs.map(blog=>(
      <div key={blog.id} className=' m-3 border p-4 rounded shadow bg-purple-300 text-center'>
        <img src={blog.photo} alt={blog.title}  className='w-full h-40 object-cover '/>
        <h2 className='text-xl font-bold mt-3 text-center'>{blog.title}</h2>
        <Link to={`/blog/${blog.id}`} className='bg-purple-500 text-white px-4 py-2 rounded mt-2 inline-block hover:bg-purple-800 text-center'>Let's Explore</Link>
      </div>
    ))

    }
    </div>
  )
}

export default BlogList
