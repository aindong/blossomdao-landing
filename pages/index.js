import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Title, DiscordBtn, PinkText, PinkCard, Button, Logo } from "../styles/index.tw";

import pika from "../assets/pikadao.gif";

const code = `BlossomDAO = {
  "About": {
      "domain": ".eth",
      "membership": "NFT",
      "desc": "Developers building out the Metaverse"
  }
};`;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Blossom DAO</title>
        <meta name="description" content="Blossom DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow pt-36 sm:pt-60" id="home">
        <div className="flex justify-between items-center max-w-7xl m-auto flex-col sm:flex-row px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex-1">
            <h1 className="text-5xl font-bold">Welcome to</h1>
            <Title className="text-5xl">BlossomDAO</Title>
            <p className="my-10 text-gray-600 text-lg font-light">
              Where blockchain and Web3 developers from all levels of expertise learn, build and ship together under one
              DAO!
            </p>
            <div className="w-40">
              <a href="https://discord.gg/9aTgw2hy6K" rel="noreferrer" target="_blank">
                <DiscordBtn className="font-semibold">Join the DAO →</DiscordBtn>
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 md:px-8 sm:pt-6 md:pt-8 flex-1">
            <Image src={pika} alt="" />
          </div>
        </div>

        <div
          id="about"
          className="sm:flex flex-col justify-center items-center max-w-2xl w-full m-auto py-16 sm:py-36 px-6 inline-block"
        >
          <h1 className="text-5xl font-bold text-center">
            About <PinkText>Us</PinkText>
          </h1>
          <div className="text-center font-light leading-relaxed">
            <p className="mb-2 text-lg mt-5">
              Building out the <PinkText className="text-xl">Metaverse</PinkText> while also having fun!
            </p>
            <p className="text-gray-600">
              We are a group of developers from across the Metaverse that come up with innovative ideas for the
              blockchain and Web3 space. We form dynamic teams that then build out these products and deploy them under
              the domain &quot;BlossomDAO&quot;.
            </p>

            <p className="text-gray-600 mt-4">
              We love to learn, build and ship products together. Anyone is free to join.
            </p>

            <div className="shadow-xl rounded-lg p-10 mt-10">
              <pre className="text-left overflow-auto">
                <code
                  dangerouslySetInnerHTML={{
                    __html: code
                  }}
                ></code>
              </pre>
            </div>
          </div>
        </div>

        <div id="community" className="flex flex-col justify-center items-center max-w-2xl m-auto sm:py-36">
          <div>
            <h1 className="text-5xl font-bold">
              Comm<PinkText>unity</PinkText>
            </h1>
          </div>
          <div className="text-center mt-10 px-10 sm:px-0 text-lg leading-relaxed">
            <p className="text-gray-600">
              We mainly hang out on Discord, but we have a bunch of other resources over there for you to enjoy as well!
            </p>

            <p className="text-gray-600 mt-4">
              This is where our teams meet, our community chats and our ideas are born!
            </p>

            <div className="w-40 m-auto mt-10">
              <a href="https://discord.gg/9aTgw2hy6K" rel="noreferrer" target="_blank">
                <DiscordBtn>Discord</DiscordBtn>
              </a>
            </div>

            <div className="mt-20 justify-center align-center flex">
              <iframe
                src="https://discord.com/widget?id=893023756849672223&theme=dark"
                width="500"
                height="500"
                allowtransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="flex flex-col justify-center items-center max-w-3xl m-auto my-12 sm:my-36 sm:px-0 px-8"
        >
          <div>
            <h1 className="text-5xl font-bold">
              <PinkText>Contact</PinkText> Us
            </h1>
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600">
              If you need to send us an important email, or just want to chat to us, we got you!
            </p>

            <p className="text-gray-600 mt-4">We are currently using a mailing service called ETHmail, cool right !</p>

            <PinkCard className="mt-10 sm:mt-20 rounded-lg px-8 py-8 text-left sm:px-20 sm:py-10">
              <h2 className="text-lg sm:text-xl leading-none font-bold">
                For any business enquiries or client work, we will respond as soon as we can!
              </h2>
              <p className="mt-4 mb-10">Excited to meet you :)</p>
              <a href="https://ethmail.cc/" rel="noreferrer" target="_blank">
                <Button className="w-28">Ethmail →</Button>
              </a>
            </PinkCard>
          </div>
        </div>

        <hr />
      </main>
      <Footer />
    </div>
  );
}
