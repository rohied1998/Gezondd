import React from "react";

export class Nav extends React.Component {
    render() {
        return (
            <nav className="fixed">
                <ul className="grid grid-cols-8 my-8 mx-10  text-xl ">
                    <li className="justify-self-center">
                        <a href="#responsive-header" className="">
                            <img src="gezondd-footer.png" alt="Navigatie Gezondd Logo" />
                        </a>
                    </li>
                    <li className="mt-3 text-center ml-4">
                        <a href="#responsive-header" className="text-green-pastel hover:text-white ">
                            Over Gezondd
                        </a>
                    </li>
                    <li className="mt-3 text-left ml-8">
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Werkgever
                        </a>
                    </li>
                    <li className="mt-3 text-center">
                        <a href="#responsive-header" className="text-green-pastel hover:text-white tracking-tight">
                            Zelfstandige/Ondernemer
                        </a>
                    </li>
                    <li className="mt-3 text-center ml-8">
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Casemanager
                        </a>
                    </li>
                    <li className="mt-3 text-center ml-8">
                        <a href="#responsive-header" className="text-green-pastel hover:text-white tracking-tighter">
                            Bedrijfsarts/Arboprofessionals
                        </a>
                    </li>
                    <li className="mt-3 text-center ml-32">
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            IKA Ned
                        </a>
                    </li>
                    <li className="mt-3 text-center ml-4">
                        <a href="#responsive-header" className="text-green-pastel hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
