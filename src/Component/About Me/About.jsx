import React from "react";
import ImageProfile01 from "/m-page2.jpg";
import DownloadImage from "/download.svg";
import Typewriter from "typewriter-effect";
import { useForm } from "react-hook-form";
import { FaSquareGithub, FaLinkedin, FaReact, FaCss3, FaFigma, FaSass, FaGitAlt, FaGithub } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { SiVercel, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

const TechBadge = ({ name, icon: Icon }) => (
  <div className="border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors duration-300 w-32 text-center rounded-full mb-4 p-2 text-white flex justify-center items-center gap-2 transform hover:scale-105">
    {name}
    <Icon className="text-gray-400 hover:text-gray-300" />
  </div>
);

const ExperienceItem = ({ title, period, description }) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="text-yellow-300 font-medium">{period}</span>
    </div>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
    <div className="bg-black min-h-screen text-gray-200">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-12">
          <div className="xl:w-1/2">
            <h1 className="text-5xl font-bold text-white mb-8 animate-fade-in">
              about me
            </h1>
            
            <div className="prose prose-lg text-gray-300 mb-8">
              <Typewriter
                options={{
                  strings: [
                    "I am a Software Engineer front-end heavy looking for exciting opportunities. I have an Architectural background. I like to focus on accessibility when developing. Am passionate and curious about solving Tech Challenges. Currently, i'm exploring some Front-end tools like React.js and Next.js.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="flex items-center gap-6">
              <a
                href="Ezekiel's Resume.pdf"
                download
                className="flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
                <img src={DownloadImage} alt="Download" className="w-5 h-5" />
              </a>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-400" />
                </a>
                <a
                  href="https://github.com/DevzekiFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <FaSquareGithub className="w-8 h-8 hover:text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2">
            <div className="relative">
              <img
                src={ImageProfile01}
                alt="Profile"
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-900/30">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          my capabilities
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg text-gray-300 mb-8 text-center">
            <Typewriter
              options={{
                strings: [
                  "I am always looking to adding more skill-set to my learning stacks in different language model and frame works. This will enable my flexibility and productivity in the area of service delivery and problem solving",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {techStack.map((tech, index) => (
              <TechBadge key={index} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          my experience
        </h2>

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
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            let's connect
          </h2>

          <div className="grid xl:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in touch</h3>
              <p className="text-gray-300 mb-6">
                Say hello at{" "}
                <a
                  href="mailto:zekipossible@gmail.com"
                  className="text-yellow-300 hover:text-yellow-400 underline"
                >
                  zekipossible@gmail.com
                </a>
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-400" />
                </a>
                <a
                  href="https://github.com/DevzekiFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <FaSquareGithub className="w-8 h-8 hover:text-gray-400" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-colors duration-300 text-white"
                  {...register("Username", { required: "Name is required" })}
                />
                {errors.Username && (
                  <p className="mt-1 text-sm text-red-500">{errors.Username.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-colors duration-300 text-white"
                  {...register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.Email && (
                  <p className="mt-1 text-sm text-red-500">{errors.Email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg h-32 focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-colors duration-300 text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 text-sm text-gray-500">
          © EZEKIEL OGHOJAFOR UBOR {new Date().getFullYear()}
        </div>
      </section>
    </div>
  );
};

export default About;
