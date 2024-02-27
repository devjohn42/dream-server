import React from 'react';
import Logo from '../Logo';
import { SiDiscord } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const hadleToggleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <header className="bg-jet w-full fixed top-0 py-5 z-50">
      <div className="w-full flex items-center justify-around md:justify-evenly">
        <Logo />
        <div onClick={hadleToggleNav}>
          <SiDiscord
            className={
              (openNav ? 'text-alice' : 'text-neon') +
              ' font-black md:hidden text-[1.75rem] sm:text-[2.75rem]'
            }
          />
        </div>
        <nav className="hidden md:flex gap-x-4">
          <NavLink to="/about" href="#" className="nav-link-effect">
            About
          </NavLink>
          <NavLink to="/services" href="#" className="nav-link-effect">
            Services
          </NavLink>
          <NavLink to="/pricing" href="#" className="nav-link-effect">
            Pricing
          </NavLink>
          <NavLink to="/contact" href="#" className="nav-link-effect">
            Contact
          </NavLink>
        </nav>
      </div>
      <div
        className={`w-full flex justify-center md:hidden ${
          openNav
            ? 'h-auto my-12 transition-all ease-in-out duration-700'
            : 'h-0 my-0 ease-in-out duration-700'
        }`}
      >
        <nav
          className={`flex flex-col gap-y-5 items-center ${
            openNav
              ? 'h-auto opacity-100 ease-in-out duration-1000'
              : 'flex flex-col gap-y-5 items-center h-0 opacity-0'
          }`}
        >
          <NavLink
            to="/about"
            href="#"
            className="text-[18px]"
            onClick={hadleToggleNav}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            href="#"
            className="text-[18px]"
            onClick={hadleToggleNav}
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing"
            href="#"
            className="text-[18px]"
            onClick={hadleToggleNav}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/contact"
            href="#"
            className="text-[18px]"
            onClick={hadleToggleNav}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
