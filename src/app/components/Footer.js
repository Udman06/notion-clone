import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 text-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="flex flex-col space-y-4 md:w-1/4">
            <Image src="/notion.png" alt="Logo" width={32} height={32} />
            <p className="text-sm">
              Notion helps teams and individuals organize, plan, and collaborate
              on work.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            {[
              {
                title: "Product",
                items: ["Features", "Integrations", "Templates", "Pricing"],
              },
              { title: "Company", items: ["About", "Team", "Careers", "Blog"] },
              {
                title: "Support",
                items: ["Help Center", "Contact Us", "Status"],
              },
            ].map((col) => (
              <div key={col.title} className="mt-6 sm:mt-0 sm:mx-6">
                <h4 className="font-semibold mb-2">{col.title}</h4>
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

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Your Company — All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
