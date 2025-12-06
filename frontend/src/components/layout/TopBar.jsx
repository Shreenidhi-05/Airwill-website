import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const TopBar = () => {
  const inputRef = useRef(null);

  const handleSearchbar = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="bg-white text-[#7C0A02] py-2">
      <div className="w-full flex items-center px-4 gap-4">
        {/* Search box */}
        <div
          onClick={handleSearchbar}
          className="w-full flex items-center px-3 py-2 cursor-text bg-white rounded-full shadow-sm border border-[#7C0A02]/30"
        >
          <CiSearch className="h-7 w-7 hover:text-[#FA8072]" />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="font-montserrat w-full bg-transparent outline-none px-5 text-sm md:text-base"
          />
        </div>

        {/* Social icons (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <a href="#" className="hover:text-[#FA8072]">
            <FaInstagram className="h-7 w-7" />
          </a>
          <a href="#" className="hover:text-[#FA8072]">
            <FaXTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/airwill/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FA8072]"
          >
            <FaLinkedin className="h-7 w-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
