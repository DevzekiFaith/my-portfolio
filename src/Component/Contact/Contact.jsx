import React from 'react'
import LinkdlnImage from "/linkedin.svg";
import GitHubImage from "/github.svg";
import Arrow from "/arrow-up-right-circle-fill.svg";
import ImageProject001 from "/movie-app.jpg.png"
import Image001 from "/twitter-x.svg"
import Image002 from "/instagram.svg"


const Contact = () => {
  return (
    <div className='bg-black'>
      <div className='mb-[2rem]'>
        <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[4rem]">
          <div>
            <div className="xl:ml-[-5rem] ml-[2rem] mt-[3rem]">

              <h1 className='uppercase text-6xl font-bold mb-[1.5rem]'>let's connect</h1>
              <p className=''>Say hello at <span className="underline cursor-pointer text-yellow-300 ml-1"> zekipossible@gmail.com</span></p>
              <a href="" target="_blank"></a>
              <p>for more info, here is my Resume</p>
            </div>
            <div className="flex xl:ml-[-5rem] ml-[2rem] gap-[1rem] mt-[1rem] ">
              <img className="w-[1rem] h-[1rem]" src={LinkdlnImage} alt="linkdin icon" />
              <img className="w-[1rem] h-[1rem]" src={GitHubImage} alt="Github icon" />
              <img className="w-[1rem] h-[1rem]" src={Image001} alt="" />
              <img className="w-[1rem] h-[1rem]" src={Image002} alt="" />
            </div>
          </div>

          <div className="xl:ml-[6rem] mt-[4rem]">
            <form>
              <span className="flex flex-col mb-[1rem]">
                <label>Name:</label>
                <input className='w-[20rem] xl:w-[34rem] bg-slate-800 border-0 h-[2.5rem]' type='text' placeholder='' id="" required/>
              </span>
              <span className='flex flex-col mb-[1rem]'>
                <label>Email:</label>
                <input className="w-[20rem] xl:w-[34rem] bg-slate-800 border-0 h-[2.5rem] mb-[1rem] text-white" type='text' placeholder='' id="" required />
              </span>
              <span className='flex flex-col mb-[1rem]'>
                <label>Subject:</label>
                <input className='w-[20rem] xl:w-[34rem] bg-slate-800 border-0 h-[2.5rem] text-white' type='text' placeholder='' id="" required />
              </span>
              <span className="flex flex-col mb-[1rem]">
                <label>Message:</label>
                <textarea className="w-[20rem] xl:w-[34rem] h-[6rem] scroll-m-3 bg-slate-800 border-0 text-white" placeholder="Hello..." id="" required />
              </span>
              <button className="bg-yellow-300 w-[10rem] h-[3rem] rounded-full text-md uppercase font-bold mt-[2rem] text-black">Submit</button>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contact
