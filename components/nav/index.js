import React from "react";
import Link from "next/link";

export class Nav extends React.Component {
    render() {
        return (
            <nav className={this.props.className}>
                <ul className="flex flex-row my-8 mx-8 gap-20 text-base">
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
                    <li className="mt-1.5 text-center">
                        <Link href="/over">
                            <a>Over Gezondd</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-left mr-4">
                        <Link href="/werkgever">
                            <a>Werkgever</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-left ml-2">
                        <Link href="/werknemer">
                            <a>Werknemer</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center ml-4">
                        <Link href="/zelfstandige-ondernemer">
                            <a>Zelfstandige/Ondernemer</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center justify-self-center ml-4">
                        <Link href="/casemanager">
                            <a>Casemanager</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center justify-self-center ml-2">
                        <Link href="/bedrijfsarts-arboprofessionals">
                            <a>Bedrijfsarts/Arboprofessionals</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center justify-self-center">
                        <Link href="/ika-ned">
                            <a>IKA Ned</a>
                        </Link>
                    </li>
                    <li className="mt-1.5 text-center justify-self-start">
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
