import React from "react";
import Link from "next/link";

export class Nav extends React.Component {
    render() {
        return (
            <nav className="fixed bg-white w-screen">
                <ul className="flex flex-row my-8 mx-10 gap-20 text-base ">
                    <li className="justify-self-center">
                        <Link href="/">
                            <a href="#homepage" className="">
                                <img
                                    src="gezondd-footer.png"
                                    className="h-8"
                                    alt="Navigatie Gezondd Logo"
                                />
                            </a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center  ml-8">
                        <Link href="/over">
                            <a className="text-black">Over Gezondd</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-left mr-4">
                        <Link href="/werkgever">
                            <a className="text-black hover:text-white">Werkgever</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-left ml-6">
                        <Link href="/werknemer">
                            <a className="text-black hover:text-white">Werknemer</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center mr-12">
                        <Link href="/zelfstandige-ondernemer">
                            <a className="text-black hover:text-white tracking-tight">
                                Zelfstandige/Ondernemer
                            </a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center justify-self-center mr-6">
                        <Link href="/casemanager">
                            <a className="text-black hover:text-white">Casemanager</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center justify-self-center ">
                        <Link href="/bedrijfsarts-arboprofessionals">
                            <a className="text-black hover:text-white tracking-tighter">
                                Bedrijfsarts/Arboprofessionals
                            </a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center justify-self-center mr-2">
                        <Link href="/ika-ned">
                            <a className="text-black hover:text-white">IKA Ned</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center justify-self-start">
                        <Link href="/contact">
                            <a className="text-black hover:text-white">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
