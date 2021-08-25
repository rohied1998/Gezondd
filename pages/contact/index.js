import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

export default function Contact() {
    return (
        <>
            <Head />
            <Nav />
            <section className="flex flex-col tracking-widest">
                <div className="grid grid-cols-2 mt-44 mb-24 gap-8">
                    <div className="ml-64 mt-36">
                        <p className="text-3xl">Contact gegevens</p>
                        <p className="mt-12 text-lg">Gezondd BV</p>
                        <p className="text-lg">Koninginnegracht 19</p>
                        <p className="text-lg">2514 AB ’s-Gravenhage</p>
                        <p className="text-lg mb-6">Tel: 085 015 0020</p>
                        <p className="text-lg mb-6">KVK: 75655489</p>
                        <p className="text-lg">BTW nummer: NL860354519B01</p>
                        <p className="text-lg">Banknummer: NL02 RABO 0345 4696 90</p>
                    </div>
                    <div className="justify-self-end">
                        <iframe
                            width="800"
                            height="650"
                            loading="lazy"
                            allowfullscreen
                            src="https://www.google.com/maps/embed/v1/search?q=Koninginnegracht%2019%2C%20Den%20Haag%2C%20Nederland&key=AIzaSyDaM3DN_oRGrTHmGYY48JsJ2mU-EhvgYI8"
                        ></iframe>
                    </div>
                </div>
            </section>
            <section className="grid tracking-widest bg-gray-light">
                <div className="ml-64 tracking-widest leading-relaxed">
                    <p className="text-3xl my-14">Neem contact met ons op</p>
                </div>
                <form className="ml-64" action="#" method="POST">
                    <div class="py-5">
                        <div class="grid grid-cols-2 gap-6 text-gray-300">
                            <div class="col-span-1">
                                <label for="volledige naam" class="block text-lg">
                                    Volledige naam *
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="full-name"
                                    placeholder="Vul hier je volledige naam in"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-3/5 bg-gray-light sm:text-sm border-b-2 border-gray-300"
                                ></input>
                            </div>
                            <div class="col-span-1">
                                <label for="email" class="block text-lg">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autocomplete="email"
                                    placeholder="Vul hier je email addres in"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-3/5 bg-gray-light sm:text-sm border-b-2 border-gray-300"
                                ></input>
                            </div>
                            <div class="col-span-2 mt-10">
                                <label for="bericht" class="block text-lg">
                                    Bericht *
                                </label>
                                <input
                                    type="text"
                                    name="bericht"
                                    id="bericht"
                                    placeholder="Vul hier uw bericht in..."
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-4/5 bg-gray-light sm:text-sm border-b-2 border-gray-300"
                                ></input>
                            </div>
                        </div>
                        <Button
                            label="Verzenden"
                            className="bg-blue-aqua h-14 w-52 my-12 rounded-full text-white drop-shadow-lg tracking-widest"
                        />
                    </div>
                </form>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
