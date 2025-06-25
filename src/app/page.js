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
      <div className="flex flex-col-2 justify-evenly mt-30">
        <div className="max-w-[500px]">
          <h1 className="text-5xl font-bold">
            The AI workspace that works for you.
          </h1>
          <p className="text-lg font-medium mt-4">
            One place where teams find every answer, automate the busywork, and
            get projects done.
          </p>
          <div className=" mt-4 flex gap-2">
            <a
              href="#"
              className=" rounded-xl bg-blue-500 hover:bg-blue-700 p-2.5 text-center text-white"
            >
              Get Notion free
            </a>
            <a
              href="#"
              className="button rounded-xl bg-blue-100 p-3 text-blue-500 "
            >
              Request a Demo
            </a>
          </div>
        </div>
        <div className="Images">
          <Image
            src="/notion.png"
            alt="Notion Logo"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
      <div className="mx-auto mt-20 p-4">
        <h1 className="text-5xl font-bold text-center mb-5">
          One space for every team.
        </h1>
        <div className="flex gap-4 justify-center mb-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-md font-light transition-all
              ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
            className="rounded shadow-md transition-all"
          />
        </div>
      </div>
    </>
  );
}
