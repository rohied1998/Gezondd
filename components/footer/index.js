import React from "react";
import Image from "next/image";
import s from "./index.module.css";

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="min-w-full bg-gray-100 ">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="h-48 w-48 mx-16 ml-14 justify-self-center">
                            <img src="gezondd.svg" alt="Footer Gezondd" />
                            <p className="mt-4">Ambities realiseren door optimaal presteren</p>
                        </div>

                        <div className="m-5 w-48 justify-self-center">
                            <div className="text-xs uppercase text-gray-500 font-medium">
                                Contact
                            </div>
                            Email: info@gezondd.nl Telefoon: 085 015 0020 Adres: Koninginnegracht 19
                            2514 AB s'Gravenhage
                        </div>

                        <div className="p-5 w-48 justify-self-center">
                            <div className="text-xs uppercase text-gray-500 font-medium">
                                Vestigingen
                            </div>
                            <p>Amsterdam</p>
                            <p>Rotterdam</p>
                            <p>Den Haag</p>
                        </div>

                        <div className="p-5 w-48 justify-self-center">
                           
                            <div className="text-xs uppercase text-gray-500 font-medium">
                            <div className="float-right ml-8">
                                <img src="linkedin.png" alt="linkedin" />
                                <img src="instagram.png" alt="instagram" />
                                <img src="twitter.png" alt="twitter" />
                            </div>
                               Links
                                
                            </div>
                            <p>Klachten regeling en Privacy reglement</p>
                        </div>
                    </div>

                    <div className="text-gray-800 text-center pb-8">
                        © Gezondd Inc. All rights reserved
                    </div>
                </div>
            </footer>
        );
    }
}
