import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Button } from "../../components/button";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Contact() {
    return (
        <>
            <Head />
            <Nav />
            <section className="grid grid-cols-2">
                <div>
                    <p className="text-3xl font-bold">Contact gegevens</p>
                    <p>MyHealth BV</p>
                    <p>Koninginnegracht 19</p>
                    <p>2514 AB ’s-Gravenhage</p>
                    <p>Tel: 085 015 0020</p>

                    <p>Kamer van Koophandel: 75655489</p>

                    <p>BTW nummer: NL860354519B01</p>
                    <p>Banknummer: NL02 RABO 0345 4696 90</p>
                </div>
                <div>embed van google maps</div>
            </section>
            <section>
                
            </section>
            <Partners />
            <Footer />
        </>
    );
}
