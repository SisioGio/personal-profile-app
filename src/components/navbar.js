import React, { useContext,useState,useEffect,useRef } from "react";
import { UserContext } from "./userContext";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar ()  {
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
      target: "/home#cv",
      current: false,
      visible: true
    }
  ];
  const [selected,setSelected] = useState(null)
  const [navbarColor, setNavbarColor] = useState(false);
  const sectionRefs = useRef({});
  const [current, setCurrent] = useState(navigation[0]?.name || "");

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
  

const handleLinkClick = (item)=>{

  setSelected(item.name)
  if (item.onClick){
    item.onClick()
  }
}

     return (

   
 
<header class={`text-white body-font ${navbarColor&& "bg-blue-800"} z-40  h-24 flex justify-center fixed w-full`}>
  <div class="   w-full flex justify-center  self-center h-24 fixed ">

  <div class="container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center   w-full self-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:cursor-pointer ">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span class="ml-3  text-white font-thin text-3xl hover:text-indigo-100">Alessio Giovannini</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center  justify-center hover:cursor-pointer text-blue-200 font-ligh text-xl ">
     
      {navigation.map((item)=>{

        return (
          item.visible && (
<Link to={item.target} href={item.href} onClick={()=>handleLinkClick(item)}  className={`mr-5  hover:text-indigo-300 text-white ${false && "font-semibold text-white"}`}>{item.name}</Link>
          )
          
        )
        // item.visible ?(
        //   <Link
        //   onClick={item.onClick}
        //   href={item.href}
        //   to={item.target}
        //   aria-current={item.current ? "page" : undefined}
        //   className={classNames(
        //     item.current
        //       ? "bg-gray-900 text-white"
        //       : "text-gray-300 hover:bg-gray-700 hover:text-white",
        //     "rounded-md px-3 py-2 text-sm font-medium"
        //   )}
        //   >{item.name}</Link>
        // ): null
      })}
      {/* <a class="mr-5 hover:text-indigo-100  " href='#home'> Home</a>
      <a class="mr-5 hover:text-indigo-100" href='#about'>About</a>
      <a class="mr-5 hover:text-indigo-100" href='#services'>Skills</a>
      <a class="mr-5 hover:text-indigo-100" href='#experience'>CV</a>
      <a class="mr-5 hover:text-indigo-100" href='#projects'>Projects</a>
      <a class="mr-5 hover:text-indigo-100" href='#contact'>Contact</a> */}
    </nav>
    </div>
  </div>
</header>
   )
   
  }


