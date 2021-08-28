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

            <Nav className="fixed block w-screen z-10 bg-white text-black" />
            <section className="flex flex-col tracking-widest">
                <div className="grid grid-cols-2 mt-32 mb-36 gap-8">
                    <Fade>
                        <div className="ml-64 mt-36">
                            <p className="text-3xl">Contact gegevens</p>
                            <p className="mt-12 text-lg">Gezondd BV</p>
                            <p className="text-lg">Koninginnegracht 19</p>
                            <p className="text-lg">2514 AB ’s-Gravenhage</p>
                            <p className="text-lg mb-6">Tel: 085 015 0020</p>
                        </div>
                        <div className="justify-self-end">
                            <iframe
                                width="800"
                                height="650"
                                loading="lazy"
                                src="https://www.google.com/maps/embed/v1/search?q=Koninginnegracht%2019%2C%20Den%20Haag%2C%20Nederland&key=AIzaSyDaM3DN_oRGrTHmGYY48JsJ2mU-EhvgYI8"
                            ></iframe>
                        </div>
                    </Fade>
                </div>
            </section>
            <section className="grid tracking-widest bg-gray-light">
                <Fade>
                    <div className="ml-64 tracking-widest leading-relaxed">
                        <p className="text-3xl my-14">Neem contact met ons op</p>
                    </div>
                    <form className="ml-64" action="#" method="POST">
                        <div className="py-5">
                            <div className="flex flex-row gap-6 text-gray-300">
                                <div className="col-span-1 w-2/5 appearance-none label-floating mb-6">
                                    <input
                                        className="tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="name"
                                        type="text"
                                        placeholder="Vul hier je volledige naam in"
                                        required
                                    ></input>
                                    <label
                                        htmlFor="name"
                                        className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                                    >
                                        Your name
                                    </label>
                                </div>
                                <div className="col-span-1 w-2/5 appearance-none label-floating">
                                    <input
                                        className="tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="name"
                                        type="email"
                                        placeholder="Vul hier je email addres in"
                                        required
                                    ></input>
                                    <label
                                        htmlFor="name"
                                        className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                                    >
                                        Your name
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full appearance-none label-floating">
                                    <textarea
                                        className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-3/5 border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="message"
                                        type="text"
                                        placeholder=" Vul hier uw bericht in..."
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                                    >
                                        Vul hier uw bericht in...
                                    </label>
                                </div>
                            </div>
                            <Button
                                label="Verzenden"
                                className="bg-blue-aqua h-14 w-52 my-12 rounded-full text-white drop-shadow-lg tracking-widest"
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
