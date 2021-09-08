import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Gezondd from "../../public/gezondd-header.png";

export default function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className="fixed z-10 flex items-center w-screen flex-wrap bg-green-pastel p-3 ">
                <Link href="/">
                    <a className="inline-flex items-center p-2 mr-4 ">
                        <img className="h-8 w-auto" src="./gezondd-header.png" alt="Gezondd"></img>
                    </a>
                </Link>
                <button
                    className=" inline-flex p-3 hover:bg-green-600 rounded 2xl:hidden text-white ml-auto hover:text-white outline-none"
                    onClick={handleClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${
                        active ? "" : "hidden"
                    }   w-full 2xl:inline-flex 2xl:flex-grow 2xl:w-auto`}
                >
                    <div className="2xl:inline-flex text-lg 2xl:mx-auto 2xl:flex-row  lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <Link href="/over.html">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-green-600 hover:text-white ">
                                Over Gezondd
                            </a>
                        </Link>
                        <Link href="/werkgever.html">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-green-600 hover:text-white">
                                Werkgever
                            </a>
                        </Link>
                        <Link href="/werknemer.html">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-green-600 hover:text-white">
                                Werknemer
                            </a>
                        </Link>
                        <Link href="/zelfstandige-ondernemer.html">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-green-600 hover:text-white">
                                Zelfstandige/Ondernemer
                            </a>
                        </Link>
                        <Link href="/casemanager.html">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-green-600 hover:text-white">
                                Casemanager
                            </a>
                        </Link>
                        <Link href="/bedrijfsarts-arboprofessionals.html">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-green-600 hover:text-white">
                                Bedrijfsarts/Arboprofessionals
                            </a>
                        </Link>
                        <Link href="/ika-ned.html">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-green-600 hover:text-white">
                                IKA Ned
                            </a>
                        </Link>
                        <Link href="/contact.html">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-green-600 hover:text-white">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
