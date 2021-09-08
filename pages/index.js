import Head from "next/head";
import Nav from "../components/nav/index.jsx";
import { Button } from "../components/button";
import { Partners } from "../components/partners";
import { Footer } from "../components/footer";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function Home() {
    return (
        <>
            <Head>
                <title>Gezondd</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>
            <Nav />
            <Fade>
                <section className="flex flex-col items-end w-screen h-screen md:w-full lg:w-full h-screen bg-home bg-cover homepage">
                    <div className="flex flex-col text-center text-white w-screen lg:w-1/2 md:w-5/12 lg:w-5/12 justify-center lg:justify-end lg:mb-48 mt-36 lg:mt-96 lg:mr-20 ">
                        <p className="text-2xl lg:text-6xl md:text-4xl text-center lg:text-left">
                            Ambities realiseren door optimaal presteren
                        </p>
                        <p className="my-8 text-center lg:text-left mx-12 lg:mx-0 lg:w-10/12 leading-relaxed lg:tracking-widest">
                            Gezondd ondersteunt organisaties en haar medewerkers om vitaal en
                            inzetbaar te blijven. Een goede gezondheid is immers de basis om
                            optimaal te kunnen blijven werken of te ondernemen.
                        </p>
                        <Button
                            link="./over.html"
                            label="Over Gezondd"
                            className="bg-green-pastel h-12 text-center w-48 rounded-3xl lg:mr-28 tracking-wider"
                        />
                    </div>
                    <div className="flex mx-auto mt-52 md:mt-64 lg:mt-10 xl:mt-2 2xl:mt-20">
                        <Link to="intro" spy={true} smooth={true} offset={-100} duration={500}>
                            <svg
                                className="animate-bounce w-6 h-6 text-white mx-auto"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </Link>
                    </div>
                </section>
            </Fade>
            <section className="bg-white mx-4 lg:mx-96" id="intro">
                <Fade>
                    <p className="text-xl lg:text-2xl my-8 lg:my-16 lg:tracking-widest text-center lg:text-left">
                        Gezondd is dé expert als het gaat om inzet van maatwerk (medische) expertise
                        op het snijvlak van gezondheid en arbeid. Er wordt in overleg met werkgever,
                        werknemer of zelfstandig ondernemer gekeken naar mogelijkheden om:
                    </p>
                </Fade>
                <ul className="list-disc mx-6  text-sm lg:text-lg">
                    <Fade>
                        <li className="mb-4">
                            Oorzaken van verzuim goed in beeld te krijgen en door inzet van onze
                            deskundigheid en effectieve interventies het verzuim te verlagen en
                            re-integratie van u of uw medewerkers te bespoedigen.
                        </li>
                    </Fade>
                    <Fade>
                        <li className="mb-4">
                            De gezondheid van uw medewerkers of uzelf te vergroten op korte én
                            langere termijn, zodat bereikte gezondheidswinst duurzaam behouden
                            blijft.
                        </li>
                    </Fade>
                    <Fade>
                        <li className="mb-4">
                            De arbeidsomstandigheden zodanig in te richten dat de gezondheid van u
                            of uw medewerkers verbeterd kan worden of maximaal ondersteund kan
                            worden.
                        </li>
                    </Fade>
                    <Fade>
                        <li className="mb-4">
                            De gezondheid van werknemers te borgen door inzet van preventie op de
                            verschillende van belang zijnde aspecten. Deze preventiemaatregelen
                            worden steeds specifiek toegespitst op de sector en de functie
                            waarbinnen u of uw werknemers werkzaam zijn.
                        </li>
                    </Fade>
                    <Fade>
                        <li className="mb-4">
                            Geldende wet- en regelgeving rond verzuim, re-integratie, dreigende
                            arbeidsongeschiktheid en de daarbij betrokken (juridische) procedures
                            helder in kaart te brengen. Door inzet van onze experts heeft u sneller
                            een overzicht van de (wettelijke) mogelijkheden, waardoor u de
                            vermijdbare kosten tijdig kunt identificeren en onnodig tijdverlies rond
                            verzuim, reïntegratie en bepaling van arbeidsongeschiktheid kunt
                            voorkomen.
                        </li>
                    </Fade>
                    <Fade>
                        <li className="mb-4">
                            Geldende wet- en regelgeving rond (letsel)schade door een ongeval en de
                            daarbij betrokken (juridische) procedures helder in kaart te brengen.
                            Door inzet van onze experts heeft u sneller een overzicht van de
                            (wettelijke) mogelijkheden, waardoor u de vermijdbare kosten tijdig kunt
                            identificeren en onnodig tijdverlies rond verzuim en bepaling van
                            arbeidsongeschiktheid a.g.v. letselschade van uzelf of uw medewerker
                            kunt voorkomen.
                        </li>
                    </Fade>
                    <Fade>
                        <li>
                            U te begeleiden bij diversiteitsvraagstukken op het gebied van verzuim,
                            ziekte, reïntegratie, gezondheidsbevordering & preventie of dreigende
                            arbeidsongeschiktheid. MyHealth beschikt over specifieke deskundigheid
                            op het terrein van diversiteitsbeleid in relatie tot het beperken van
                            verzuim, het bespoedigen van re-integratie en ondersteuning voor
                            letselschadeslachtoffers, waarbij rekening gehouden wordt met de
                            interculturele verschillen van werknemers.
                        </li>
                    </Fade>
                </ul>
            </section>

            <section>
                <Fade>
                    <div className="rounded-md bg-gray-50 lg:p-20 py-16 text-center lg:text-left my-16 lg:my-16 w-full flex flex-col lg:flex-row">
                        <p className=" lg:ml-10 lg:mr-36 lg:mt-4 lg:w-7/12 lg:tracking-wider mx-4 text-lg lg:text-lg">
                            Uw vragen op het gebied van werk en gezondheid, voor uzelf of uw
                            medewerkers, worden door Gezondd snel beantwoord door onze
                            bedrijfsartsen, verzuim- en reïntegratie experts, klinisch
                            arbeidsgeneeskundigen (IKA Ned), verzekeringsartsen, medische adviseurs,
                            letselschade experts en deskundigen op het gebied van diversiteit.
                        </p>
                        <Button
                            link="./contact.html"
                            label="Voor meer vragen"
                            className="bg-blue-aqua h-14 w-52 lg:h-16 lg:w-80 mt-16 lg:my-8 lg:mx-20 rounded-full font-bold text-white drop-shadow-lg"
                        />
                    </div>
                </Fade>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
