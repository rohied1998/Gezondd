import React from "react";
import Link from "next/link";
// import { Transition } from "@headlessui/react";

export class Nav extends React.Component {
    render() {
        return (
            <nav className={this.props.className}>
                <div className="my-4 mx-auto px-2 sm:px-6 lg:px-8 ">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="./gezondd.png"
                                        alt="Gezondd"
                                    ></img>
                                </Link>
                                <Link href="/">
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="./gezondd.png"
                                        alt="Gezondd"
                                    ></img>
                                </Link>
                            </div>
                            <div className="hidden sm:block sm:ml-6 ">
                                <div className="flex space-x-12 mt-2">
                                    <Link href="/over">
                                        <a href="#" className="px-6 py-2 rounded-md text-lg">
                                            Over Gezondd
                                        </a>
                                    </Link>
                                    <Link href="/werkgever">
                                        <a href="#" className="px-3 py-2 rounded-md text-lg">
                                            Werkgever
                                        </a>
                                    </Link>
                                    <Link href="/werknemer">
                                        <a href="#" className="px-3 py-2 rounded-md text-lg">
                                            Werknemer
                                        </a>
                                    </Link>

                                    <Link href="/zelfstandige-ondernemer">
                                        <a href="#" className="px-3 py-2 rounded-md text-lg">
                                            Zelfstandige/Ondernemer
                                        </a>
                                    </Link>

                                    <Link href="/casemanager">
                                        <a href="#" className="px-3 py-2 rounded-md text-lg">
                                            Casemanager
                                        </a>
                                    </Link>

                                    <Link href="/bedrijfsarts-arboprofessionals">
                                        <a href="#" className="px-3 py-2 rounded-md text-lg">
                                            Bedrijfsarts/Arboprofessionals
                                        </a>
                                    </Link>

                                    <Link href="/ika-ned">
                                        <a href="#" className="px-3 py-2 rounded-md text-lg">
                                            IKA Ned
                                        </a>
                                    </Link>

                                    <Link href="/contact">
                                        <a href="#" className="px-3 py-2 rounded-md text-lg">
                                            Contact
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#"
                                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                                aria-current="page"
                            >
                                Over Gezondd
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Werkgever
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Werknemer
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Zelfstandige/Ondernemer
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Casemanager
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Bedrijfsarts/Arboprofessionals
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                IKA Ned
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
