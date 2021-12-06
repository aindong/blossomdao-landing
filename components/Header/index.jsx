import React, { useState, useEffect } from "react";
import { Logo, SiteTitle, DiscordBtn } from "../../styles/index.tw";
import { Transition } from "@headlessui/react";

export default function Header() {
  const [top, setTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white ${
        !top && "blur shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 mr-4">
            <a to="/" className="block" aria-label="BlossomDAO">
              <Logo>🌸</Logo> <SiteTitle>BlossomDAO</SiteTitle>
            </a>
          </div>
          <div className="-mr-2 hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className=" text-black-300 hover:text-black-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>

              <a href="#about" className="text-black-300 hover:text-black-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>

              <a
                href="#community"
                className="text-black-300 hover:text-black-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Community
              </a>

              <a
                href="#contact"
                className="text-black-300 hover:text-black-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>

              <a
                href="https://discord.gg/9aTgw2hy6K"
                className="navbar-button-endmenu-0"
                rel="noreferrer"
                target="_blank"
              >
                <DiscordBtn>Discord</DiscordBtn>
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-black hover:bg-white-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="text-black-300 hover:text-black-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-black-300 hover:text-black-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>

              <a
                href="#community"
                className="text-black-300 hover:text-black-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Community
              </a>

              <a
                href="#contact"
                className="text-black-300 hover:text-black-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>

              <a
                href="https://discord.gg/9aTgw2hy6K"
                rel="noreferrer"
                target="_blank"
                className="text-gray-300 hover:text-white block rounded-md text-base font-medium w-24"
              >
                <DiscordBtn>Discord</DiscordBtn>
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
