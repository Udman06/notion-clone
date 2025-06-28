import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className="w-full h-px bg-gray-100 my-4 mt-20" />
      <footer className="bg-white text-gray-700 py-12">
        <div className="max-w-[1252px] mx-auto px-6 flex flex-col md:flex-row md:justify-evenly space-y-8 md:space-y-0 mb-20">
          <div className="flex flex-col">
            <div className="relative w-10 h-10 mr-35">
              <Image
                src="/notion.png"
                alt="Logo"
                fill
                className="object-contain"
              />
              <h1 className="text-2xl font-bold text-black mt-1 ml-11">
                Notion
              </h1>
            </div>
            <div className="flex flex-row space-x-3 mt-5 ml-0 mb-10">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  className="w-5 h-5 hover:opacity-75 transition-opacity"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/facebook.avif"
                  alt="Facebook"
                  className="w-5 h-5 hover:opacity-75 transition-opacity"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.webp"
                  alt="LinkedIn"
                  className="w-5 h-5 hover:opacity-75 transition-opacity"
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid md:grid-cols-4 md:gap-10 gap-11 md:p-6">
            {[
              {
                title: "Company",
                items: [
                  "About Us",
                  "Careers",
                  "Security",
                  "Status",
                  "Terms & Privacy",
                  "Your privacy rights",
                ],
              },
              {
                title: "Download",
                items: [
                  "ios & Android",
                  "Mac & Windows",
                  "Calendar",
                  "Web Clipper",
                ],
              },
              {
                title: "Resources",
                items: [
                  "Help Center",
                  "Pricing",
                  "Blog",
                  "Community",
                  "Integration",
                  "Templates",
                  "Affiliates",
                ],
              },
              {
                title: "Notion for",
                items: ["Enterprice", "Small Bussiness", "Personal"],
              },
            ].map((col) => (
              <div key={col.title} className="mt-6 sm:mt-0 md:mx-6">
                <h4 className="font-semibold mb-1">{col.title}</h4>
                <ul className="space-y-1 text-sm">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-gray-900 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
