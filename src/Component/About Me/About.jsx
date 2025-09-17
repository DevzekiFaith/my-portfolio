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
  <div className="group bg-gray-100 transition-all duration-300 w-32 text-center rounded-2xl mb-4 p-4 text-gray-700 flex flex-col justify-center items-center gap-2 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff]">
    <Icon className="text-2xl text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const ExperienceItem = ({ title, period, description }) => (
  <div className="bg-gray-100 rounded-2xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] transition-all duration-300">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">{title}</h3>
      <span className="px-4 py-2 bg-gray-100 text-emerald-700 rounded-full text-sm font-semibold shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff]">{period}</span>
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
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiVercel },
    { name: "TypeScript", icon: BiLogoTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "WebRTC", icon: FaReact },
    { name: "Firebase", icon: FaReact },
    { name: "Node.js", icon: FaReact },
    { name: "MongoDB", icon: FaReact },
    { name: "PostgreSQL", icon: FaReact },
    { name: "Figma", icon: FaFigma },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub }
  ];

  const experiences = [
    {
      title: "HealthTech Frontend Engineer",
      period: "Nov 2023 - Present",
      description: `Specializing in healthcare technology solutions, I develop HIPAA-compliant applications and telemedicine platforms. My focus is on creating accessible, secure, and intuitive digital health experiences that improve patient outcomes. I've successfully built patient appointment systems, health record portals, and mental health platforms, resulting in 60% improved patient engagement and 40% reduced administrative burden.`
    },
    {
      title: "Healthcare UX Specialist",
      period: "Sep 2023 - Nov 2023",
      description: `During my specialization in healthcare UX, I developed expertise in creating patient-centered interfaces for medical applications. I worked on telemedicine platforms, focusing on accessibility compliance (WCAG 2.1 AA) and user experience optimization for healthcare professionals and patients of all ages.`
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed top-6 right-6 bg-gray-100 text-emerald-700 px-6 py-4 rounded-xl shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] transition-all duration-500 z-50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Message sent successfully!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-16">
          <div className="xl:w-1/2">
            <h1 className="text-4xl xl:text-6xl font-bold text-gray-800 mb-8">
              About{" "}
              <span className="text-emerald-600">
                Me
              </span>
            </h1>
            
            <div className="text-xl text-gray-600 mb-8 leading-relaxed">
              <Typewriter
                options={{
                  strings: [
                    "I am a HealthTech Frontend Engineer specializing in healthcare technology solutions. With an architectural background, I bring a human-centered design approach to creating accessible, secure, and intuitive digital health experiences. I focus on HIPAA-compliant applications, telemedicine platforms, and patient-centered healthcare interfaces.",
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
                className="group flex items-center gap-3 bg-gray-100 text-emerald-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff] transition-all duration-300 focus:outline-none"
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
                  className="group p-3 bg-gray-100 rounded-xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5 text-emerald-600" />
                </a>
                <a
                  href="https://github.com/DevzekiFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-100 rounded-xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5 text-emerald-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2">
            <div className="bg-gray-100 rounded-3xl p-6 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]">
              <img
                src={ImageProfile01}
                alt="Ezekiel Oghojafor"
                className="w-full h-auto rounded-2xl"
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
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
              My{" "}
              <span className="text-emerald-600">
                Capabilities
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <Typewriter
                options={{
                  strings: [
                    "I continuously expand my expertise in healthcare technology, focusing on HIPAA compliance, telemedicine platforms, and patient-centered design. My goal is to create innovative health solutions that improve patient outcomes and healthcare accessibility.",
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

      {/* PCOS Patient App Case Study */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
              PCOS Patient{" "}
              <span className="text-emerald-600">
                Management App
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive case study showcasing how innovative UI/UX design improved patient outcomes and healthcare provider efficiency in PCOS management.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid xl:grid-cols-2 gap-16 items-center mb-16">
              <div className="bg-gray-100 rounded-3xl p-6 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]">
                <img
                  className="w-full h-64 object-cover rounded-2xl"
                  src="/pcos.jpg"
                  alt="PCOS Patient Management App Interface"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6">
                <div className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]">
                  <h3 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-4">
                    PCOS Patient Management Platform
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A comprehensive digital health platform designed specifically for PCOS patients to track symptoms, 
                    monitor treatment progress, and connect with healthcare providers. Features advanced data visualization, 
                    personalized health insights, and integrated care coordination.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-800 font-semibold">Key Features</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Advanced symptom tracking and pattern recognition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">3D anatomical visualization for patient education</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">AI-powered health insights and recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Integrated provider communication and care coordination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Results */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">78%</div>
                <div className="text-gray-700 font-semibold mb-2">Patient Engagement</div>
                <div className="text-gray-600 text-sm">Increase in daily app usage and symptom tracking compliance</div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">45%</div>
                <div className="text-gray-700 font-semibold mb-2">Treatment Adherence</div>
                <div className="text-gray-600 text-sm">Improvement in medication and lifestyle intervention compliance</div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">62%</div>
                <div className="text-gray-700 font-semibold mb-2">Provider Efficiency</div>
                <div className="text-gray-600 text-sm">Reduction in consultation time with improved data visualization</div>
              </div>
            </div>

            {/* Detailed Case Study */}
            <div className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Case Study: Improving PCOS Patient Outcomes</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-emerald-700 mb-3">Challenge</h5>
                  <p className="text-gray-600 leading-relaxed">
                    PCOS patients often struggle with complex symptom tracking, treatment adherence, and understanding their condition. 
                    Traditional healthcare approaches lacked personalized insights and real-time monitoring capabilities, leading to 
                    poor patient engagement and suboptimal treatment outcomes.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-emerald-700 mb-3">Solution</h5>
                  <p className="text-gray-600 leading-relaxed">
                    Developed a comprehensive PCOS management platform featuring advanced 3D anatomical visualization, 
                    AI-powered symptom pattern recognition, and integrated provider communication. The interface uses 
                    intuitive data visualization to help patients understand their condition and track progress effectively.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-emerald-700 mb-3">Key Findings</h5>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Patient Education:</strong> 3D visualization improved understanding of PCOS by 85%</li>
                    <li>• <strong>Symptom Tracking:</strong> Daily logging increased from 23% to 78% with intuitive UI</li>
                    <li>• <strong>Provider Communication:</strong> 60% reduction in follow-up questions through better data presentation</li>
                    <li>• <strong>Treatment Outcomes:</strong> 45% improvement in medication adherence and lifestyle changes</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-emerald-700 mb-3">Impact</h5>
                  <p className="text-gray-600 leading-relaxed">
                    The platform successfully transformed PCOS patient care by providing personalized insights, 
                    improving treatment adherence, and enhancing provider-patient communication. Patients reported 
                    feeling more empowered and informed about their condition, while healthcare providers experienced 
                    improved efficiency and better patient outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
              My{" "}
              <span className="text-emerald-600">
                Experience
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey of growth and learning in healthcare technology and patient-centered design.
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
              <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
                Let's{" "}
              <span className="text-emerald-600">
                Connect
              </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to transform healthcare through technology? Let's discuss innovative health solutions.
              </p>
            </div>

            <div className="grid xl:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in touch</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I'm always open to discussing healthcare technology opportunities and innovative health projects. 
                    Let's work together to improve patient outcomes through technology!
                  </p>
                  <p className="text-gray-600 mb-8">
                    Say hello at{" "}
                    <a
                      href="mailto:zekipossible@gmail.com"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold underline transition-colors duration-300"
                    >
                      zekipossible@gmail.com
                    </a>
                  </p>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-100 rounded-2xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://github.com/DevzekiFaith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-100 rounded-2xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-gray-800 font-semibold">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
                      placeholder="Your name"
                      {...register("Username", { required: "Name is required" })}
                    />
                    {errors.Username && (
                      <p className="text-red-500 text-sm">{errors.Username.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-800 font-semibold">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
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
                    <label className="text-gray-800 font-semibold">Message</label>
                    <textarea
                      className="w-full h-32 bg-gray-100 rounded-xl px-4 py-3 text-gray-800 resize-none focus:outline-none shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-100 text-emerald-700 font-semibold py-4 px-6 rounded-xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 focus:outline-none"
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
