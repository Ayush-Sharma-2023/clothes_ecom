import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="text-white text-xl font-bold">
          <Link href="/">CoolZWear</Link>
        </h1>

        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/test">About Us</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/test">Categories</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/test">Contact Us</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/test">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
