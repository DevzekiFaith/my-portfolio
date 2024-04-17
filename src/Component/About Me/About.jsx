import React from 'react'
import Image004 from "/github.svg"
import Image005 from "/linkedin.svg"
import ImageProfile01 from "/image (1).png"
import Image002 from "/instagram.svg"
import Image001 from "/twitter-x.svg"
import Image007 from "/image 25.png"
import DownloadImage from "/download.svg"

const About = () => {
  return (
    <div className='bg-black'>
      {/* <h1>This is the About me Page</h1> */}
      <div>
        <div className='flex xl:flex-row flex-col justify-center items-center p-[2rem] xl:h-[40rem]'>
          <div className='w-[100%]'>
            <h1 className='text-6xl font-bold uppercase p-[2rem] text-center xl:ml-[-5rem]'>about me</h1>
          </div>
          <div className='w-[100%] xl:p-[3rem]'>
            <h2 className='xl:w-[500px] mb-[2rem] uppercase text-white font-bold'>Am a Front-end Engineer based in Nigeria. I have An Architectural background </h2>
            <p>I am a front-end Engineer based in Nigeria looking for exciting opportunities. I have an Architectural background. I like to focus on accessibility when developing. Am passionate and curious about solving Tech Challenges. Currently, i'm exploring some Front-end tools like React.js and Next.js. While i am programming I enjoy playing Basketball and more to improve my skills. </p>
            <div className="flex gap-[1rem] items-center w-full">
              <div className='flex justify-center items-center'>
                <button className='bg-yellow-300 w-[14rem] h-[2.5rem] rounded-full mt-[2rem] font-extrabold'>Download Resume</button>
                <div className='mt-[1.8rem] ml-[-2rem]'>
                  <img src={DownloadImage} alt="Download image" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-1 mt-[2rem] w-[5rem]">
                <img className='w-[2rem] h-[2rem]' src={Image004} alt="" />
                <img className='w-[2rem] h-' src={Image005} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center mt-[2rem] mb-[6rem]'>
          <img className='w-[85%] h-[16rem] xl:h-screen' src={ImageProfile01} placeholder="Blur" alt='About Image' />
        </div>

        {/* MY CAPABILITIES LINE */}

        <div className='flex xl:flex-row flex-col justify-center items-center xl:gap-[4rem] mt-[3rem] p-4 mb-[3rem] xl:h-[40rem]'>
          <div className='w-[100%]'>
            <h1 className='text-6xl font-extrabold uppercase xl:ml-[-4rem] text-center xl:mb-[11rem]'>my capabilities</h1>
          </div>
          <div className='w-[100%]'>
            <p className='xl:w-[600px] mb-[4rem]'>I am always looking to adding more skill-set to my learning stacks in different language model and frame works. This will enable my flexibility and productivity in the area of service delivery and problem solving </p>
            <div className=' flex flex-wrap xl:w-[34rem] w-[22rem] xl:ml-0 ml-[3rem] gap-2 mt-[2rem] '>
              <div className='border w-[8rem] text-center rounded-full mb-4 p-2 text-white'>Html</div>
              <div className='border w-[8rem] text-center rounded-full mb-4 p-2 text-white'>Css</div>
              <div className='border w-[8rem] text-center rounded-full mb-4 p-2 text-white'>Javascript</div>
              <div className='border w-[8rem] text-center rounded-full mb-4 p-2 text-white'>React.js</div>
              <div className='border w-[8rem] text-center rounded-full mb-4 p-2 text-white'>Next.js</div>
              <div className='border w-[8rem] text-center rounded-full mb-4 p-2 text-white'>Tailwind</div>
              <div className='border w-[8rem] text-center rounded-full mb-4 p-2 text-white'>Typescript</div>
              <div className='border w-[8rem] text-center rounded-full mb-4 p-2 text-white'>Figma</div>
            </div>
          </div>
        </div>
        <hr className='xl:w-[80rem] w-full xl:ml-[3rem] xl:mt-[2rem]' />

        {/* MY EXPERIENCE LINE */}

        <div className='flex xl:flex-row flex-col justify-center items-center p-4 mt-[4rem] xl:h-[40rem]'>
          <div className='w-[100%]'>
            <h1 className='uppercase font-extrabold text-6xl text-center ml-[-8rem] xl:mb-[17rem]'>my experience</h1>
          </div>
          <div className='w-[100%] p-[1rem]'>
            <span className='flex justify-between mb-[1rem]'>
              <h3 className='text-white font-bold text-lg'>Freelance Developer</h3>
              <h3 className=' font-bold text-lg mr-[1rem]'>Nov 2023 - Present</h3>
            </span>
            <p className='mb-[1rem]'>lorem Dolor laboris consequat adipisicing laborum amet deserunt Lorem ullamco.Aliqua quis labore ullamco ullamco. Sunt incididunt aute veniam do ex velit ullamco qui commodo. Officia aliquip ad anim eiusmod do consectetur proident pariatur enim. Id laboris ea incididunt culpa ex dolor.</p>
            <span className='flex justify-between mb-[1rem]'>
              <h3 className='text-white font-bold text-lg'>Front-End Intern </h3>
              <h3 className='font-bold text-lg mr-[1rem]'>Sep 2023 - Nov 2023</h3>
            </span>
            <p>lorem Dolor laboris consequat adipisicing laborum amet deserunt Lorem ullamco.Aliqua quis labore ullamco ullamco. Sunt incididunt aute veniam do ex velit ullamco qui commodo. Officia aliquip ad anim eiusmod do consectetur proident pariatur enim. Id laboris ea incididunt culpa ex dolor.</p>
          </div>
        </div>
      </div>

      <hr className='xl:w-[80rem] w-full xl:ml-[3rem] xl:mt-[2rem]' />

      {/* LET'S CONNECT LINE */}

      <div className=' mt-[2rem]'>
        <div className='block xl:hidden ml-[2rem] mb-[2rem] mt-[3rem]'>
          <img src={Image007} placeholder="blur" alt='pImage' />
        </div>
        <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[4rem] xl:mt-[4rem] xl:h-[35rem]">
          <div>
            <div className="xl:ml-[-5rem] ml-[2rem] mt-[0]">

              <h1 className='uppercase text-6xl font-bold mb-[2rem]'>let's connect</h1>
              <p>say hello at <span className="underline cursor-pointer text-yellow-300">zekipossible@gmail.com</span></p>
              <a href="" target="_blank"></a>
              <p>for more info, here is my <span className='underline'>Resume</span></p>
            </div>
            <div className="flex xl:ml-[-5rem] ml-[2rem] gap-[1rem] mt-[1rem] ">
              <img className="w-[1rem] h-[1rem]" src={Image004} alt="linkdin icon" />
              <img className="w-[1rem] h-[1rem]" src={Image005} alt="Github icon" />
              <img className="w-[1rem] h-[1rem]" src={Image001} alt="twitterImage" />
              <img className="w-[1rem] h-[1rem]" src={Image002} alt="Instagram" />
            </div>
            <div className='xl:ml-[-5rem] xl:mt-[15rem] mt-[4rem] text-slate-600 text-sm ml-[2rem]'> <span>&copy; ROBERT GARCIA2023</span></div>
          </div>

          <div className="xl:ml-[6rem] xl:mt-[4rem] ml-[1rem]">
            <span className="flex flex-col mb-[1rem]">
              <label>Name:</label>
              <input className='xl:w-[30rem] w-[22rem] bg-slate-800 border-0 h-[2.5rem]' type='text' placeholder='' id="" />
            </span>
            <span className='flex flex-col mb-[1rem]'>
              <label>Email:</label>
              <input className="xl:w-[30rem] w-[22rem] bg-slate-800 border-0 h-[2.5rem] mb-[1rem]" type='text' placeholder='' id="" />
            </span>
            <span className='flex flex-col mb-[1rem]'>
              <label>Subject:</label>
              <input className='xl:w-[30rem] w-[22rem] bg-slate-800 border-0 h-[2.5rem]' type='text' placeholder='' id="" />
            </span>
            <span className="flex flex-col mb-[1rem]">
              <label>Message:</label>
              <textarea className="xl:w-[30rem] w-[22rem] h-[6rem] scroll-m-3 bg-slate-800 border-0 " placeholder="Hello..." id="" />
            </span>
            <button className="bg-yellow-300 w-[10rem] h-[3rem] rounded-full text-md uppercase font-bold mt-[2rem]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
