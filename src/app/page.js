"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const tabs = [
    { name: "Product", image: "/product.png" },
    { name: "Engineering", image: "/engineering.png" },
    { name: "Design", image: "/design.png" },
    { name: "IT", image: "/it.png" },
    { name: "Marketing", image: "/marketing.png" },
    { name: "Startups", image: "/startups.webp" },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="max-w-[1252px] mx-auto px-4 md:px-16 lg:px-24">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-20 gap-8">
          <div className="max-w-[500px]">
            <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              The AI workspace that works for you.
            </h1>
            <p className="text-sm md:text-lg font-medium mt-3 text-center md:text-left">
              One place where teams find every answer, automate the busywork,
              and get projects done.
            </p>
            <div className=" text-sm items-center mt-4 flex gap-2 justify-center md:justify-start">
              <a
                href="#"
                className=" rounded-xl bg-blue-500 hover:bg-blue-700 p-2.5 text-center text-white"
              >
                Get Notion free
              </a>
              <a
                href="#"
                className="button rounded-xl bg-blue-100 p-3 text-blue-500 hover:bg-blue-300"
              >
                Request a Demo
              </a>
            </div>
          </div>
          <div className="Images">
            <Image
              src="/notion.png"
              alt="Notion Logo"
              width={250}
              height={250}
            ></Image>
          </div>
        </div>
        <div className="mx-auto mt-20">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-5">
            One space for every team.
          </h1>
          <div className="text-xs flex gap-4 justify-center mb-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-2 py-0.5 rounded-full font-light transition-all
              ${
                activeTab === index
                  ? "bg-gray-200 text-black"
                  : "text-gray-500 hover:bg-gray-300"
              }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="flex justify-center mb-10">
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].name}
              width={1000}
              height={800}
              className="w-full h-auto rounded shadow-md object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
