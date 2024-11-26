import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "/p.image.jpg";
import LinkdlnImage from "/linkedin.svg";
import GitHubImage from "/github.svg";
import Arrow from "/arrow-up-right-circle-fill.svg";
import ImageProject001 from "/movie-app.jpg.png";
import ImageProject002 from "/next-p.png";
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
  const [toastVisible, setToastVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show toast notification
    setToastVisible(true);

    // Hide toast after 3 seconds
    setTimeout(() => {
      setToastVisible(false);
      reset(); // Reset the form fields
    }, 3000); // Adjust the delay as needed (3000ms = 3 seconds)
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300">
          Thank you for your message! You will be get back to you soon.
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex xl:flex-row flex-col justify-center items-start gap-12 md:items-center">
          <div className="max-w-xl">
            <div className="prose prose-lg text-white">
              <Typewriter
                options={{
                  strings: [
                    `Hi, i am Ezekiel Oghojafor Ubor`,
                    `Dynamic and results-driven Frontend Engineer with a Bachelor of Science in Architecture and extensive experience in developing high-quality web and mobile applications. Proficient in modern web technologies including React.js, Next.js, React Native, Scss and Tailwind CSS, with a proven track record of enhancing user experiences and driving business growth. Adept at collaborating with cross-functional teams to deliver innovative solutions within tight deadlines. Seeking to leverage my skills and contribute to impactful projects in a challenging environment.`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="flex items-center gap-6 mt-8">
              <Link to="/contact">
                <button className="transform hover:scale-105 transition-transform duration-300 bg-yellow-300 px-6 py-2 rounded-full uppercase font-bold text-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  Contact me
                </button>
              </Link>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                  className="transform hover:scale-110 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-600" />
                </a>
                <a
                  href="https://github.com/DevzekiFaith"
                  className="transform hover:scale-110 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub className="w-8 h-8 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          <div className="xl:w-[500px] w-full max-w-md">
            <img
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              src={ProfileImage}
              alt="profile picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <hr className="border-slate-800 mx-auto max-w-7xl my-12" />

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          FEATURED PROJECTS
        </h2>

        {/* Project Cards */}
        <div className="space-y-24">
          {/* Project 1 */}
          <div className="flex xl:flex-row flex-col justify-center items-center gap-12">
            <div className="xl:w-[36rem] w-full">
              <div className="group relative overflow-hidden rounded-xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <img
                  className="w-full h-auto"
                  src={ImageProject001}
                  alt="Movie App project"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">Movie App</h3>
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[40%] w-full">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Movie-App Landing Page
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Responsive web and mobile App. Breathe life into a movie-app
                  webpage for our beloved show, Adventure Time. Delivered a
                  fully responsive design with dynamic content capabilities.
                </p>

                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">Tech Stack:</span>
                    <span className="text-green-500">React, Tailwind CSS</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium">
                      Challenges & Solutions:
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Implemented routing without React Router initially, which
                      presented unique challenges in state management and
                      navigation.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <a
                    href="https://movie-app-two-liart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <img src={Arrow} alt="Arrow" className="w-5 h-5" />
                    <span className="uppercase font-medium">Live Demo</span>
                  </a>

                  <a
                    href="https://github.com/DevzekiFaith/movie-app.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <img src={GitHubImage} alt="Github" className="w-5 h-5" />
                    <span className="uppercase font-medium">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex xl:flex-row flex-col justify-center items-center gap-12">
            <div className="xl:w-[36rem] w-full">
              <div className="group relative overflow-hidden rounded-xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <img
                  className="w-full h-auto rounded-xl"
                  src={Image004}
                  alt="Recipe App background"
                  loading="lazy"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-30%] w-[85%]">
                  <img
                    className="w-full h-auto rounded-xl shadow-2xl"
                    src={Image003}
                    alt="Recipe App interface"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="xl:w-[40%] w-full">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Recipe Food App For Restaurants
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Savour-App is a versatile recipe application designed for both
                  home cooks and restaurant chefs. Built with Next.js and
                  featuring an intuitive interface for recipe discovery and
                  management.
                </p>

                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">Tech Stack:</span>
                    <span className="text-green-500">
                      Next.js, TypeScript, Tailwind CSS, SCSS
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Key Features:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                      <li>Advanced search and filtering</li>
                      <li>Favorite recipe management</li>
                      <li>Shopping list generation</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <a
                    href="https://savour-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <img src={Arrow} alt="Arrow" className="w-5 h-5" />
                    <span className="uppercase font-medium">Live Demo</span>
                  </a>

                  <a
                    href="https://github.com/DevzekiFaith/Savour-app.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <img src={GitHubImage} alt="Github" className="w-5 h-5" />
                    <span className="uppercase font-medium">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex xl:flex-row flex-col justify-center items-center gap-12">
            <div className="xl:w-[36rem] w-full">
              <div className="group relative overflow-hidden rounded-xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <img
                  className="w-full h-auto rounded-xl"
                  src={Image005}
                  alt="Techeat App main"
                  loading="lazy"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-20%] w-[85%]">
                  <img
                    className="w-full h-auto rounded-xl shadow-2xl"
                    src={Image008}
                    alt="Techeat App signup"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="xl:w-[40%] w-full">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">TECHEAT APP</h3>
                <p className="text-gray-300 leading-relaxed">
                  An innovative food app designed specifically for students,
                  providing a seamless platform for meal management and
                  nutrition tracking.
                </p>

                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">Tech Stack:</span>
                    <span className="text-green-500">
                      React, Tailwind CSS, SCSS
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Key Features:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                      <li>User authentication</li>
                      <li>Order management</li>
                      <li>Nutrition tracking</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <a
                    href="https://techitz.netlify.app/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <img src={Arrow} alt="Arrow" className="w-5 h-5" />
                    <span className="uppercase font-medium">Live Demo</span>
                  </a>

                  <a
                    href="https://github.com/willybrown100/techeat.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <img src={GitHubImage} alt="Github" className="w-5 h-5" />
                    <span className="uppercase font-medium">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* project 4 */}

          <div className="flex xl:flex-row flex-col justify-center items-center gap-12">
            <div className="xl:w-[36rem] w-full">
              <div className="group relative overflow-hidden rounded-xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <img
                  className="w-full h-auto"
                  src={ImageProject002}
                  alt="Movie App project"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">Preview</h3>
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[40%] w-full">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Reflectify</h3>
                <p className="text-gray-300 leading-relaxed">
                  This application creates the best way to Journaling as quickly
                  as possible because, Your journaling process just got better!
                </p>

                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">Tech Stack:</span>
                    <span className="text-green-500">
                      Nextjs, TypeScript , Tailwind CSS
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium">
                      Challenges & Solutions:
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Implementing the google Authentication for sign-in and
                      sign-out was very tricky. I had to use firebase for my
                      Authentication, storage and yet i kept experiencing popup
                      block, and after popup block, auth(app) started throwing
                      errors. I had to calm-down , left the code for a while and
                      came back with a clear head to find out that i did not
                      enter the custom domain in the firebase Authentication
                      after some careful research. Phewwww, am super happy cause
                      it worked.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <a
                    href="https://my-portfolio-seven-gules-28.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <img src={Arrow} alt="Arrow" className="w-5 h-5" />
                    <span className="uppercase font-medium">Live Demo</span>
                  </a>

                  <a
                    href="https://github.com/DevzekiFaith/my-portfolio.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <img src={GitHubImage} alt="Github" className="w-5 h-5" />
                    <span className="uppercase font-medium">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-800 mx-auto max-w-7xl my-12" />

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex xl:flex-row flex-col justify-center items-center gap-12">
          <div className="xl:w-1/2">
            <h2 className="text-4xl font-bold uppercase text-white mb-8 transform hover:-translate-y-2 transition-transform duration-300">
              about me
            </h2>
          </div>

          <div className="xl:w-1/2 space-y-6">
            <h3 className="text-xl font-bold uppercase text-white">
              Front-end Engineer with Architectural Background
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I am a front-end Engineer based in Nigeria looking for exciting
              opportunities. With my unique background in Architecture, I bring
              a fresh perspective to web development, focusing on accessibility
              and user experience.
            </p>

            <Link
              to="/About"
              className="inline-block text-yellow-300 hover:text-yellow-400 uppercase font-medium transition-colors duration-300"
            >
              More About Me
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-slate-800 mx-auto max-w-7xl my-12" />

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex xl:flex-row flex-col justify-center items-start gap-12">
          <div className="xl:w-1/2">
            <h2 className="text-4xl font-bold uppercase text-white mb-8 transform hover:-translate-y-2 transition-transform duration-300">
              let's connect
            </h2>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-600" />
              </a>
              <a
                href="https://github.com/DevzekiFaith"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaSquareGithub className="w-8 h-8 hover:text-gray-700" />
              </a>
            </div>
          </div>

          <div className="xl:w-1/2 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-white">Name</label>
                <input
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-300 transition-colors duration-300"
                  type="text"
                  {...register("Username", {
                    required: "Username is required",
                  })}
                />
                {errors.Username && (
                  <span className="text-red-500 text-sm">
                    {errors.Username.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-white">Email</label>
                <input
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-300 transition-colors duration-300"
                  type="email"
                  {...register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.Email && (
                  <span className="text-red-500 text-sm">
                    {errors.Email.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-white">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-300 transition-colors duration-300"
                    {...register("Password", {
                      required: "Password is required",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.001 10.001 0 0112 21c-5.523 0-10-4.477-10-10 0-1.657.4-3.215 1.1-4.575M15.362 15.362A10.001 10.001 0 0021 12c0-1.657-.4-3.215-1.1-4.575M9.636 9.636A3 3 0 0112 9a3 3 0 012.364 4.636M9.636 9.636L12 12m-2.364 2.364A3 3 0 0012 15a3 3 0 002.364-4.636M9.636 9.636L12 12m-2.364 2.364A3 3 0 0012 15a3 3 0 002.364-4.636"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3l18 18M21 12c0 4.418-3.582 8-8 8-1.657 0-3.215-.4-4.575-1.1M3 12c0-4.418 3.582-8 8-8 1.657 0 3.215.4 4.575 1.1"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.Password && (
                  <span className="text-red-500 text-sm">
                    {errors.Password.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-white">Message</label>
                <textarea
                  className="w-full h-32 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white resize-none focus:outline-none focus:border-yellow-300 transition-colors duration-300"
                  placeholder="Hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full uppercase transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
