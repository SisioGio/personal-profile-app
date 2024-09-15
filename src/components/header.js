import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext,useState,useEffect } from "react";
import { UserContext } from "./userContext";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { user, logoutUser } = useContext(UserContext);
  const clickLogOut = () => {
    logoutUser();
    window.location.reload();
  };
  const navigation = [
    {
      name: "Home",
      href: "#",
      target: "/home#home",
      current: true,
      visible: true,
      onClick: null,
    },

   
    
    {
      name: "Expertise",
      target: "/home#expertise",
      href: "#contact",
      current: false,
      visible: true
    },
    {
      name: "Familiarities",
      target: "/home#familiarities",
      href: "#familiarties",
      current: false,
      visible: true
    },
    {
      name: "Projects",
      target: "/home#projects",
      current: false,
      visible: true
    },
    {
      name: "Playground",
      target: "/home#playground",
      current: false,
      visible: true
    },
    {
      name: "About Me",
      target: "/home#about",
      href: "home#about",
      current: false,
      visible: true,
      onClick: null,
    },
    {
      name: "CV",
      target: "/home#CV",
      href:"home#CV",
      current: false,
      visible: true
    },
    {
      name: "Contact",
      target: "/home#contact",
      current: false,
      visible: true
    }
  ];
  const [navbarColor, setNavbarColor] = useState(false);
  // Function to handle scroll and change the navbar color
  const changeNavbarColor = () => {
    const homeSection = document.getElementById("home");
    const homeSectionPosition = homeSection.getBoundingClientRect();
    if (homeSectionPosition.bottom <=100) {
      // If the scroll is greater than the home section height, change the navbar color
      setNavbarColor(true);
     
    } else {
     
      setNavbarColor(false);
    }

    

  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);


  return (
    <Disclosure as="nav" className={` fixed w-full z-40 ${navbarColor && "bg-blue-700"} h-24 `}>
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8  flex-grow ">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-around">
            <div className="flex flex-shrink-0 items-center text-white text-3xl">
             Alessio Giovannini
            </div>

            <div className="hidden  lg:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.visible ? (
                    <Link
                      key={item.name}
                      onClick={item.onClick}
                      href={item.target}
                      to={item.target}
                      aria-current={item.current ? "page" : undefined}
                      className={` text-white  font-light  rounded-md px-3 py-2 text-sm md:text-sm lg:text-xl  hover:text-gray-300`}
                      >
                      {item.name}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden bg-blue-700 rounded-xl">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (

            
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.target}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? " text-white"
                  : "text-gray-300 ",
                "block rounded-md px-3 py-2 text-base font-medium text-center"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
