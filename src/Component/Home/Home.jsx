import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "/p.image.jpg";
import LinkdlnImage from "/linkedin.svg";
import GitHubImage from "/github.svg";
import Arrow from "/arrow-up-right-circle-fill.svg";
import ImageProject001 from "/movie-app.jpg.png";
import Image001 from "/twitter-x.svg";
import Image002 from "/instagram.svg";
import Image003 from "/HeroPage.png";
import Image004 from "/food Category.png";
import Image005 from "/Techeat food app.png";
import Image006 from "/add movie.png";
import Image008 from "/signupPage.png";
import { useForm } from "react-hook-form";
import Typewriter from "typewriter-effect";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };
  return (
    <div className="bg-black">
      <div className="flex xl:flex-row flex-col justify-center items-start  p-[4rem] gap-[4rem] md:flex md:justify-center md:items-center  md:w-[450]">
        <div className="w-[400px] xl:mt-[8rem]">
          <Typewriter
            className="font-bold text-[3rem]"
            options={{
              strings: [
                `Hi, i am Ezekiel Oghojafor Ubor`,
                `I am a Front-end Engineer with a background in Architecture, dedicated to creating accessible and user-friendly applications. Passionate about solving technical challenges, I am currently exploring other Languages such as Python. In addition to my professional pursuits, I enjoy playing basketball and continuously seek to improve my skills.`,
              ],
              autoStart: true,
              loop: true,
            }}
          />

          <div className="flex items-center gap-[1rem] mt-[2rem]">
            <Link to="/contact">
              <button className="bg-yellow-300 p-[.4rem] w-[8rem] mr-[1rem] rounded-full uppercase  font-bold text-sm">
                Contact me
              </button>
            </Link>

            <div className="flex justify-center items-center gap-1  w-[5rem]">
              <a href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/">
                <FaLinkedin className="w-[2rem] h-[2rem] cursor-pointer" />
              </a>
              <a href="https://github.com/DevzekiFaith">
                <FaSquareGithub className="w-[2rem] h-[2rem] cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-2xl">
          <div className="xl:w-[500px] w-[300px] xl:ml-[5rem]">
            <img
              className="w-[100%] rounded-2xl"
              src={ProfileImage}
              placeholder="Blur"
              alt="profile picture"
            />
          </div>
        </div>

        {/* // FEATURE PROJECT LINE */}
      </div>
      <hr className="bg-slate-800 xl:w-[80rem] w-full  xl:ml-[2rem]" />
      <div className="ml-[9.5rem] mt-[2rem]">
        <h1 className="text-[2rem]">FEATURED PROJECTS</h1>
      </div>
      <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[3rem] xl:p-[2rem] p-0 ">
        <div className="xl:mt-[2rem] mt-0">
          {/* <h1 className='uppercase font-bold text-6xl w-[400px] ml-[14rem] xl:ml-0 xl:w-[600px]'>feature projects</h1> */}
          {/* <p className='w-[350px] text-slate-600 ml-[14rem] xl:ml-0'>Here are some of the selected projects that showcase my passion fro front-end Engineering</p> */}
          <div className="xl:w-[36rem] w-[22rem] h-[28rem] mt-[2rem] active:scale-0 cursor-pointer hover:-translate-y-6  ">
            <div className="flex justify-center items-center xl:h-full shadow-2xl ">
              <img
                className="xl:w-[55%] w-[90%] xl:ml-0"
                src={ImageProject001}
                placeholder="Blur"
                alt="project image"
              />
            </div>
          </div>
        </div>

        <div className="xl:w-[40%] w-[80%]">
          <h3 className="text-lg font-medium uppercase text-white xl:mt-[5rem] mb-[1rem] w-[300px] xl:w-600px mt-[2rem]">
            Movie-App Landing page for our favorite show
          </h3>
          <p>
            Responsive web and mobile App.Breathe life into a movie-app webpage
            for our beloved show, Adventure Time. Delivered a fully responsive
            design with dynamic content capabilities, seamlessly integrating a
            space for movie addition feature to keep fans updated with the
            latest Adventure. So now, you can go to the Add movie, add your
            link, Image and rating and it will display on the All Movie Page.{" "}
          </p>
          <p className="text-green-500 mt-2 mb-2">
            <span className="text-white font-sans border border-slate-600 p-2 rounded-xl">
              Technology stack:
            </span>{" "}
            React, Tailwind Css
          </p>
          <h2>
            <span className="text-white font-sana">Challenges: </span> In this
            project i did not use React Router, i did the foundational Routing
            by passing Props and that was a huge challenge at First
          </h2>
          <h3>
            <span className="text-white font-sans ">Solution: </span> After
            regular error prompts, i had to make research on the error and got
            different solutions for one challenge and that was how i learnt that
            exercise without Routing{" "}
          </h3>
          <h2 className="uppercase font-semibold mt-[1rem] mb-[.5rem] text-white">
            Project info
          </h2>
          <hr />
          <span className="flex justify-between mt-[2rem]">
            <p className="text-white">Year</p>
            <p>2023</p>
          </span>

          <span className="flex justify-between mt-[2rem]">
            <p className="text-white">Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer">
            <span className="flex cursor-pointer gap-2">
              <a href="https://movie-app-two-liart.vercel.app/" target="_blank">
                <h1 className="uppercase text-yellow-300 underline">
                  {" "}
                  <span className="flex gap-2">
                    <img src={Arrow} alt="Arrow" />
                    LIVE DEMO
                  </span>{" "}
                </h1>
              </a>
            </span>
            {/* <h1 className='text-yellow-300 underline'>SEE ON GITHUB</h1> */}
            <a
              href="https://github.com/DevzekiFaith/movie-app.git"
              target="_blank"
            >
              <h1 className="uppercase text-yellow-300 underline">
                {" "}
                <span className="flex gap-2">
                  <img src={GitHubImage} alt="Github" />
                  SEE ON GITHUB
                </span>{" "}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT TWO */}

      <div className="flex  xl:flex-row flex-col justify-center items-center xl:gap-[3rem] xl:p-[2rem] mt-[2rem]">
        <div className="xl:mt-[2rem]">
          <div className="xl:w-[36rem] w-[85%] xl:ml-0  ml-[2rem] h-[28rem] mt-[2rem] relative active:scale-0 cursor-pointer hover:-translate-y-6 ">
            <img
              className="h-[22rem]"
              src={Image004}
              placeholder="blur"
              alt="background Image"
            />
            <div className="flex justify-center items-center shadow-2xl">
              <img
                className="xl:w-[85%] h-[22rem] absolute top-[10rem] "
                src={Image003}
                placeholder="Blur"
                alt="project image"
              />
            </div>
          </div>
        </div>

        <div className="xl:w-[40%] w-[80%] mt-[2rem]">
          <h3 className="text-lg font-medium uppercase text-white xl:mt-[5rem] mb-[1rem]">
            Recipe Food App For Restaurants
          </h3>
          <p>
            Responsive Web and Mobile Savour-App is a versatile recipe app
            designed for both home cooks and restaurant chefs, offering a
            comprehensive platform to discover, create, and manage recipes.
            Built with Next.js for a seamless user experience, the app features
            an intuitive interface that allows users to easily browse through a
            vast collection of recipes, save their favorites, and generate
            shopping lists. Advanced search and filtering options enable users
            to find recipes based on ingredients, cuisine, and dietary
            preferences. With robust styling using Tailwind CSS and SCSS, and
            secure data management through Firebase and MongoDB, RecipeMaster
            enhances culinary creativity and efficiency in both home kitchens
            and professional settings.
          </p>
          <p className="text-green-500 mt-2 mb-2">
            <span className="text-white font-sans border border-slate-600 p-2 rounded-xl shadow-xl">
              Technology stack:
            </span>{" "}
            Next.js, Typescript, Tailwind Css, Jsx, Css, Scss.
          </p>
          <h2>
            <span className="text-white font-sana">Challenges: </span> In this
            project i did not use React Router, i did the foundational Routing
            by passing Props and that was a huge challenge at First
          </h2>
          <h3>
            <span className="text-white font-sans">Solution:</span> After
            regular error prompts, i had to make research on the error and got
            different solutions for one challenge i had to use the
            React-Router-Documentation for a profered solution{" "}
          </h3>

          <h2 className="uppercase font-semibold mt-[1rem] mb-[.5rem] text-white">
            Project info
          </h2>
          <hr />
          <span className="flex justify-between mt-[2rem] ">
            <p className="text-white">Year</p>
            <p>2023</p>
          </span>

          <span className="flex justify-between mt-[2rem]">
            <p className="text-white">Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer">
            <span className="flex cursor-pointer gap-2">
              <a href="https://savour-app.vercel.app/" target="_blank">
                <h1 className="uppercase text-yellow-300 underline">
                  {" "}
                  <span className="flex gap-2">
                    <img src={Arrow} alt="Arrow" />
                    LIVE DEMO
                  </span>{" "}
                </h1>
              </a>
            </span>
            <a
              href="https://github.com/DevzekiFaith/Savour-app.git"
              target="_blank"
            >
              <h1 className="uppercase text-yellow-300 underline">
                {" "}
                <span className="flex gap-2">
                  <img src={GitHubImage} alt="Github" />
                  SEE ON GITHUB
                </span>{" "}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* project 3 */}

      <div className="flex xl:flex-row flex-col justify-center items-center gap-[3rem] p-[2rem] mb-[3rem]">
        <div className="mt-[2rem]">
          {/* <h1 className='uppercase font-bold text-6xl'>feature projects</h1> */}
          {/* <p className='w-[350px] text-slate-600'>Here are some of the selected projects that showcase my passion fro front-end Engineering</p> */}
          <div className=" xl:w-[36rem] h-[28rem] mt-[2rem] active:scale-0 cursor-pointer hover:-translate-y-6 relative">
            <div className="flex justify-center items-center h-full shadow-2xl">
              <img
                className="w-[90%] h-[24rem]"
                src={Image005}
                placeholder="Blur"
                alt="project image"
              />
            </div>
            <div className="absolute top-[12rem]">
              <img
                className="h-[18rem] w-[28rem]"
                src={Image008}
                placeholder="blur"
                alt="background Image"
              />
            </div>
          </div>
        </div>

        <div className="xl:w-[40%]">
          <h3 className="text-lg font-medium uppercase text-white xl:mt-[5rem] mb-[1rem]">
            TECHEAT APP
          </h3>
          <p>
            Techeat is a Responsive Web and Mobile innovative food app designed
            for students,providing a seamless platform to manage their meals.
            The app features a user-friendly interface built with React.js and
            Next.js, ensuring a responsive and intuitive experience. It allows
            students to browse meal options, place orders, and track their
            nutrition intake effortlessly. Leveraging technologies and
            integrating Firebase for secure authentication and MongoDB for
            efficient data management, Techeat enhances the overall student
            experience by simplifying meal planning and promoting healthy eating
            habits.{" "}
          </p>
          <p className="text-green-500 mt-2 mb-2">
            <span className="text-white font-sans border border-slate-600 p-2 rounded-xl pt-2 pb-2">
              Technology stack:
            </span>{" "}
            React, Tailwind Css, Scss and css{" "}
          </p>
          <h2>
            <span className="text-white font-sana">Challenges:</span>In this
            project, I designed a visually appealing login page for Techeat. One
            of the challenges i encountered was toggling the screen from SignUp
            to Sign. this challenge came in as a result of the Product design .
          </h2>
          <h3>
            <span className="text-white font-sans">Solution:</span> After
            regular error prompts, i had to make research on the error and
            brought the solution to the team which lead to changing the way the
            SignUp and SignIn card was designed cause the methods were
            conflicting.
          </h3>

          <h2 className="uppercase font-semibold mt-[1rem] mb-[.5rem] text-white">
            Project info
          </h2>
          <hr />
          <span className="flex justify-between mt-[2rem]">
            <p className="text-white">Year</p>
            <p>2023</p>
          </span>

          <span className="flex justify-between mt-[2rem]">
            <p className="text-white">Role</p>
            <p>Front-end Engineering</p>
          </span>
          <div className=" flex justify-between mt-[2rem] cursor-pointer">
            <span className="flex cursor-pointer gap-2">
              <a href="https://techitz.netlify.app/signup" target="_blank">
                <h1 className="uppercase text-yellow-300 underline">
                  {" "}
                  <span className="flex gap-2">
                    <img src={Arrow} alt="Arrow" />
                    LIVE DEMO
                  </span>{" "}
                </h1>
              </a>
            </span>
            <a
              href="https://github.com/willybrown100/techeat.git"
              target="_blank"
            >
              <h1 className="uppercase text-yellow-300 underline">
                {" "}
                <span className="flex gap-2">
                  <img src={GitHubImage} alt="Github" />
                  SEE ON GITHUB
                </span>{" "}
              </h1>
            </a>
          </div>
        </div>
      </div>

      <hr className="xl:w-[80rem] xl:ml-[2rem] " />

      {/* ABOUT ME LINE */}

      <div className="flex xl:flex-row flex-col justify-center items-center xl:h-[25rem] mt-[2rem] ">
        <div className="w-[100%]">
          <h1 className="text-6xl font-bold uppercase p-[2rem] text-center xl:ml-[-5rem] active:scale-0 cursor-pointer hover:-translate-y-6">
            about me
          </h1>
        </div>
        <div className="w-[100%] p-[3rem]">
          <h2 className="xl:w-[500px] mb-[2rem] uppercase text-white font-bold">
            Am a Front-end Engineer and I have An Architectural background{" "}
          </h2>
          <p>
            I am a front-end Engineer based in Nigeria looking for exciting
            opportunities. I have an Architectural background. I like to focus
            on accessibility when developing. Am passionate and curious about
            solving Tech Challenges. Currently, i'm exploring some Language
            tools like React Native and Python. When am not programming, I enjoy
            playing Basketball and more to improve my skills.{" "}
          </p>

          <Link to="/About">
            <h1 className="uppercase underline text-yellow-300 mt-[1rem]">
              MORE ABOUT ME
            </h1>
          </Link>
        </div>
      </div>

      <hr className="xl:w-[80rem] xl:ml-[2rem]" />

      {/* LET'S CONNECT LINE */}

      <div>
        <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[4rem]">
          <div>
            <div className="xl:ml-[-5rem] ml-[2rem] mt-[3rem]">
              <h1 className="uppercase text-6xl font-bold mb-[1.5rem] active:scale-0 cursor-pointer hover:-translate-y-6">
                let's connect
              </h1>
              <p className="flex">
                Say hello at{" "}
                {/* <span className="underline cursor-pointer text-yellow-300 ml-1">
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    <MdMarkEmailRead className="w-[1.5rem] h-[1.5rem] cursor-pointer" />
                  </a>
                </span> */}
              </p>
            </div>
            <div className="flex justify-center items-center gap-1  w-[5rem] mt-2 pl-[2rem]">
              <a className="" href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/">
                <FaLinkedin className="w-[2rem] h-[2rem] cursor-pointer"/>
              </a>
              <a href="https://github.com/DevzekiFaith">
                <FaSquareGithub className="w-[2rem] h-[2rem] cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="xl:ml-[6rem] mt-[4rem]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-[1rem]">
                <label>Name</label>
                <input
                  className="xl:w-[30rem] bg-transparent text-white border-0 h-[2.5rem]"
                  type="text"
                  placeholder=""
                  {...register("Username", {
                    required: "Username is required",
                  })}
                />
                <span className="text-red-800 text-sm">
                  {errors.Username?.message}
                </span>
              </div>
              <div className="flex flex-col mb-[1rem]">
                <label>Email</label>
                <input
                  className="xl:w-[30rem] bg-transparent border-0 h-[2.5rem] mb-[1rem] text-white text-sm"
                  type="text"
                  placeholder=""
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
                <label>Password</label>
                <input
                  className="xl:w-[30rem] bg-transparent border-0 h-[2.5rem] text-white"
                  type="Password"
                  placeholder=""
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
                <label>Message</label>
                <textarea
                  className="xl:w-[30rem] w-[20rem] h-[6rem] scroll-m-3 bg-slate-800 border-0 text-white"
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
    </div>
  );
};

export default Home;
