import React from "react";
import Fade from "react-reveal/Fade";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Over() {
    return (
        <>
            <Head>
                <title>Over</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>
            <Nav className="fixed block w-screen z-10 bg-white text-black" />
            <Fade>
                <section className="flex flex-col items-end flex-1 w-full h-full">
                    <div className="bg-doktor bg-no-repeat bg-cover bg-center mt-7 h-3/5">
                        <p className="text-2xl text-white font-bold text-left mt-64 mb-52 mx-72 tracking-widest ">
                            Gezondd heeft als missie om op een positieve manier een bijdrage te
                            leveren aan arbeid en gezondheid in Nederland voor werkgevers,
                            werknemers en de meer dan één miljoen zelfstandigen en ondernemers, een
                            groep die vaak vergeten wordt.
                        </p>
                    </div>
                </section>
            </Fade>
            <Fade>
                <section className="flex flex-col mx-96 tracking-widest">
                    <p className="text-2xl mt-20 mb-16 leading-normal ">
                        Gezondd is hét aanspreekpunt voor u als werkgever, werknemer, casemanager,
                        bedrijfsarts, Arbo professional of zelfstandig ondernemer voor vragen op het
                        gebied van:
                    </p>
                    <div>
                        <ul className="list-disc text-lg">
                            <Fade>
                                <li>Arbeidsomstandighedenbeleid en Arbo deskundigen</li>
                            </Fade>
                            <Fade>
                                <li>Verzuimbeleid en verzuimmanagementexperts</li>
                            </Fade>
                            <Fade>
                                <li>Gezondheids- en preventiebeleid</li>
                            </Fade>
                            <Fade>
                                <li>Risico-inventarisaties en -evaluaties (RI&E)</li>
                            </Fade>
                            <Fade>
                                <li>Periodiek medische keuringen</li>
                            </Fade>
                            <Fade>
                                <li>Preventief medische onderzoeken of gezondheidschecks</li>
                            </Fade>
                            <Fade>
                                <li>Vitaliteitstrajecten</li>
                            </Fade>
                            <Fade>
                                <li>Periodiek Arbeidsgezondheidskundig Onderzoeken (PAGO)</li>
                            </Fade>
                            <Fade>
                                <li>Werkplekonderzoeken</li>
                            </Fade>
                            <Fade>
                                <li>Bedrijfshulpverlening</li>
                            </Fade>
                            <Fade>
                                <li>Preventiemedewerkers en preventieve spreekuren</li>
                            </Fade>
                            <Fade>
                                <li>Een second opinion</li>
                            </Fade>
                            <Fade>
                                <li>Blessure consults</li>
                            </Fade>
                            <Fade>
                                <li>Diagnostisering en advisering m.b.t. beroepsziekten</li>
                            </Fade>
                            <Fade>
                                <li>
                                    Advisering rond het werken met gevaarlijke stoffen zoals
                                    Chroom-6, asbest et cetera
                                </li>
                            </Fade>
                            <Fade>
                                <li>
                                    Maatwerk (In-Company) trainingen op het snijvlak van arbeid en
                                    gezondheid, o.a. op het gebied van verzuimmanagement, preventie
                                    en duurzame inzetbaarheid
                                </li>
                            </Fade>
                            <Fade>
                                <li>
                                    Diagnose- en advisering m.b.t. zorgbehandeling voor individuele
                                    werknemers of zelfstandige ondernemers, ook voor de complexe
                                    diagnose- en zorgvragen
                                </li>
                            </Fade>
                            <Fade>
                                <li>
                                    Interculturele expertise in relatie tot arbeid, gezondheid,
                                    re-integratie en ondersteuning letselschadeslachtoffers
                                </li>
                            </Fade>
                            <Fade>
                                <li>
                                    Juridische expertise m.b.t. de Wet verbetering poortwachter, de
                                    wet- en regelgeving rond UWV trajecten en ondersteuning voor
                                    letselschadeslachtoffers
                                </li>
                            </Fade>
                        </ul>
                        <Fade>
                            <p className="text-lg my-12">
                                Bij Gezondd werken bedrijfsartsen, verzekeringsartsen,
                                (interculturele) reïntegratie-adviseurs, arbeidshygiënisten,
                                veiligheidsdeskundigen en arbeids- en organisatiedeskundigen.
                                Daarnaast beschikt Gezondd over een uitgebreid netwerk aan medisch
                                specialisten (klinisch arbeidsgeneeskundigen), juridische en
                                letselschadeadviseurs en interculturele experts.
                            </p>
                        </Fade>
                    </div>
                    <Fade>
                        <p className="text-3xl ">Intercultureel</p>
                        <p className="text-lg mt-12 mb-24">
                            Gezondd beschikt over medewerkers met een niet-westerse achtergrond.
                            Daarom kan Gezondd bij uitstek werknemers, zelfstandige ondernemers en
                            letselschadeslachtoffers met een niet-westerse culturele achtergrond
                            goed begeleiden.
                        </p>
                    </Fade>
                </section>
            </Fade>
            <Fade>
                <section className="flex flex-1 bg-gray-100 py-24 tracking-widest">
                    <div className="mx-96">
                        <p className="text-3xl">Landelijke dienstverlening</p>
                        <p className="my-6">Gezondd werkt vanuit drie vaste locaties:</p>
                        <div className="grid grid-cols-2 gap-40 mt-12 text-2xl">
                            <div className="relative bg-blue-aqua pt-8 rounded-2xl w-full h-full">
                                <a href="../../pages/amsterdam-contact/">
                                    <div className="bg-white w-full h-full text-center rounded-2xl p-8 z-10 drop-shadow-lg px-24 py-16">
                                        <p className="font-bold text-blue-aqua">Amsterdam</p>
                                    </div>
                                </a>
                            </div>
                            <div className="relative bg-blue-aqua pt-8 rounded-2xl w-full h-full">
                                <a href="../../pages/contact/">
                                    <div className="bg-white w-full h-full text-center rounded-2xl p-8 z-10 drop-shadow-lg px-24 py-16">
                                        <p className="font-bold text-blue-aqua">Den Haag</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
            <Partners />
            <Footer />
        </>
    );
}
