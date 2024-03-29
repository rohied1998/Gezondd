import React from "react";
import Fade from "react-reveal/Fade";

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Fade>
                    <div className="w-screen lg:w-full bg-gray-100 lg:tracking-widest">
                        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4">
                            <div className="mx-auto lg:mx-16 justify-self-center lg:ml-14 lg:mt-10">
                                <img
                                    src="gezondd.png"
                                    className="w-2/6 lg:w-3/5 justify-center lg:ml-20 mx-auto mt-12 lg:mt-6 lg:my-auto"
                                    alt="Footer Gezondd"
                                />
                                <p className="mt-6 lg:h-40 lg:w-40 text-center mx-auto text-sm lg:text-lg lg:tracking-wide">
                                    Ambities realiseren door optimaal presteren
                                </p>
                            </div>

                            <div className="ml-5 justify-self-center mt-6 lg:mt-16">
                                <div>
                                    <p className="uppercase text-gray-800 font-bold text-base mb-2">
                                        Contact
                                    </p>
                                </div>
                                <p className="text-sm">Email: info@gezondd.nl</p>
                                <p className="text-sm">Telefoon: 085 015 0020</p>
                                <p className="text-sm">Adres: Koninginnegracht 19</p>
                                <p className="text-sm">2514 AB s&apos;Gravenhage</p>
                            </div>

                            <div className="ml-6 w-48 justify-self-center mt-16">
                                <p className="uppercase text-gray-800 font-bold text-base mb-2">
                                    Vestigingen
                                </p>
                                <a href="../amsterdam-contact.html" className="hover:text-white">
                                    <p className="text-sm">Amsterdam</p>
                                </a>
                                <a href="../contact.html" className="hover:text-white">
                                    <p className="text-sm">Den Haag</p>
                                </a>
                            </div>

                            <div className="ml-6 w-48 justify-self-center mt-16">
                                <p className="uppercase text-gray-800 font-bold text-base mb-2">
                                    Links
                                </p>
                                <p className="text-sm">Klachten regeling en Privacy reglement</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500 text-center pb-8 lg:tracking-wider mt-6">
                                © Gezondd Inc. All rights reserved
                            </p>
                        </div>
                    </div>
                    <div className="fixed z-10 h-26 w-8 bottom-0 right-0 bg-gray-300 bg-opacity-50 rounded">
                        <a href="https://www.linkedin.com/">
                            <img src="linkedin.png" className="" alt="linkedin" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="instagram.png" className="p-1" alt="instagram" />
                        </a>
                        <a href="https://www.twitter.com/">
                            <img src="twitter.png" className="" alt="twitter" />
                        </a>
                    </div>
                </Fade>
            </footer>
        );
    }
}
