import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from "/image.png";
import LinkdlnImage from "/linkedin.svg";
import GitHubImage from "/github.svg";
import Arrow from "/arrow-up-right-circle-fill.svg";
import ImageProject001 from "/movie-app.jpg.png"
import Image001 from "/twitter-x.svg"
import Image002 from "/instagram.svg"
import Image003 from "/office image.jpg"
import Image004 from "/psychedelic-paper-shapes-with-copy-space.jpg"
import Image005 from "/public/netflix login clone.png"
import Image006 from "/public/add movie.png"

const Home = () => {
  return (
    <div>

      <div className='flex xl:flex-row flex-col justify-center items-start h-screen p-[4rem] gap-[4rem]'>
        <div className='w-[400px] mt-[8rem]'>
          <strong><h1 className='uppercase text-6xl w-[250px] mb-[1rem]'>hi, i am robert garcia</h1></strong>
          <p className='text-lg mb-[1rem] text-slate-600'>i build things for the web as a Nigerian base Software developer heavy on Front-end Engineering. Am passionate about building accessible user friendly website and Mobile Apps</p>
          <div className='flex  items-center gap-[1rem]'>

            <Link to="/contact">
              <button className='bg-yellow-300 p-[.4rem] w-[8rem] mr-[1rem] rounded-full uppercase  font-bold text-sm'>Contact me</button>
            </Link>

            <button className='w-[2.5rem] h-[2.5rem] shadow-2xl bg-slate-800  rounded-full'>
              <img className="w-[2rem] h-[2rem] rounded-full ml-[.32rem]" src={LinkdlnImage} alt='linkedin logo' />
            </button>
            <button className="w-[2.5rem] h-[2.5rem]  bg-slate-800  rounded-full" >
              <img className="w-[2rem] h-[2rem] rounded-full ml-[.32rem]" src={GitHubImage} alt='Github logo' />
            </button>
          </div>

        </div>

        <div className='w-[500px]'>
          <img className="" src={ProfileImage} placeholder="Blur" alt='profile picture' />
        </div>

        {/* // FEATURE PROJECT LINE */}

      </div>
      <hr className="bg-slate-800 w-[80rem] ml-[2rem]" />

      <div className='flex justify-center items-center gap-[3rem] p-[2rem] '>
        <div className='mt-[2rem]'>
          <h1 className='uppercase font-bold text-6xl'>feature projects</h1>
          <p className='w-[350px] text-slate-600'>Here are some of the selected projects that showcase my passion fro front-end Engineering</p>
          <div className='bg-slate-700 w-[36rem] h-[28rem] mt-[2rem] relative z-[100]'>
            <div className='flex justify-center items-center h-full shadow-2xl '>
              <img className='w-[55%]' src={ImageProject001} placeholder="Blur" alt='project image' />
            </div>
            {/* <div className='absolute top-[6rem]'>
              <img className='h-[22rem] w-[26rem]' src={Image006} placeholder="blur" alt='background Image' />
            </div> */}


          </div>
        </div>

        <div className='w-[40%]'>
          <h3 className='text-lg font-medium uppercase text-white mt-[13rem] mb-[1rem]'>
            Movie-App Landing page for our favorite show
          </h3>
          <p>Breathe life into a movie-app webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a space for movie addition feature to keep fans updated with the latest Adventure </p>

          <h2 className='uppercase font-semibold mt-[1rem] mb-[.5rem] text-white'>Project info</h2>
          <hr />
          <span className='flex justify-between mt-[2rem]'>
            <p className='text-white'>Year</p>
            <p>2023</p>
          </span>

          <span className='flex justify-between mt-[2rem]'>
            <p className='text-white'>Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer">
            <span className='flex cursor-pointer w-[10rem] gap-2'>
              <a href="https://tinyurl.com/yc7n9vb5" target="_blank"></a><h1 className='uppercase text-yellow-300 underline'>LIVE DEMO</h1>
              <img src={Arrow} alt="Arrow" />
            </span>
            {/* <h1 className='text-yellow-300 underline'>SEE ON GITHUB</h1> */}
            <a href="https://github.com/DevzekiFaith/movie-app.git" target="_blank"></a><h1 className='uppercase text-yellow-300 underline'> <span className='flex gap-2'>
              <img src={GitHubImage} alt='Github' />SEE ON GITHUB</span> </h1>
          </div>
        </div>
      </div>

      {/* PROJECT TWO */}


      <div className='flex  xl:flex-row flex-col justify-center items-center gap-[3rem] p-[2rem]'>
        <div className='mt-[2rem]'>
          <h1 className='uppercase font-bold text-6xl'>feature projects</h1>
          <p className='w-[350px] text-slate-600'>Here are some of the selected projects that showcase my passion fro front-end Engineering</p>
          <div className='bg-slate-700 w-[36rem] h-[28rem] mt-[2rem] relative'>
            <img className='h-[22rem]' src={Image004} placeholder="blur" alt='background Image' />
            <div className='flex justify-center items-center h-full shadow-2xl'>
              <img className='w-[100%] absolute top-[4rem] ' src={Image003} placeholder="Blur" alt='project image' />

            </div>
          </div>
        </div>

        <div className='w-[40%]'>
          <h3 className='text-lg font-medium uppercase text-white mt-[13rem] mb-[1rem]'>
            Real Estate Landing page for our favorite show
          </h3>
          <p>Breathe life into a movie-app webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a space for movie addition feature to keep fans updated with the latest Adventure </p>

          <h2 className='uppercase font-semibold mt-[1rem] mb-[.5rem] text-white'>Project info</h2>
          <hr />
          <span className='flex justify-between mt-[2rem]'>
            <p className='text-white'>Year</p>
            <p>2023</p>
          </span>

          <span className='flex justify-between mt-[2rem]'>
            <p className='text-white'>Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer ">
            <span className='flex cursor-pointer gap-2'>
              <a href="https://tinyurl.com/yc7n9vb5" target="_blank"></a><h1 className='uppercase text-yellow-300 underline'>LIVE DEMO</h1>
              <img src={Arrow} alt="Arrow" />
            </span>
            {/* <h1 className='text-yellow-300 underline'>SEE ON GITHUB</h1> */}
            <a href="https://github.com/DevzekiFaith/movie-app.git" target="_blank"></a><h1 className='uppercase text-yellow-300 underline'> <span className='flex gap-2'>
              <img src={GitHubImage} alt='Github' />SEE ON GITHUB</span> </h1>
          </div>
        </div>
      </div>


      {/* project 3 */}



      <div className='flex xl:flex-row flex-col justify-center items-center gap-[3rem] p-[2rem] mb-[3rem]'>
        <div className='mt-[2rem]'>
          <h1 className='uppercase font-bold text-6xl'>feature projects</h1>
          <p className='w-[350px] text-slate-600'>Here are some of the selected projects that showcase my passion fro front-end Engineering</p>
          <div className='bg-slate-700 w-[36rem] h-[28rem] mt-[2rem]'>
            <div className='flex justify-center items-center h-full shadow-2xl'>
              <img className='w-[100%]' src={Image005} placeholder="Blur" alt='project image' />

            </div>
          </div>
        </div>

        <div className='w-[40%]'>
          <h3 className='text-lg font-medium uppercase text-white mt-[13rem] mb-[1rem]'>
            Netflix Landing page for our favorite show
          </h3>
          <p>Breathe life into a movie-app webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a space for movie addition feature to keep fans updated with the latest Adventure </p>

          <h2 className='uppercase font-semibold mt-[1rem] mb-[.5rem] text-white'>Project info</h2>
          <hr />
          <span className='flex justify-between mt-[2rem]'>
            <p className='text-white'>Year</p>
            <p>2023</p>
          </span>

          <span className='flex justify-between mt-[2rem]'>
            <p className='text-white'>Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer">
            <span className='flex cursor-pointer'>
              <a href="https://tinyurl.com/yc7n9vb5" target="_blank"></a><h1 className='uppercase text-yellow-300 underline w-[6rem]'>LIVE DEMO</h1>
              <img src={Arrow} alt="Arrow" />
            </span>
            <a href="https://github.com/DevzekiFaith/movie-app.git" target="_blank"></a><h1 className='uppercase text-yellow-300 underline'> <span className='flex gap-2'>
              <img src={GitHubImage} alt='Github' />SEE ON GITHUB</span> </h1>
          </div>
        </div>
      </div>

      <hr className='w-[80rem] ml-[2rem] ' />


      {/* ABOUT ME LINE */}

      <div className='flex xl:flex-row flex-col justify-center items-center h-[25rem] '>
        <div className='w-[100%]'>
          <h1 className='text-6xl font-bold uppercase p-[2rem] text-center ml-[-5rem]'>about me</h1>
        </div>
        <div className='w-[100%] p-[3rem]'>
          <h2 className='w-[500px] mb-[2rem] uppercase text-white font-bold'>Am a Front-end Engineer based in Nigeria. I have An Architectural background </h2>
          <p>I am a front-end Engineer based in Nigeria looking for exciting opportunities. I have an Architectural background. I like to focus on accessibility when developing. Am passionate and curious about solving Tech Challenges. Currently, i'm exploring some Front-end tools like React.js and Next.js. While i am programming I enjoy playing Basketball and more to improve my skills. </p>

          <Link to="/About">
            <h1 className='uppercase underline text-yellow-300 mt-[1rem]'>MORE ABOUT ME</h1>
          </Link>
        </div>
      </div>

      <hr className='w-[80rem] ml-[2rem]' />

      {/* LET'S CONNECT LINE */}

      <div>
        <div className="flex xl:flex-row flex-col justify-center items-center gap-[4rem]">
          <div>
            <div className="ml-[-5rem] mt-[0]">

              <h1 className='uppercase text-6xl font-bold mb-[1.5rem]'>let's connect</h1>
              <p className=''>Say hello at <span className="underline cursor-pointer text-yellow-300 ml-1"> zekipossible@gmail.com</span></p>
              <a href="" target="_blank"></a>
              <p>for more info, here is my Resume</p>
            </div>
            <div className="flex ml-[-5rem] gap-[1rem] mt-[1rem] ">
              <img className="w-[1rem] h-[1rem]" src={LinkdlnImage} alt="linkdin icon" />
              <img className="w-[1rem] h-[1rem]" src={GitHubImage} alt="Github icon" />
              <img className="w-[1rem] h-[1rem]" src={Image001} alt="" />
              <img className="w-[1rem] h-[1rem]" src={Image002} alt="" />
            </div>
          </div>

          <div className="ml-[6rem] mt-[4rem]">
            <span className="flex flex-col mb-[1rem]">
              <label>Name:</label>
              <input className='w-[30rem] bg-slate-800 border-0 h-[2.5rem]' type='text' placeholder='' id="" />
            </span>
            <span className='flex flex-col mb-[1rem]'>
              <label>Email:</label>
              <input className="w-[30rem] bg-slate-800 border-0 h-[2.5rem] mb-[1rem] text-white" type='text' placeholder='' id="" />
            </span>
            <span className='flex flex-col mb-[1rem]'>
              <label>Subject:</label>
              <input className='w-[30rem] bg-slate-800 border-0 h-[2.5rem] text-white' type='text' placeholder='' id="" />
            </span>
            <span className="flex flex-col mb-[1rem]">
              <label>Message:</label>
              <textarea className="w-[30rem] h-[6rem] scroll-m-3 bg-slate-800 border-0 text-white" placeholder="Hello..." id="" />
            </span>
            <button className="bg-yellow-300 w-[10rem] h-[3rem] rounded-full text-md uppercase font-bold mt-[2rem] text-black">Submit</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home
