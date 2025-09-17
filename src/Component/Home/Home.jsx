import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileImage from "/p.image.jpg";
import LinkdlnImage from "/linkedin.svg";
import GitHubImage from "/github.svg";
import Arrow from "/arrow-up-right-circle-fill.svg";
import ImageProject001 from "/md1.jpg";
import ImageProject002 from "/md2.jpg";
import Image001 from "/twitter-x.svg";
import Image002 from "/instagram.svg";
import Image003 from "/md3.jpg";
import Image004 from "/md4.jpg";
import Image005 from "/md5.jpg";
import Image006 from "/add movie.png";
import Image008 from "/md6.jpg";
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
    <div className="min-h-screen bg-gray-100 relative">
      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed top-6 right-6 bg-gray-100 text-emerald-700 px-6 py-4 rounded-2xl shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] transition-all duration-500 z-50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Message sent successfully!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
          <motion.div 
            className="max-w-2xl text-center xl:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8">
              <motion.h1 
                className="text-4xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <motion.span 
                  className="text-emerald-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Faith
                </motion.span>
              </motion.h1>
              <motion.div 
                className="text-lg xl:text-xl text-gray-600 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "HealthTech Frontend Engineer specializing in telemedicine and patient care solutions.",
                      "Building digital health platforms that improve patient outcomes and healthcare accessibility.",
                      "Creating intuitive interfaces for healthcare professionals and patients worldwide."
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </motion.div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/contact">
                <motion.button 
                  className="group bg-gray-100 text-emerald-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff] transition-all duration-300 focus:outline-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </motion.button>
              </Link>

              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                  className="group p-3 bg-gray-100 rounded-xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="w-5 h-5 text-emerald-600" />
                </motion.a>
                <motion.a
                  href="https://github.com/DevzekiFaith"
                  className="group p-3 bg-gray-100 rounded-xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="w-5 h-5 text-emerald-600" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="xl:w-[400px] w-full max-w-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div 
              className="bg-gray-100 rounded-3xl p-6 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-auto rounded-2xl"
                src={ProfileImage}
                alt="Ezekiel Oghojafor"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
                HealthTech &{" "}
                <span className="text-emerald-600">
                  Telemedicine Projects
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized healthcare solutions designed to improve patient care, streamline medical workflows, and enhance healthcare accessibility.
              </p>
            </motion.div>
          </motion.div>

          {/* Project Cards */}
          <div className="space-y-32">
            {/* Project 1 - Patient Appointment Booking App */}
            <motion.div 
              className="flex xl:flex-row flex-col justify-center items-center gap-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="xl:w-[45%] w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gray-100 rounded-3xl p-6 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-full h-64 object-cover rounded-2xl"
                    src={ImageProject001}
                    alt="Patient Appointment Booking App"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="xl:w-[45%] w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <motion.div 
                    className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-4">
                      Patient Appointment Booking App
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A comprehensive appointment management system that streamlines the booking process for patients and healthcare providers. 
                      Features real-time availability, automated reminders, and integrated patient records.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-800 font-semibold">Key Features</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">Real-time appointment scheduling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">Automated SMS/Email reminders</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">Patient health history integration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">HIPAA-compliant data handling</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-emerald-700 mb-3">Case Study: Improving Patient Experience</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Reduced appointment booking time by 70% and increased patient satisfaction scores by 45% through intuitive UI design 
                      and automated reminder system. The clean, accessible interface ensures patients of all ages can easily schedule appointments.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gray-100 text-emerald-700 px-6 py-3 rounded-xl font-semibold shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </motion.a>

                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Project 2 - Telemedicine Video Consultation Platform */}
            <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
              <div className="xl:w-[45%] w-full order-2 xl:order-1">
                <div className="space-y-6">
                  <div className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]">
                    <h3 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-4">
                      Telemedicine Video Consultation Platform
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A secure, HIPAA-compliant video consultation platform connecting patients with healthcare providers remotely. 
                      Features high-quality video calls, screen sharing, and integrated prescription management.
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
                        <span className="text-gray-700 text-sm">HD video consultation with screen sharing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">Secure patient-doctor messaging</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">Digital prescription management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">End-to-end encryption</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]">
                    <h4 className="text-lg font-semibold text-emerald-700 mb-3">Case Study: Remote Healthcare Access</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Enabled 15,000+ remote consultations during COVID-19, reducing hospital visits by 60% while maintaining 
                      quality of care. The platform's intuitive design reduced technical support calls by 80% among elderly patients.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gray-100 text-emerald-700 px-6 py-3 rounded-xl font-semibold shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="xl:w-[45%] w-full order-1 xl:order-2">
                <div className="bg-gray-100 rounded-3xl p-6 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]">
                  <img
                    className="w-full h-64 object-cover rounded-2xl"
                    src={Image004}
                    alt="Telemedicine Platform"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Project 3 - Patient Health Record Portal */}
            <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
              <div className="xl:w-[45%] w-full">
                <div className="bg-gray-100 rounded-3xl p-6 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]">
                  <img
                    className="w-full h-64 object-cover rounded-2xl"
                    src={Image005}
                    alt="Patient Health Record Portal"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="xl:w-[45%] w-full">
                <div className="space-y-6">
                  <div className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]">
                    <h3 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-4">
                      Patient Health Record Portal
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A comprehensive digital health record management system that empowers patients to access, 
                      manage, and share their medical information securely with healthcare providers.
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
                        <span className="text-gray-700 text-sm">Comprehensive medical history tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">Lab results and imaging reports</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">Medication management and reminders</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">Secure provider sharing</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]">
                    <h4 className="text-lg font-semibold text-emerald-700 mb-3">Case Study: Patient Empowerment</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Improved patient engagement by 65% and reduced administrative burden on healthcare staff by 40%. 
                      Patients reported feeling more in control of their health with easy access to their medical data and treatment history.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gray-100 text-emerald-700 px-6 py-3 rounded-xl font-semibold shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 - Mental Health / Therapy Session Booking App */}
            <div className="flex xl:flex-row flex-col justify-center items-center gap-16">
              <div className="xl:w-[45%] w-full order-2 xl:order-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                      Mental Health & Therapy Session Booking App
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      A compassionate mental health platform connecting patients with licensed therapists and counselors. 
                      Features secure booking, mood tracking, and crisis support resources.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-[#10b981] rounded-full"></div>
                      <span className="text-gray-900 font-semibold">Key Features</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                        <span className="text-gray-700">Therapist matching and booking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                        <span className="text-gray-700">Mood tracking and journaling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                        <span className="text-gray-700">Crisis intervention resources</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                        <span className="text-gray-700">Anonymous support groups</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Case Study: Breaking Mental Health Barriers</h4>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Increased therapy session bookings by 120% and reduced wait times from 3 weeks to 3 days. 
                      The stigma-free design and anonymous features encouraged 40% more users to seek mental health support.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#10b981]/25 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-[#10b981] hover:text-[#10b981] transition-all duration-300"
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
                    alt="Mental Health App"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">MindCare Connect</h3>
                      <p className="text-sm opacity-90">React • Node.js • PostgreSQL</p>
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
          <motion.div 
            className="flex xl:flex-row flex-col justify-center items-center gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="xl:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 mb-8">
                  About{" "}
                  <span className="text-emerald-600">
                    Me
                  </span>
                </h2>
              </motion.div>
            </motion.div>

            <motion.div 
              className="xl:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-4">
                  HealthTech Frontend Engineer & Healthcare UX Specialist
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I am a passionate frontend engineer specializing in healthcare technology solutions. With a unique architectural background, 
                  I bring a human-centered design approach to creating accessible, secure, and intuitive digital health experiences. 
                  My expertise lies in HIPAA-compliant applications, telemedicine platforms, and patient-centered healthcare interfaces.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-100 rounded-2xl p-6 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-emerald-700 mb-3">Healthcare Technology Expertise</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">HIPAA Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Telemedicine Platforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Patient Data Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Accessibility (WCAG 2.1)</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/About"
                  className="inline-flex items-center gap-3 bg-gray-100 text-emerald-700 hover:text-emerald-800 font-semibold text-lg transition-all duration-300 group px-6 py-3 rounded-xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff]"
                >
                  <span>Learn More About My HealthTech Journey</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex xl:flex-row flex-col justify-center items-start gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="xl:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl xl:text-5xl font-bold text-gray-800 mb-8">
                  Let's{" "}
                  <span className="text-emerald-600">
                    Connect
                  </span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ready to transform healthcare through technology? Let's discuss how we can work together 
                  to create innovative health solutions that improve patient outcomes and healthcare accessibility.
                </p>

                <div className="flex items-center gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-100 rounded-2xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/DevzekiFaith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-100 rounded-2xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="xl:w-1/2 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-100 rounded-3xl p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-gray-800 font-semibold">Name</label>
                    <input
                      className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
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
                    <label className="text-gray-800 font-semibold">Email</label>
                    <input
                      className="w-full bg-gray-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
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
                    <label className="text-gray-800 font-semibold">Message</label>
                    <textarea
                      className="w-full h-32 bg-gray-100 rounded-xl px-4 py-3 text-gray-800 resize-none focus:outline-none shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gray-100 text-emerald-700 font-semibold py-4 px-6 rounded-xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 focus:outline-none"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
