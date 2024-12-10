"use client";
import Logo from "@/../public/Logo_2.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-primary shadow-md max-w-5xl mx-auto sticky top-0 z-10">
      <nav className=" flex items-center justify-between px-5 py-3">
        <Link href="/" className=" cursor-pointer">
          <Image className="contrast-200" src={Logo} alt="Logo" width={55} />
        </Link>
        <div>
          <ul className=" min-[600px]:flex gap-5 hidden font-medium items-center ">
            <Link href="/">Heim</Link>
            <Link href="/contact-us">kontaktiere uns</Link>
            <Link href="/terms-conditions">
              Allgemeine Geschäftsbedingungen
            </Link>
          </ul>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="  min-[600px]:hidden block text-2xl p-2 cursor-pointer"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </div>
        </div>
        {isOpen && (
          <div className="absolute right-0 left-0 top-16 bg-secondary py-8 min-[600px]:hideen block ">
            <ul className="flex gap-2 flex-col font-medium px-7">
              <Link
                href="/"
                onClick={() => setIsOpen((prev) => !prev)}
                className=" hover:bg-primary p-2 rounded transition-all duration-200 ease-linear"
              >
                Heim
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setIsOpen((prev) => !prev)}
                className=" hover:bg-primary p-2 rounded transition-all duration-200 ease-linear"
              >
                kontaktiere uns
              </Link>
              <Link
                href="/terms-conditions"
                onClick={() => setIsOpen((prev) => !prev)}
                className=" hover:bg-primary p-2 rounded transition-all duration-200 ease-linear"
              >
                Allgemeine Geschäftsbedingungen
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
