import React from "react";
import Fade from "react-reveal/Fade";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>

            {/* <Nav className="fixed block w-screen z-10 bg-white text-black" /> */}
            <section className="flex flex-col tracking-widest w-screen h-full">
                <div className="flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2 mt-32 lg:mb-36 gap-8 w-screen">
                    <Fade>
                        <div className="lg:ml-64 lg:mt-36 ">
                            <p className="text-3xl">Contact gegevens</p>
                            <p className="mt-6 text-lg">Gezondd BV</p>
                            <p className="text-lg">Koninginnegracht 19</p>
                            <p className="text-lg">2514 AB ’s-Gravenhage</p>
                            <p className="text-lg mb-6">Tel: 085 015 0020</p>
                        </div>
                        <div className="lg:justify-self-center">
                            <iframe
                                className="h-72 lg:h-3/5 w-full lg:w-72"
                                width="800"
                                height="650"
                                loading="lazy"
                                src="https://www.google.com/maps/embed/v1/search?q=Koninginnegracht%2019%2C%20Den%20Haag%2C%20Nederland&key=AIzaSyDaM3DN_oRGrTHmGYY48JsJ2mU-EhvgYI8"
                            ></iframe>
                        </div>
                    </Fade>
                </div>
            </section>
            <section className="lg:grid flex lg:flex-row flex-col lg:mt-0 tracking-widest bg-gray-light">
                <Fade>
                    <div className="lg:ml-64 mt-20 tracking-widest leading-relaxed">
                        <p className="text-xl lg:text-3xl my-4 text-center lg:text-left lg:my-14">Neem contact met ons op</p>
                    </div>
                    <form className="lg:ml-64" action="#" method="POST">
                        <div className="py-5 text-center lg:text-left">
                            <div className="flex lg:flex-row flex-col gap-6 mt-12 text-gray-300">
                                <div className="text-left col-span-1 w-4/5 mx-8 lg:mx-0 lg:w-2/5 appearance-none label-floating mb-6">
                                    <label className="text-black text-left">
                                        Volledige naam
                                    </label>
                                    <input
                                        className="mt-4 tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="name"
                                        type="text"
                                        placeholder="Vul hier je volledige naam in"
                                        required
                                    ></input>
                                </div>
                                <div className="text-left col-span-1 w-4/5 mx-8 lg:mx-0 lg:w-2/5 appearance-none label-floating">
                                <label className="text-black text-left">
                                       Email adress
                                    </label>
                                    <input
                                        className="mt-4 tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="name"
                                        type="email"
                                        placeholder="Vul hier je email addres in"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="flex lg:flex-wrap flex-col mt-12 lg:mt-0">
                                <div className="text-left w-4/5 mx-8 lg:mx-0 appearance-none label-floating">
                                <label className="text-black text-left">
                                       Uw bericht
                                    </label>
                                    <textarea
                                        className="autoexpand tracking-wide py-2 px-4 mb-3 mt-6 lg:mt-0 leading-relaxed appearance-none block w-full lg:w-3/5 border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="message"
                                        type="text"
                                        placeholder=" Vul hier uw bericht in..."
                                    ></textarea>
                                </div>
                            </div>
                            <Button
                                label="Verzenden"
                                className="bg-blue-aqua h-14 w-52 my-6 rounded-full text-white drop-shadow-lg  tracking-widest"
                            />
                        </div>
                    </form>
                </Fade>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
