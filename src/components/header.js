import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./userContext";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { user, logoutUser } = useContext(UserContext);

  const clickLogOut = () => {
    logoutUser();
    window.location.reload();
  };

  const navigation = [
    { name: "Home", target: "#home", visible: true },
    { name: "Expertise", target: "#expertise", visible: true },
    { name: "Familiarities", target: "#familiarities", visible: true },
    { name: "Projects", target: "#projects", visible: true },
     { name: "Certifications", target: "#certifications", visible: true },
    
    { name: "About Me", target: "#about", visible: true },
    { name: "CV", target: "#CV", visible: true },
    { name: "Contact", target: "#contact", visible: true },
  ];

  const [navbarSolid, setNavbarSolid] = useState(false);

  // Detect scroll and toggle background
  const handleScroll = () => {
    const home = document.getElementById("home");
    if (!home) return;
    const { bottom } = home.getBoundingClientRect();
    setNavbarSolid(bottom <= 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-50 transition-all duration-500 ${
        navbarSolid
          ? "backdrop-blur-md bg-blue-900/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400">
              <Bars3Icon
                className="block h-6 w-6 group-data-[open]:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6 group-data-[open]:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          {/* Brand */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <Link
              to="#home"
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 font-bold text-2xl md:text-3xl tracking-tight"
            >
              Alessio Giovannini
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:space-x-8">
            {navigation.map(
              (item) =>
                item.visible && (
                  <Link
                    key={item.name}
                    to={item.target}
                    className="text-white text-lg font-light hover:text-indigo-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )
            )}
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <DisclosurePanel className="lg:hidden bg-blue-900/95 backdrop-blur-lg h-screen w-full px-6 pt-10 space-y-4">
        {navigation.map(
          (item) =>
            item.visible && (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.target}
                className="block text-center text-xl text-white font-medium hover:text-indigo-300 transition-colors duration-200"
              >
                {item.name}
              </DisclosureButton>
            )
        )}
        {user && (
          <button
            onClick={clickLogOut}
            className="mt-8 w-full text-center text-indigo-400 hover:text-white font-semibold"
          >
            Log Out
          </button>
        )}
      </DisclosurePanel>
    </Disclosure>
  );
}
