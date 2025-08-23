import React from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white mt-20 justify-end">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Nusrath Zaman. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nusrath-z"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="Open GitHub profile"
          >
            <IconBrandGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nusrathzaman14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Open LinkedIn profile"
          >
            <IconBrandLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;