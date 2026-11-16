import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./userContext";

export default function Navbar() {
  const { user, logoutUser } = useContext(UserContext);

  const clickLogOut = () => {
    logoutUser();
    window.location.reload();
  };

  const navigation = [
    { name: "Experience", target: "#CV" },
    { name: "Projects", target: "#projects" },
    { name: "Skills", target: "#familiarities" },
    { name: "About", target: "#about" },
    { name: "Contact", target: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "border-b border-line bg-paper/95 backdrop-blur" : "bg-paper"
      }`}
    >
      {({ open }) => (
        <>
          <div className="wrap flex h-16 items-center justify-between">
            <a href="#home" className="font-display text-2xl leading-none">
              Alessio Giovannini
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.target}
                  className="link-draw inline-flex min-h-[44px] items-center text-sm font-medium text-ink"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <DisclosureButton
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </DisclosureButton>
          </div>

          <DisclosurePanel className="h-[calc(100vh-4rem)] border-t border-line bg-paper lg:hidden">
            <div className="wrap flex flex-col pt-6">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.target}
                  className="border-b border-line py-5 font-display text-4xl"
                >
                  {item.name}
                </DisclosureButton>
              ))}
              {user && (
                <button
                  onClick={clickLogOut}
                  className="mt-8 min-h-[44px] text-left font-medium text-accent"
                >
                  Log out
                </button>
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
