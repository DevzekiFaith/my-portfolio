import React from "react";
import Image004 from "/github.svg";
import Image005 from "/linkedin.svg";
import ImageProfile01 from "/m-page2.jpg";
import Image002 from "/instagram.svg";
import Image001 from "/twitter-x.svg";
import Image007 from "/mobile3.png";
import DownloadImage from "/download.svg";
import Typewriter from "typewriter-effect";
import { useForm } from "react-hook-form";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { SiVercel } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { FaSass } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  reset();

  return (
    <div className="bg-black">
      {/* <h1>This is the About me Page</h1> */}
      <div>
        <div className="flex xl:flex-row flex-col justify-center items-center p-[2rem] xl:h-[40rem]">
          <div className="w-[100%]">
            <h1 className="text-6xl font-bold uppercase p-[2rem] text-center xl:ml-[-5rem]">
              about me
            </h1>
          </div>
          <div className="w-[100%] xl:p-[3rem]">
            <h2 className="xl:w-[500px] mb-[2rem] uppercase text-white font-bold">
              Front-end Engineer.
            </h2>
            <Typewriter
              options={{
                strings: [
                  "Hello",
                  "I am a Software Engineer front-end heavy looking for exciting opportunities. I have an Architectural background. I like to focus on accessibility when developing. Am passionate and curious about solving Tech Challenges. Currently, i'm exploring some Front-end tools like React.js and Next.js. When i am programming I enjoy playing Basketball and more to improve my skills and my brain strenght",
                ],
                autoStart: true,
                loop: true,
              }}
            />

            <div className="flex justify-start gap-[1rem] items-center w-full h-[3rem] mt-[3rem]">
              <div className="flex justify-center items-center gap-[1rem]">
                <a
                  href="Ezekiel's Resume.pdf"
                  download
                  className="bg-yellow-300 w-[14rem] rounded-full font-extrabold pl-[2rem] pt-[.7rem] h-[3rem] cursor-pointer"
                >
                  Download Resume
                </a>
                <span className=" ml-[-4rem]">
                  <img src={DownloadImage} alt="Download image" />
                </span>
              </div>
              <div className="flex justify-center items-center gap-1 mt-[1.2rem] w-[5rem] ml-[2rem]">
                <a href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/">
                  <FaLinkedin className="w-[1.8rem] h-[1.8rem]" />
                </a>
                <a href="https://github.com/DevzekiFaith">
                  <FaSquareGithub className="w-[1.8rem] h-[1.8rem]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[2rem] mb-[6rem]">
          <img
            className="w-[85%] h-[16rem] xl:h-screen"
            src={ImageProfile01}
            placeholder="Blur"
            alt="About Image"
          />
        </div>

        {/* MY CAPABILITIES LINE */}

        <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[2rem] mt-[3rem] p-4 mb-[3rem] xl:h-[40rem] xl:mr-4">
          <div className="w-[100%]">
            <h1 className="text-6xl font-extrabold uppercase xl:pl-[-8rem] text-center xl:mb-[11rem]">
              my capabilities
            </h1>
          </div>
          <div className="w-[100%] xl:w-[600px] mb-[4rem]">
            <Typewriter
              options={{
                strings: [
                  "Hello",
                  "  I am always looking to adding more skill-set to my learning stacks in different language model and frame works. This will enable my flexibility and productivity in the area of service delivery and problem solving",
                ],
                autoStart: true,
                loop: true,
              }}
            />

            <div className=" flex flex-wrap xl:w-[34rem] w-[22rem] xl:ml-0 ml-[3rem] gap-2 mt-[2rem] ">
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                Html
                <IoLogoHtml5 className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                Css
                <FaCss3 className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                Javascript
                <RiJavascriptFill className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                React.js
                <FaReact className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                Next.js
                <SiVercel className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                Tailwind
                <SiTailwindcss className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                Typescript
                <BiLogoTypescript className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                Figma
                <FaFigma className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                React Native
                <TbBrandReactNative className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white  flex justify-center items-center gap-2">
                Scss
                <FaSass className="text-gray-600 w-10" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-1">
                Git
                <FaGitAlt className="text-gray-600" />
              </div>
              <div className="border w-[8rem] text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-2">
                GitHub
                <FaGithub className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
        <hr className="xl:w-[80rem] w-full xl:ml-[3rem] xl:mt-[2rem]" />

        {/* MY EXPERIENCE LINE */}

        <div className="flex xl:flex-row flex-col justify-center items-center p-4 mt-[4rem] xl:h-[40rem]">
          <div className="w-[100%]">
            <h1 className="uppercase font-extrabold text-6xl text-center pl-[-8rem] xl:mb-[17rem]">
              my experience
            </h1>
          </div>
          <div className="w-[100%] p-[1rem]">
            <span className="flex justify-between mb-[1rem]">
              <h3 className="text-white font-bold text-lg">
                Freelance Developer
              </h3>
              <h3 className=" font-bold text-lg mr-[1rem]">
                Nov 2023 - Present
              </h3>
            </span>
            <p className="mb-[1rem]">
              As a Frontend Engineer over the past two years, I have tackled
              numerous industrial challenges, from optimizing complex user
              interfaces for high-traffic e-commerce platforms to enhancing
              accessibility for diverse user bases. My journey began with a
              pivotal role in redesigning a legacy system, where I successfully
              integrated modern frameworks like React.js and Next.js, resulting
              in a 40% increase in user engagement. I have consistently focused
              on performance optimization, reducing page load times by 30%
              through efficient code practices and leveraging tools like Webpack
              and Lighthouse. My passion for solving intricate problems has
              driven me to stay ahead of the curve, continuously learning and
              implementing the latest frontend technologies to deliver seamless
              and intuitive user experiences.
            </p>
            <span className="flex justify-between mb-[1rem]">
              <h3 className="text-white font-bold text-lg">
                Front-End Intern{" "}
              </h3>
              <h3 className="font-bold text-lg mr-[1rem]">
                Sep 2023 - Nov 2023
              </h3>
            </span>
            <p>
              During my internship at Tech Studio, I played a crucial role in
              developing a food app for the academy called Techeat. Working
              collaboratively in a dynamic team, I was responsible for
              implementing key features using React.js and Tailwind, while
              styling the application with Tailwind CSS and SCSS. Additionally,
              I contributed to the mobile version using React Native and
              integrated Firebase for authentication and MongoDB for data
              storage. This project not only honed my technical skills but also
              significantly impacted the students by providing them with a
              seamless and intuitive platform to manage their meals, enhancing
              their overall learning experience and engagement with the
              academy's offerings.
            </p>
          </div>
        </div>
      </div>

      <hr className="xl:w-[80rem] w-full xl:ml-[3rem] xl:mt-[2rem]" />

      {/* LET'S CONNECT LINE */}

      <div className=" mt-[2rem]">
        <div className="block xl:hidden ml-[2rem] mb-[2rem] mt-[3rem]">
          <img src={Image007} placeholder="blur" alt="pImage" />
        </div>
        <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[4rem] xl:mt-[4rem] xl:h-[35rem]">
          <div>
            <div className="xl:ml-[-5rem] ml-[2rem] mt-[0]">
              <h1 className="uppercase text-6xl font-bold mb-[2rem]">
                let's connect
              </h1>
              <p>
                say hello at{" "}
                <span className="underline cursor-pointer text-yellow-300">
                  zekipossible@gmail.com
                </span>
              </p>
              <a href="" target="_blank"></a>
              {/* <p>
                for more info, here is my{" "}
                <span className="underline">Resume</span>
              </p> */}
            </div>
            <div className="flex xl:ml-[-5rem] ml-[2rem] gap-[1rem] mt-[1rem] ">
              <img
                className="w-[1rem] h-[1rem]"
                src={Image004}
                alt="linkdin icon"
              />
              <img
                className="w-[1rem] h-[1rem]"
                src={Image005}
                alt="Github icon"
              />
              <img
                className="w-[1rem] h-[1rem]"
                src={Image001}
                alt="twitterImage"
              />
              <img
                className="w-[1rem] h-[1rem]"
                src={Image002}
                alt="Instagram"
              />
            </div>
            <div className="xl:ml-[-5rem] xl:mt-[15rem] mt-[4rem] text-slate-600 text-sm ml-[2rem]">
              {" "}
              <span>&copy; EZEKIEL OGHOJAFOR UBOR2023</span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-[1rem]">
              <label>Name:</label>
              <input
                className="xl:w-[30rem] bg-transparent text-white border-0 h-[2.5rem]"
                type="text"
                placeholder="enter username"
                {...register("Username", {
                  required: "Username is required",
                })}
              />
              <span className="text-red-800 text-sm">
                {errors.Username?.message}
              </span>
            </div>
            <div className="flex flex-col mb-[1rem]">
              <label>Email:</label>
              <input
                className="xl:w-[30rem] bg-transparent border-0 h-[2.5rem] mb-[1rem] text-white text-sm"
                type="text"
                placeholder="email"
                {...register("Email", {
                  required: "Email is required",
                  pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
                })}
              />
              <span className="text-red-800 text-sm">
                {errors.Email?.message}
                {errors.Email?.type === "pattern" &&
                  "Email should have the right pattern"}
              </span>
            </div>
            <div className="flex flex-col mb-[1rem]">
              <label>Password:</label>
              <input
                className="xl:w-[30rem] bg-transparent border-0 h-[2.5rem] text-white"
                type="Password"
                placeholder="password"
                {...register("Password", {
                  required: "Password is required",
                  minLength: 5,
                  maxLength: 10,
                })}
              />
              <span className="text-red-800 text-sm">
                {errors.Email?.message}
                {errors.Email?.type === "minLength" &&
                  "Password must not  be less than 4 character"}
                {errors.Email?.type === "maxLength" &&
                  "Password must be more than 10 character "}
              </span>
            </div>
            <span className="flex flex-col mb-[1rem]">
              <label>Message:</label>
              <textarea
                className="xl:w-[30rem] w-[20rem] h-[6rem] scroll-m-3 bg-transparent border-0 text-white"
                placeholder="Hello..."
              />
            </span>
            <button
              type="submit"
              className="bg-yellow-300 w-[10rem] h-[3rem] rounded-full text-md uppercase font-bold mt-[2rem] text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
