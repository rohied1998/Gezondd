import React from "react";
import Link from "next/link";

export class Nav extends React.Component {
    render() {
        return (
            <nav className="fixed">
                <ul className="grid grid-cols-8 my-8 mx-10  text-xl ">
                    <li className="justify-self-center">
                        <Link href="/">
                            <a href="#homepage" className="">
                                <img src="gezondd-footer.png" alt="Navigatie Gezondd Logo" />
                            </a>
                        </Link>
                    </li>
                    <li className="mt-3 text-center ml-4">
                        <Link href="/over">
                            <a className="text-green-pastel hover:text-white ">Over Gezondd</a>
                        </Link>
                    </li>
                    <li className="mt-3 text-left ml-8">
                        <Link href="/werkgever">
                            <a className="text-green-pastel hover:text-white">Werkgever</a>
                        </Link>
                    </li>
                    <li className="mt-3 text-center">
                        <Link href="/zelfstandige-ondernemer">
                            <a className="text-green-pastel hover:text-white tracking-tight">
                                Zelfstandige/Ondernemer
                            </a>
                        </Link>
                    </li>
                    <li className="mt-3 text-center ml-16">
                        <Link href="/casemanager">
                            <a className="text-green-pastel hover:text-white">Casemanager</a>
                        </Link>
                    </li>
                    <li className="mt-3 text-center ml-8">
                        <Link href="/bedrijfsarts-arboprofessionals">
                            <a className="text-green-pastel hover:text-white tracking-tighter">
                                Bedrijfsarts/Arboprofessionals
                            </a>
                        </Link>
                    </li>
                    <li className="mt-3 text-center ml-32">
                        <Link href="/ika-ned">
                            <a className="text-green-pastel hover:text-white">IKA Ned</a>
                        </Link>
                    </li>
                    <li className="mt-3 text-center ml-4">
                        <Link href="/contact">
                            <a className="text-green-pastel hover:text-white">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
