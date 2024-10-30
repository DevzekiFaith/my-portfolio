import React from 'react';
import LinkdlnImage from "/linkedin.svg";
import GitHubImage from "/github.svg";
import Image001 from "/twitter-x.svg";
import Image002 from "/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Contact Me</h2>
            <p className="text-gray-400">Email: zekipossible@gmail.com</p>
            <p className="text-gray-400">Phone: +234-7014441418</p>
          </div>
          <div className="flex gap-4 mb-4 md:mb-0">
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
        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ezekiel Oghojafor Ubor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
