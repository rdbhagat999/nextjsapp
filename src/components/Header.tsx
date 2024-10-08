"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "ParallelRoutes", href: "/parallel-routes" },
  { name: "Docs", href: "/docs" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Demo
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                console.log(
                  "pathname, link.href, isActive",
                  pathname,
                  link.href,
                  isActive
                );

                return (
                  <li key={link.name}>
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`${
                        isActive
                          ? "font-bold block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                          : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                      }`}
                      aria-current="page"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
