import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { products } from "../../data/products.js";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSelect = (item) => {
  setQuery("");
  setResults([]);
  navigate(`/products?category=${item.category}`); // later we can navigate to product detail
};
  const handleSearch = (e) =>{
    const value= e.target.value;
    setQuery(value);
    if(value.trim()==""){
      setResults([]);
      return;
    }

    const filtered =products.filter((product)=>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0,6));
  }  
  return (
    <div className="bg-white text-[#7C0A02] py-2">
      <div className="w-full flex items-center px-4 gap-4">
        {/* Search box */}
        <div
          onClick={()=>inputRef.current?.focus()}
          className="w-full flex items-center px-3 py-2 cursor-text bg-white relative "
        >
          <CiSearch className="h-7 w-7 hover:text-[#FA8072]" />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search"
            className="font-montserrat w-full bg-transparent outline-none px-5 text-sm md:text-base"
          />
          {results.length>0 && (
            <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded-md shadow-lg z-50">
              {results.map((item)=> (
                <div key={item.id} onClick={() => handleSelect(item)} 
                className="px-4 py-2 hover:bg-[#FAF1EE] cursor-pointer text-sm">
                  {item.name}
                  </div>
              ))}
            </div>
          )}
        </div>

        {/* Social icons (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <a href="https://www.instagram.com/airwill.in/?hl=en" target="_blank"
            rel="noopener noreferrer" className="hover:text-[#FA8072]">
            <FaInstagram className="h-7 w-7" />
          </a>
          <a href="https://x.com/airwill_exports" target="_blank"
            rel="noopener noreferrer" className="hover:text-[#FA8072]">
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
