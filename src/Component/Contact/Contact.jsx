import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Show toast notification
    setToastVisible(true);

    // Hide toast after 3 seconds and navigate to home
    setTimeout(() => {
      setToastVisible(false);
      navigate('/'); // Navigate to the home page after submission
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed top-6 right-6 bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-6 py-4 rounded-xl shadow-2xl transition-all duration-500 z-50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-medium">Message sent successfully! Redirecting...</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl xl:text-7xl font-bold text-gray-900 mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent text-white">
              Connect
            </span>
          </h1>
          <p className="text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to discuss new opportunities 
            and collaborate on amazing projects. Let's create something incredible together!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-[#635bff] to-[#a084ee] rounded-xl">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Email</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Drop me a line and I'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:zekipossible@gmail.com"
              className="text-[#635bff] hover:text-[#a084ee] font-semibold transition-colors duration-300"
            >
              zekipossible@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-[#635bff] to-[#a084ee] rounded-xl">
                <FaFileAlt className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Resume</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Want to know more about my experience and skills?
            </p>
            <a
              href="Ezekiel's Resume.pdf"
              download
              className="inline-flex items-center gap-2 text-[#635bff] hover:text-[#a084ee] font-semibold transition-colors duration-300 group"
            >
              <span>Download Resume</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid xl:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-gray-900 font-semibold">Name</label>
                  <input
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-gray-900 font-semibold">Email</label>
                  <input
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-gray-900 font-semibold">Message</label>
                  <textarea
                    className="w-full h-32 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 resize-none focus:outline-none focus:border-[#635bff] focus:ring-4 focus:ring-[#635bff]/10 transition-all duration-300"
                    placeholder="Tell me about your project or how I can help..."
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#635bff]/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and design. Feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/DevzekiFaith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#635bff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaGithub className="w-6 h-6" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#635bff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaLinkedin className="w-6 h-6" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#635bff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaTwitter className="w-6 h-6" />
                    <span className="font-medium">Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#635bff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaInstagram className="w-6 h-6" />
                    <span className="font-medium">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-[#635bff]/10 to-[#a084ee]/10 rounded-2xl p-6 border border-[#635bff]/20">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Facts</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#635bff] rounded-full"></div>
                    <span>Based in Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#635bff] rounded-full"></div>
                    <span>Available for freelance work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#635bff] rounded-full"></div>
                    <span>Open to remote opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Ezekiel Oghojafor Ubor. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
