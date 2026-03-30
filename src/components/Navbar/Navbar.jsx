import React from "react";
import shopping from "../../assets/shopping.jpg";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom"; //  IMPORTANT

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/top-rated" }, //  FIXED
  { id: 3, name: "Kids Wear", link: "/kids" },
  { id: 4, name: "Mens Wear", link: "/mens" },
  { id: 5, name: "Electronics", link: "/electronics" },
];

const Dropdownlinks = [
  { id: 1, name: "Trending Products", link: "/" },
  { id: 2, name: "Best Selling", link: "/" },
  { id: 3, name: "Top Rated", link: "/top-rated" }, //  FIXED
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      
      {/* upper navbar */}
      <div className="bg-orange-300 py-3">
        <div className="container flex justify-between items-center">

          {/* logo */}
          <Link
            to="/"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
          >
            <img src={shopping} alt="shopping" className="w-10" />
            Shop
          </Link>

          {/* right section */}
          <div className="flex items-center gap-4">

            {/* search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[50px] sm:w-[100px] group-hover:w-[150px]
                transition-all duration-300 rounded-full border border-gray-400
                px-2 py-1 pr-8 focus:outline-none focus:border-2 focus:border-orange-400"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-orange-500" />
            </div>

            {/* cart */}
            <button
              onClick={() => alert("This feature is currently unavailable")}
              className="bg-gradient-to-r from-orange-200 to-orange-400 
              transition-all duration-200 text-white py-1 px-4 rounded-full 
              flex items-center gap-2 group"
            >
              <span className="hidden group-hover:block">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 py-2 hover:text-orange-500 transition"
              >
                {data.name}
              </Link>
            </li>
          ))}

          {/* dropdown */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2">
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </div>

            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {Dropdownlinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-orange-200"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;