import React, { useState } from "react";
import ImageProfile01 from "/m-page2.jpg";
import DownloadImage from "/download.svg";
import Typewriter from "typewriter-effect";
import { useForm } from "react-hook-form";
import { FaLinkedin, FaReact, FaCss3, FaFigma, FaSass, FaGitAlt, FaGithub } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { SiVercel, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

const TechBadge = ({ name, icon: Icon }) => (
  <div className="group bg-white border border-gray-200 hover:border-[#635bff] transition-all duration-300 w-32 text-center rounded-2xl mb-4 p-4 text-gray-700 flex flex-col justify-center items-center gap-2 transform hover:scale-105 hover:shadow-lg hover:shadow-[#635bff]/20">
    <Icon className="text-2xl text-[#635bff] group-hover:scale-110 transition-transform duration-300" />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const ExperienceItem = ({ title, period, description }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">{title}</h3>
      <span className="px-4 py-2 bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white rounded-full text-sm font-semibold">{period}</span>
    </div>
    <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
  </div>
);

const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
    }, 3000);
  };

  const techStack = [
    { name: "HTML", icon: IoLogoHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: RiJavascriptFill },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiVercel },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "TypeScript", icon: BiLogoTypescript },
    { name: "Figma", icon: FaFigma },
    { name: "React Native", icon: TbBrandReactNative },
    { name: "SCSS", icon: FaSass },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub }
  ];

  const experiences = [
    {
      title: "Freelance Developer",
      period: "Nov 2023 - Present",
      description: `As a Frontend Engineer over the past two years, I have tackled numerous industrial challenges, from optimizing complex user interfaces for high-traffic e-commerce platforms to enhancing accessibility for diverse user bases. My journey began with a pivotal role in redesigning a legacy system, where I successfully integrated modern frameworks like React.js and Next.js, resulting in a 40% increase in user engagement.`
    },
    {
      title: "Front-End Intern",
      period: "Sep 2023 - Nov 2023",
      description: `During my internship at Tech Studio, I played a crucial role in developing a food app for the academy called Techeat. Working collaboratively in a dynamic team, I was responsible for implementing key features using React.js and Tailwind, while styling the application with Tailwind CSS and SCSS.`
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900">
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
      <section className="container mx-auto px-6 py-20">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-16">
          <div className="xl:w-1/2">
            <h1 className="text-5xl xl:text-7xl font-bold text-gray-900 mb-8">
              About{" "}
              <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent text-white">
                Me
              </span>
            </h1>
            
            <div className="text-xl text-gray-600 mb-8 leading-relaxed">
              <Typewriter
                options={{
                  strings: [
                    "I am a Software Engineer front-end heavy looking for exciting opportunities. I have an Architectural background. I like to focus on accessibility when developing. Am passionate and curious about solving Tech Challenges. Currently, I'm exploring some Front-end tools like React.js and Next.js.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="Ezekiel's Resume.pdf"
                download
                className="group flex items-center gap-3 bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#635bff]/20"
              >
                <img src={DownloadImage} alt="Download" className="w-5 h-5" />
                <span>Download Resume</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-100 rounded-xl hover:bg-[#635bff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/DevzekiFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-100 rounded-xl hover:bg-[#635bff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#635bff] to-[#a084ee] rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <img
                src={ImageProfile01}
                alt="Ezekiel Oghojafor"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent text-white">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <Typewriter
                options={{
                  strings: [
                    "I am always looking to adding more skill-set to my learning stacks in different language model and frame works. This will enable my flexibility and productivity in the area of service delivery and problem solving",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
              <TechBadge key={index} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent text-white">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey of growth and learning in the world of frontend development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent text-white">
                  Connect
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss how we can work together.
              </p>
            </div>

            <div className="grid xl:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Get in touch</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    I'm always open to discussing new opportunities and exciting projects. 
                    Feel free to reach out if you'd like to connect!
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    Say hello at{" "}
                    <a
                      href="mailto:zekipossible@gmail.com"
                      className="text-[#635bff] hover:text-[#a084ee] font-semibold underline transition-colors duration-300"
                    >
                      zekipossible@gmail.com
                    </a>
                  </p>
                </div>

                <div className="flex gap-6">
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

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-gray-900 font-semibold">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
                      placeholder="Your name"
                      {...register("Username", { required: "Name is required" })}
                    />
                    {errors.Username && (
                      <p className="text-red-500 text-sm">{errors.Username.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-900 font-semibold">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
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
                      <p className="text-red-500 text-sm">{errors.Email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-900 font-semibold">Message</label>
                    <textarea
                      className="w-full h-32 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 resize-none focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
                      placeholder="Tell me about your project..."
                    ></textarea>
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

          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              © EZEKIEL OGHOJAFOR UBOR {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
