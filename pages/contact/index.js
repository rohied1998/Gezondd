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
                        <p className="text-3xl font-bold">Contact gegevens</p>
                        <p>MyHealth BV</p>
                        <p>Koninginnegracht 19</p>
                        <p>2514 AB ’s-Gravenhage</p>
                        <p>Tel: 085 015 0020</p>

                        <p>Kamer van Koophandel: 75655489</p>

                        <p>BTW nummer: NL860354519B01</p>
                        <p>Banknummer: NL02 RABO 0345 4696 90</p>
                    </div>
                    <div>
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
