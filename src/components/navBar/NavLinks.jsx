import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const [navVisible, setNavVisible] = useState(false);
  return (
    <nav className=" flex-1 flex items-center justify-center">
      <FaBars
        className="text-xl hover:text-green-500 duration-200 cursor-pointer sm:hidden"
        onClick={() => setNavVisible(!navVisible)}
      />
      <ul
        className={`h-full flex items-center justify-center gap-20 max-lg:gap-10 max-md:gap-6  ${
          navVisible ? "max-sm:visible" : "max-sm:hidden"
        } max-sm:absolute  max-sm:top-full max-sm:left-0 max-sm:w-full max-sm:h-64 max-sm:px-6 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:bg-neutral-50`}
      >
        <li className="w-full">
          <NavLink
            end
            to="/"
            className={`block w-full hover:text-green-500`}
            onClick={() => setNavVisible(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={` block w-full hover:text-green-500`}
            onClick={() => setNavVisible(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={` block w-full hover:text-green-500`}
            onClick={() => setNavVisible(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={` block w-full hover:text-green-500`}
            onClick={() => setNavVisible(false)}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={` block w-full hover:text-green-500 text-nowrap`}
            onClick={() => setNavVisible(false)}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
