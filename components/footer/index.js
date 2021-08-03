import React from "react";
import Image from "next/image";

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="min-w-full bg-gray-100 tracking-widest">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="mx-16 ml-14 justify-self-center mt-16">
                            <img src="gezondd-footer.png" alt="Footer Gezondd" />
                            <p className="mt-6 h-40 w-40 text-center ml-24 font-medium tracking-wide">
                                Ambities realiseren door optimaal presteren
                            </p>
                        </div>

                        <div className="m-5 w-full justify-self-center ml-32 mt-20">
                            <div>
                                <p className="uppercase text-gray-800 font-bold text-sm mb-2">
                                    Contact
                                </p>
                            </div>
                            <p>Email: info@gezondd.nl</p>
                            <p>Telefoon: 085 015 0020</p>
                            <p>Adres: Koninginnegracht 19</p>
                            <p>2514 AB s'Gravenhage</p>
                        </div>

                        <div className="p-5 w-48 justify-self-center  mt-16">
                            <p className="uppercase text-gray-800 font-bold text-sm mb-2">
                                Vestigingen
                            </p>
                            <p>Amsterdam</p>
                            <p>Rotterdam</p>
                            <p>Den Haag</p>
                        </div>

                        <div className="p-5 w-48 justify-self-center mt-16">
                            <p className="uppercase text-gray-800 font-bold text-sm mb-2">Links</p>
                            <p>Klachten regeling en Privacy reglement</p>
                            <div className="grid place-content-end w-40 h-4 space-y-4">
                                <img src="linkedin.png" alt="linkedin" />
                                <img src="instagram.png" alt="instagram" />
                                <img src="twitter.png" alt="twitter" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-gray-500 text-center pb-8 tracking-wider">
                            © Gezondd Inc. All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}
