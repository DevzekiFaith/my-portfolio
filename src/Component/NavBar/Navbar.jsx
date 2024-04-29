import { useState } from 'react'
import {useLocation} from "react-router-dom"
import React from 'react'
import { NavLink } from 'react-router-dom'
import burgerImage from "/list (2).svg"
import CloseButton from "/x-circle.svg"

const Navbar = () => {



  const activeLink = "text-white bg-yellow-950 border=none p-[0.2rem] rounded-full w-[5rem] text-center font-bold "
  const normalLink = ""

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
            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/contact">Contact</NavLink>
          </div>

        </div>
      </div>

      {/* TENARY OPERATOR FOR TOGGLE CONDITIONING */}

      {!openModal ? (<div className='absolute top-6  right-3'>
        <img className='block xl:hidden w-[2rem] h-[2rem] cursor-pointer' src={burgerImage} alt='Burger icon' onClick={HandleClick} />
      </div>) : (<div className='absolute top-6 right-3 w-[13rem] h-[4rem] bg-[#0B0705] flex justify-between shadow-2xl'>
        <div className='flex flex-col xl:gap-[3rem]'>
          <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/contact">Contact</NavLink>
        </div>
        <div>
          <img className='block xl:hidden w-[2rem] h-[2rem] cursor-pointer' src={CloseButton} alt='Burger icon' onClick={HandleClick} />
        </div>
      </div>)}



    </div>
  )
}

export default Navbar
