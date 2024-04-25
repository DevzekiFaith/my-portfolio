import React from 'react'
import LinkdlnImage from "/linkedin.svg";
import GitHubImage from "/github.svg";
import Arrow from "/arrow-up-right-circle-fill.svg";
import ImageProject001 from "/movie-app.jpg.png"
import Image001 from "/twitter-x.svg"
import Image002 from "/instagram.svg"
import { useForm } from 'react-hook-form';


const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-[1rem]">
                <label>Name:</label>
                <input className='xl:w-[30rem] bg-slate-800 text-white border-0 h-[2.5rem]' type='text' placeholder='Enter UserName'
                  {...register("Username",
                    { required: "Username is required" })}
                />
                <span className="text-red-800 text-sm">
                  {errors.Username?.message}
                </span>
              </div>
              <div className='flex flex-col mb-[1rem]'>
                <label>Email:</label>
                <input className="xl:w-[30rem] bg-slate-800 border-0 h-[2.5rem] mb-[1rem] text-white text-sm" type='text' placeholder='Email'
                  {...register("Email",
                    { required: "Email is required", pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" })}
                />
                <span className="text-red-800 text-sm">
                  {errors.Email?.message}
                  {errors.Email?.type === "pattern" && "Email should have the right pattern"}
                </span>
              </div>
              <div className='flex flex-col mb-[1rem]'>
                <label>Password:</label>
                <input className='xl:w-[30rem] bg-slate-800 border-0 h-[2.5rem] text-white' type='Password' placeholder='password'
                  {...register("Password",
                    { required: "Password is required", minLength: 5, maxLength: 10 })}
                />
                <span className="text-red-800 text-sm">
                  {errors.Email?.message}
                  {errors.Email?.type === "minLength" && "Password must not  be less than 4 character"}
                  {errors.Email?.type === "maxLength" && "Password must be more than 10 character "}
                </span>
              </div>
              <span className="flex flex-col mb-[1rem]">
                <label>Message:</label>
                <textarea className="xl:w-[30rem] w-[20rem] h-[6rem] scroll-m-3 bg-slate-800 border-0 text-white" placeholder="Hello..." />
              </span>
              <button type='submit' className="bg-yellow-300 w-[10rem] h-[3rem] rounded-full text-md uppercase font-bold mt-[2rem] text-black">Submit</button>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contact
