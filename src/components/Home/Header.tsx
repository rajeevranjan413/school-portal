"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative bg-white bg-[url('/assets/bg-lines.png')] bg-no-repeat bg-right-top shadow-md">
            <div className="flex justify-between items-center px-6 py-4 lg:px-12">
                {/* Left Logo */}
                <a href="#">
                    <Image width={250} height={100} src="/assets/goverment_logo.png" alt="Government Logo" className="w-40 sm:w-64" />
                </a>

                {/* Title */}
                <div className="text-center flex-1 hidden md:block">
                    <h1 className="text-lg sm:text-2xl font-semibold text-blue-950">Bhabha Atomic Research Centre</h1>
                    <p className="text-xs sm:text-sm text-gray-700">Advertisement No. 03/2023/BARC</p>
                </div>

                {/* Right Logo */}
                <Image width={70} height={70} src="/assets/barc_logo.png" alt="BARC Logo" className="w-12 sm:w-16" />

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-blue-900 text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <Navbar isOpen={isOpen} />
        </header>
    );
};

const Navbar = ({ isOpen }: { isOpen: boolean }) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`bg-white shadow-md w-full  ${isScrolled ? "fixed -top-10 transition-all duration-500 ease-in-out transform translate-y-10 opacity-100" : "relative"}`}>
            <div className="container mx-auto flex items-center justify-center md:p-4">
                {/* Navigation Links */}
                <div
                    className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-white w-full lg:w-auto top-16 left-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${isOpen ? "block -mt-16" : "hidden"}`}
                >
                    <ul className=" text-[17px] lg:flex space-y-4 lg:space-y-0 lg:space-x-16 p-4 lg:p-0 text-gray-800">
                        <li>
                            <Link href="/" className="hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li className="relative group">
                            <button className="hover:text-blue-600">Advertisement</button>
                            <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 mt-2">
                                <li>
                                    <Link
                                        href="/assets/docs/Advt21_04_2023.pdf"
                                        target="_blank"
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        English
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <button className="hover:text-blue-600">Corrigendum</button>
                            <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 mt-2">
                                <li>
                                    <Link
                                        href="/assets/docs/Corrigendum 3 English.pdf"
                                        target="_blank"
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        English
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/assets/docs/Corrigendum 3 Hindi.pdf"
                                        target="_blank"
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        Hindi
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/how_to_apply" className="hover:text-blue-600">
                                How to Apply
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="hover:text-blue-600">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
