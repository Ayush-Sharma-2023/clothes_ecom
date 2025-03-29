import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="text-white text-xl font-bold">
          <Link href="/">CoolZWear</Link>
        </h1>

        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/categories">Categories</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link href="/TnC">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}