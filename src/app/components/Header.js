import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="mx-auto flex justify-evenly gap-10 text-sm font-light ">
        <Image
          src="/notion.png"
          alt="Notion Logo"
          width={20}
          height={20}
        ></Image>
        <div className="flex gap-10 justify-evenly items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-500 flex justify-evenly"
          >
            Notion
          </Link>
          <Link
            href="/healthcare"
            className="text-gray-700 hover:text-blue-500"
          >
            Mail
          </Link>
          <Link href="/finance" className="text-gray-700 hover:text-blue-500">
            Calendar
          </Link>
          <Link href="/finance" className="text-gray-700 hover:text-blue-500">
            AI
          </Link>
          <Link href="/finance" className="text-gray-700 hover:text-blue-500">
            Enterprise
          </Link>
          <Link href="/finance" className="text-gray-700 hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/finance" className="text-gray-700 hover:text-blue-500">
            Explore
          </Link>
          <Link href="/finance" className="text-gray-700 hover:text-blue-500">
            Request a Demo
          </Link>
        </div>
        <div>
          <Link
            href="/finance"
            className="text-gray-700 hover:text-blue-500 mr-5"
          >
            Log In
          </Link>
          <a href="#" className="button rounded-md text-white bg-blue-500 p-1">
            Get Notion free
          </a>
        </div>
      </div>
    </header>
  );
}
