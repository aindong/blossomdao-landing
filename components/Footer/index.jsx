import React, { useState, useEffect } from "react";
import { Logo, SiteTitle, DiscordBtn } from "../../styles/index.tw";

export default function Header() {
  return (
    <footer className="flex space-x-4 flex-grow my-14 mx-auto w-full max-w-6xl">
      <div className="flex flex-col justify-start m-auto flex-1">
        <div className="justify-start px-4 sm:px-6 md:px-8 flex-1">
          <Logo>🌸</Logo>
        </div>
        <div className="px-4 sm:px-6 md:px-8 flex-1 text-lg">BlossomDAO</div>
        <div className="mx-auto mt-6 text-sm text-gray-600 px-4 sm:px-6 md:px-8 flex-1">
          Copyright © 2021 BlossomDAO.eth All rights reserved.
        </div>
      </div>
      <div className="flex flex-col justify-start mx-auto flex-1">
        <div className="px-4 sm:px-6 md:px-8 flex-1 text-lg">Legal</div>
        <a
          href="https://typedream.sfo3.digitaloceanspaces.com/Typedream_Terms_of_Service.pdf"
          target="_blank"
          className="px-4 sm:px-6 md:px-8 flex-1 text-gray-600"
        >
          Terms of Service
        </a>
        <a
          href="https://typedream.sfo3.digitaloceanspaces.com/Typedream_Privacy_Policy.pdf"
          target="_blank"
          className="px-4 sm:px-6 md:px-8 flex-1 text-gray-600"
        >
          Privacy Policy
        </a>
      </div>
      <div className="flex flex-col justify-start items-start mx-auto flex-1">
        <div className="px-2 flex-1 text-lg">Company</div>
        <a href="#" className="my-2" rel="noreferrer">
          <DiscordBtn>Twitter</DiscordBtn>
        </a>
        <a href="https://ethmail.cc/" className="my-2" rel="noreferrer" target="_blank">
          <DiscordBtn>Ethmail</DiscordBtn>
        </a>
      </div>
    </footer>
  );
}
