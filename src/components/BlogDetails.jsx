import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useNavigate} from 'react-router-dom'
import {likeblog,addcomment,updateblog,deleteblog} from '../features/blog/blogSlice'
import { likeblog as likebyuser } from '../features/auth/authSlice'
import { useState } from 'react'

const BlogDetails = () => {
  const {blogId} = useParams()
  const blog=useSelector(state=>state.blog.blogs.find(b=>b.id===blogId))
  const user=useSelector(state=>state.auth.user)
  const likes=useSelector(state=>state.auth.likes)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [comment,setComment]=useState('')
  const [edit,setEdit] =useState(false)
  const [editTitle,setEditTitle]=useState(blog.title||'')
  const [editContent,setEditContent]=useState(blog.content||'')

  if(!blog) return <div>Blogs not available</div>
  const handleChange=(e)=>{
    e.preventDefault()
    const editedpost={
      id:blog.id,
      data:{
        title:editTitle,
        content:editContent
      }
    }
    dispatch(updateblog(editedpost))
    setEdit(false)
  }
  const handleLike=()=>{
    if(!likes.includes(blogId)){
      dispatch(likeblog(blog.id))
      dispatch(likebyuser(blog.id))
    }
  }
  const handleDelete=()=>{
    dispatch(deleteblog(blog.id))
    navigate('/')
  }

  const handlecomment=(e)=>{
    e.preventDefault();
    if(comment.trim()){
      const newcomment={
        blogId,
        comment:{
          text:comment,
          user
        }
      }
      dispatch(addcomment(newcomment))
      setComment('')
    }
  }

  return (
    <div className=' container mx-auto p-3'>
      <div className=' flex justify-center items-center'>
      <img src={blog.photo} alt={blog.title} className=" w-2/6 h-auto object-center " />
      </div>
      {edit ? (
        <form action='' onSubmit={handleChange}>
        <input 
        type="text"
        className="w-full border rounded p-2 mt-4"
        value={editTitle}
        onChange={(e)=>setEditTitle(e.target.value)}
        />
        <textarea 
        className="w-full border rounded p-2 mt-4"
        value={editContent}
        onChange={(e)=>setEditContent(e.target.value)}
        />
        <div className="m-4 p-3 text-center">
        <button className="bg-purple-500 text-white px-4 py-2 rounded mt-4">Upadate Blog</button>
        </div>
        </form>
      ) : (
        <>
          <h1 className=" text-5xl font-bold mt-4 text-center">{blog.title}</h1>
          <pre className="mt-4 text-balance">{blog.content}</pre>
          <div className='float-right flex'>
          {user?.id===blog.userId &&(
            <div className='mt-4'>
              <button
              className='bg-green-500 text-white px-4 py-2 rounded m-4 '
              onClick={()=>setEdit(true)}
              >
                Edit
              </button>
              <button 
              className='bg-red-500 text-white px-4 py-2 rounded m-4'
              onClick={handleDelete}
              >Delete</button>
            </div>
          )}
          </div>
        </>
      )}
      {user ?(
      <button
      className={`bg-red-500 text-white px-4 py-2 rounded mt-4 ${likes.includes(blogId)?'opacity-50' : ''}`}
      onClick={handleLike}
      disabled={likes.includes(blogId)}
      >Like({blog.likes})
      </button>
      ):(
      <button
      className={`bg-red-500 text-white px-4 py-2 rounded mt-4 opacity-50`}
      >Like({blog.likes})
      </button>
      )
      }
      <div className=' mt-5'>
        <h2 className=' text-2xl font-bold'>Comments</h2>
        {blog.comments.map((comment,index)=>(
          <div key={index} className='border-t pt-2 mt-2 flex items-start'>
            <img src={comment.user.profilePicture} 
            alt={comment.user.username} 
            className='w-8 h-8 rounded-full mr-2'
            />
            <div>
              <div className=' font-bold'>{comment.user.username}</div>
              <div>{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
      {user&&(
        <div className='mt-5'>
          <form action="" onSubmit={handlecomment}>
            <input type="text" 
            name="comment"
            className='w-full border rounded p-2'
            placeholder='add comment'
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            />
            <button className="bg-purple-500 text-white px-4 py-2 rounded mt-2 hover:bg-purple-800" type="submit">Comment</button>
          </form>
        </div>
      )}
    </div>
    
  );
};

export default BlogDetails
