import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto max-w-[1252px]">
      <nav className="mx-auto flex justify-between text-xs font-medium items-center p-3 sticky top-0">
        <div>
          <span>
            <img className="h-7 inline" src="/notion.png" alt="Logo"></img>
          </span>
        </div>
        <ul className="md:flex md:items-center gap-3 ml-30">
          <li>
            <Link className="md:hover:bg-gray-200 p-2 rounded-md" href="#">
              Notion
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-200 p-2 rounded-md" href="#">
              Mail
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-200 p-2 rounded-md" href="#">
              Calendar
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-200 p-2 rounded-md" href="#">
              AI
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-200 p-2 rounded-md" href="#">
              Enterprise
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-200 p-2 rounded-md" href="#">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-200 p-2 rounded-md" href="#">
              Explore
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-200 p-2 rounded-md" href="#">
              Request a Demo
            </Link>
          </li>
        </ul>
        <div className="ml-10 mr-3">
          <Link
            href="/finance"
            className="text-gray-700 mr-5 hover:bg-gray-200 p-2 rounded-md"
          >
            Log In
          </Link>
          <a
            href="#"
            className="button rounded-md text-white text-xs bg-black p-2 hover"
          >
            Get Notion free
          </a>
        </div>
      </nav>
    </header>
  );
}
