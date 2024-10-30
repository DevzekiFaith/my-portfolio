import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LinkdlnImage from "/linkedin.svg";
import GitHubImage from "/github.svg";
import Image001 from "/twitter-x.svg";
import Image002 from "/instagram.svg";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitSuccess(true);

    // Display success message and navigate to home after a short delay
    setTimeout(() => {
      navigate('/'); // Navigate to the home page after submission
    }, 4000); // Adjust the delay as needed (2000ms = 2 seconds)
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-white mb-6">Let's Connect</h1>
      <p className="text-gray-300 mb-4">
        Say hello at{" "}
        <span className="underline cursor-pointer text-yellow-500">
          zekipossible@gmail.com
        </span>
      </p>
      <p className="text-gray-300 mb-6">
        For more info, here is my{" "}
        <span className="underline cursor-pointer text-yellow-500">Resume</span>
      </p>

      {submitSuccess ? (
        <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
          Thank you for your message! You will be redirected shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-xs italic">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
              id="message"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <span className="text-red-500 text-xs italic">{errors.message.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration- w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}

      {/* Social Media Links */}
      <div className="flex gap-4 mt-6">
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8" src={GitHubImage} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8" src={LinkdlnImage} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8" src={Image001} alt="Twitter" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8" src={Image002} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
