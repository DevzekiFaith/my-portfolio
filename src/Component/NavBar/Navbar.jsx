import React from 'react'

const Navbar = () => {
  return (

    <div className='flex justify-between items-center py-[2rem] px-[2rem]'>
      <div>
        <h1 className='uppercase font-bold text-white'>robert garcia</h1>
      </div>
      <div className='flex gap-[2rem]'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        {/* <a href='/FeatureProject'>Feature Project</a> */}
      </div>
    </div>
  )
}

export default Navbar
