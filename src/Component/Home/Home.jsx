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
import { FaGithub } from "react-icons/fa6";
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
    <div className="bg-white min-h-screen">
      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed top-6 right-6 bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-6 py-4 rounded-xl shadow-2xl transition-all duration-500 z-50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-medium">Message sent successfully!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
          <div className="max-w-2xl text-center xl:text-left">
            <div className="mb-8">
              <h1 className="text-5xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent">
                  Ezekiel
                </span>
              </h1>
              <div className="text-xl xl:text-2xl text-gray-600 font-light leading-relaxed">
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Engineer with a passion for creating beautiful, functional web experiences.",
                      "Architect turned developer, bringing unique perspectives to digital design.",
                      "Building the future, one pixel at a time."
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#635bff]/20">
                  Let's Connect
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </Link>

              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                  className="group p-3 bg-gray-100 rounded-xl hover:bg-[#635bff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/DevzekiFaith"
                  className="group p-3 bg-gray-100 rounded-xl hover:bg-[#635bff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="xl:w-[500px] w-full max-w-md">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#635bff] to-[#a084ee] rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <img
                className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                src={ProfileImage}
                alt="Ezekiel Oghojafor"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work showcasing modern web development and design principles.
            </p>
          </div>

          {/* Project Cards */}
          <div className="space-y-32">
            {/* Project 1 */}
            <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
              <div className="xl:w-[45%] w-full">
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-700">
                  <img
                    className="w-full h-auto"
                    src={ImageProject001}
                    alt="Movie App project"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">Movie App</h3>
                      <p className="text-sm opacity-90">React • Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-[45%] w-full">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                      Movie App Landing Page
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      A responsive movie application featuring dynamic content and modern UI design. 
                      Built with React and Tailwind CSS for optimal performance and user experience.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#635bff] rounded-full"></div>
                      <span className="text-gray-900 font-semibold">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">React</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Responsive Design</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://movie-app-two-liart.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                    <a
                      href="https://github.com/DevzekiFaith/movie-app.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-[#635bff] hover:text-[#635bff] transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
              <div className="xl:w-[45%] w-full order-2 xl:order-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                      Savour Recipe App
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      A comprehensive recipe application designed for both home cooks and restaurant chefs. 
                      Features advanced search, favorites management, and shopping list generation.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#635bff] rounded-full"></div>
                      <span className="text-gray-900 font-semibold">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Next.js</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">SCSS</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://savour-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                    <a
                      href="https://github.com/DevzekiFaith/Savour-app.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-[#635bff] hover:text-[#635bff] transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="xl:w-[45%] w-full order-1 xl:order-2">
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-700">
                  <img
                    className="w-full h-auto rounded-3xl"
                    src={Image004}
                    alt="Recipe App background"
                    loading="lazy"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-30%] w-[85%]">
                    <img
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      src={Image003}
                      alt="Recipe App interface"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">Savour App</h3>
                      <p className="text-sm opacity-90">Next.js • TypeScript</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
              <div className="xl:w-[45%] w-full">
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-700">
                  <img
                    className="w-full h-auto rounded-3xl"
                    src={Image005}
                    alt="Techeat App main"
                    loading="lazy"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-20%] w-[85%]">
                    <img
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      src={Image008}
                      alt="Techeat App signup"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">Techeat App</h3>
                      <p className="text-sm opacity-90">React • Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-[45%] w-full">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                      Techeat Student Food App
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      An innovative food application designed specifically for students, 
                      providing seamless meal management and nutrition tracking capabilities.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#635bff] rounded-full"></div>
                      <span className="text-gray-900 font-semibold">Key Features</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#635bff] rounded-full"></div>
                        <span className="text-gray-700">User authentication</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#635bff] rounded-full"></div>
                        <span className="text-gray-700">Order management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#635bff] rounded-full"></div>
                        <span className="text-gray-700">Nutrition tracking</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://techitz.netlify.app/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                    <a
                      href="https://github.com/willybrown100/techeat.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-[#635bff] hover:text-[#635bff] transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
              <div className="xl:w-[45%] w-full order-2 xl:order-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                      Reflectify Journal App
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      A modern journaling application that creates the best way to journal as quickly as possible. 
                      Features Google authentication and seamless user experience.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#635bff] rounded-full"></div>
                      <span className="text-gray-900 font-semibold">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Next.js</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Firebase</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://my-portfolio-seven-gules-28.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                    <a
                      href="https://github.com/DevzekiFaith/my-portfolio.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-[#635bff] hover:text-[#635bff] transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="xl:w-[45%] w-full order-1 xl:order-2">
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-700">
                  <img
                    className="w-full h-auto"
                    src={ImageProject002}
                    alt="Reflectify App project"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">Reflectify</h3>
                      <p className="text-sm opacity-90">Next.js • TypeScript • Firebase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
            <div className="xl:w-1/2">
              <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                About{" "}
                <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent text-white">
                  Me
                </span>
              </h2>
            </div>

            <div className="xl:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-4">
                  Frontend Engineer with Architectural Background
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I am a passionate frontend engineer based in Nigeria, combining my unique architectural background 
                  with modern web development to create exceptional digital experiences. My focus is on accessibility, 
                  user experience, and clean, maintainable code.
                </p>
              </div>

              <Link
                to="/About"
                className="inline-flex items-center gap-3 text-[#635bff] hover:text-[#a084ee] font-semibold text-lg transition-colors duration-300 group"
              >
                <span>Learn More About Me</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex xl:flex-row flex-col justify-center items-start gap-16">
            <div className="xl:w-1/2">
              <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-8">
                Let's{" "}
                <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent text-white">
                  Connect
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to bring your ideas to life? Let's discuss how we can work together 
                to create something amazing.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaLinkedin className="w-6 h-6 text-[#635bff] group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://github.com/DevzekiFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaGithub className="w-6 h-6 text-[#635bff] group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="xl:w-1/2 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-gray-900 font-semibold">Name</label>
                  <input
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
                    type="text"
                    placeholder="Your name"
                    {...register("Username", {
                      required: "Name is required",
                    })}
                  />
                  {errors.Username && (
                    <span className="text-red-500 text-sm">
                      {errors.Username.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-gray-900 font-semibold">Email</label>
                  <input
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
                    type="email"
                    placeholder="your.email@example.com"
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
                  <label className="text-gray-900 font-semibold">Message</label>
                  <textarea
                    className="w-full h-32 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 resize-none focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#635bff]/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
