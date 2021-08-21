import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Contact() {
    return (
        <>
            <Head />
            <Nav />
            <section className="flex flex-col tracking-widest ">
                <div className="grid grid-cols-2 mt-44 gap-8">
                    <div className="ml-44">
                        <p className="text-3xl">Contact gegevens</p>
                        <p className="mt-12 text-lg">MyHealth BV</p>
                        <p className="text-lg">Koninginnegracht 19</p>
                        <p className="text-lg">2514 AB ’s-Gravenhage</p>
                        <p className="text-lg">Tel: 085 015 0020</p>

                        <p className="text-lg">Kamer van Koophandel: 75655489</p>

                        <p className="text-lg">BTW nummer: NL860354519B01</p>
                        <p className="text-lg">Banknummer: NL02 RABO 0345 4696 90</p>
                    </div>
                    <div className="">
                        <iframe
                            width="600"
                            height="450"
                            loading="lazy"
                            allowfullscreen
                            src="https://www.google.com/maps/embed/v1/search?q=Koninginnegracht%2019%2C%20Den%20Haag%2C%20Nederland&key=AIzaSyDaM3DN_oRGrTHmGYY48JsJ2mU-EhvgYI8"
                        ></iframe>
                    </div>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
