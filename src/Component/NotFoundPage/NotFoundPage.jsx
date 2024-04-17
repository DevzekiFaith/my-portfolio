import React from 'react'
import SearchImage from "/SearchImage.jpg.svg"
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <p className='text-center'>Sorry, but the page you are looking for could not be found.</p>
      <div className='flex justify-center items-center'>
        <img className=' w-[45rem]' src={SearchImage} placeholder="blur" alt='' />
      </div>
      <div className='flex justify-center items-center'>
        <Link to={"/"}>
          <h1 className='font-bold uppercase text-blue-500 '>Go Back to Home Page</h1>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
