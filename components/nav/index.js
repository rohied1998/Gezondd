import React from "react";
import s from "./index.module.css";

export class Nav extends React.Component {
    render() {
        return (
            <nav className="fixed">
                <ul className="grid grid-cols-8 gap-8 p-6 text-center text-lg">
                    <li>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
                            <img src="gezondd.svg" alt="Navigatie Gezondd Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Over Gezondd
                        </a>
                    </li>
                    <li>
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Werkgever
                        </a>
                    </li>
                    <li>
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Zelfstandige/Ondernemer
                        </a>
                    </li>
                    <li>
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Casemanager
                        </a>
                    </li>
                    <li>
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Bedrijfsarts/Arboprofessionas
                        </a>
                    </li>
                    <li>
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            IKA Ned
                        </a>
                    </li>
                    <li>
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
