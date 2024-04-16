import { useState } from 'react'
import React from 'react'
import burgerImage from "/list (2).svg"
import CloseButton from "/x-circle.svg"

const Navbar = () => {

  // TOGGLE STATE OF THE MODAL
  const [openModal, setOpenModal] = useState(false);
  // const [toggle, setToggle] = useState(false);


  // FUNCTION OF THE TOGGLE STATE

  const HandleClick = () => {
    setOpenModal(!openModal);
  }

  // const Toggle = () => {
  //   setToggle(!toggle);
  // }



  return (
    <div>

      <div className='relative'>
      <div className='flex justify-between items-center py-[2rem] px-[2rem]'>
        <div>
          <h1 className='uppercase font-bold text-slate-600'>robert garcia</h1>
        </div>
        <div className='xl:flex xl:gap-[2rem] hidden'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
        </div>
        
      </div>
      </div>
      
        {/* TENARY OPERATOR FOR TOGGLE CONDITIONING */}

      {!openModal ? (<div className='absolute top-6  right-3'>
          <img className='block xl:hidden w-[2rem] h-[2rem] cursor-pointer' src={burgerImage} alt='Burger icon' onClick={HandleClick} />
        </div>) : (<div className='absolute top-6 right-3 w-[13rem] h-[4rem] bg-[#0B0705] flex justify-between shadow-2xl'>
        <div className='flex flex-col xl:gap-[3rem]'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
        </div>
        <div>
          <img className='block xl:hidden w-[2rem] h-[2rem] cursor-pointer' src={CloseButton} alt='Burger icon' onClick={HandleClick} />
        </div>
      </div>)}



    </div>
  )
}

export default Navbar
