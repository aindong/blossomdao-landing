import React, { useState, useEffect } from "react";
import { Logo, SiteTitle, DiscordBtn } from "../../styles/index.tw";

export default function Header() {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <a to="/" className="block" aria-label="Cruip">
              <Logo>🌸</Logo> <SiteTitle>BlossomDAO</SiteTitle>
            </a>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Community
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="https://discord.gg/9aTgw2hy6K"
                  className="navbar-button-endmenu-0"
                  rel="noreferrer"
                  target="_blank"
                >
                  <DiscordBtn>Discord</DiscordBtn>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
