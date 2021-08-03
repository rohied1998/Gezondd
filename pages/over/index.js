import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Over() {
    return (
        <>
            <Head />
            <Nav />
            <section className="flex flex-col items-end flex-1 w-full h-screen">
                <div className="bg-doktor bg-no-repeat bg-cover bg-center mt-28 h-4/5">
                    <p className="text-4xl text-white font-bold text-left my-44 mx-72 leading-loose tracking-widest">
                        Gezondd heeft als missie om op een positieve manier een bijdrage te leveren
                        aan arbeid en gezondheid in Nederland voor werkgevers, werknemers en de meer
                        dan één miljoen zelfstandigen en ondernemers, een groep die vaak vergeten
                        wordt.
                    </p>
                </div>
            </section>
            <section className="flex flex-col mx-96 tracking-widest">
                <p className="text-3xl my-12 leading-normal">
                    Gezondd is hét aanspreekpunt voor u als werkgever, werknemer, casemanager,
                    bedrijfsarts, Arbo professional of zelfstandig ondernemer voor vragen op het
                    gebied van:
                </p>
                <div>
                    <ul className="list-disc mx-6 text-lg text-gray-700">
                        <li>Arbeidsomstandighedenbeleid en Arbo deskundigen</li>
                        <li>Verzuimbeleid en verzuimmanagementexperts</li>
                        <li>Gezondheids- en preventiebeleid</li>
                        <li>Risico-inventarisaties en -evaluaties (RI&E)</li>
                        <li>Periodiek medische keuringen</li>
                        <li>Preventief medische onderzoeken of gezondheidschecks</li>
                        <li>Vitaliteitstrajecten</li>
                        <li>Periodiek Arbeidsgezondheidskundig Onderzoeken (PAGO)</li>
                        <li>Werkplekonderzoeken</li>
                        <li>Bedrijfshulpverlening</li>
                        <li>Preventiemedewerkers en preventieve spreekuren</li>
                        <li>Een second opinion</li>
                        <li>Blessure consults</li>
                        <li>Diagnostisering en advisering m.b.t. beroepsziekten</li>
                        <li>
                            Advisering rond het werken met gevaarlijke stoffen zoals Chroom-6,
                            asbest et cetera
                        </li>
                        <li>
                            Maatwerk (In-Company) trainingen op het snijvlak van arbeid en
                            gezondheid, o.a. op het gebied van verzuimmanagement, preventie en
                            duurzame inzetbaarheid
                        </li>
                        <li>
                            Diagnose- en advisering m.b.t. zorgbehandeling voor individuele
                            werknemers of zelfstandige ondernemers, ook voor de complexe diagnose-
                            en zorgvragen
                        </li>
                        <li>
                            Interculturele expertise in relatie tot arbeid, gezondheid,
                            re-integratie en ondersteuning letselschadeslachtoffers
                        </li>
                        <li>
                            Juridische expertise m.b.t. de Wet verbetering poortwachter, de wet- en
                            regelgeving rond UWV trajecten en ondersteuning voor
                            letselschadeslachtoffers
                        </li>
                    </ul>
                    <p className="text-lg my-12 text-gray-700">
                        Bij Gezondd werken bedrijfsartsen, verzekeringsartsen, (interculturele)
                        reïntegratie-adviseurs, arbeidshygiënisten, veiligheidsdeskundigen en
                        arbeids- en organisatiedeskundigen. Daarnaast beschikt Gezondd over een
                        uitgebreid netwerk aan medisch specialisten (klinisch
                        arbeidsgeneeskundigen), juridische en letselschadeadviseurs en
                        interculturele experts.
                    </p>
                </div>
                <p className="text-3xl ">Intercultureel</p>
                <p className="text-lg mt-12 mb-24 text-gray-700">
                    Gezondd beschikt over medewerkers met een niet-westerse achtergrond. Daarom kan
                    Gezondd bij uitstek werknemers, zelfstandige ondernemers en
                    letselschadeslachtoffers met een niet-westerse culturele achtergrond goed
                    begeleiden.
                </p>
            </section>
            <section className="flex flex-1 bg-gray-100 py-24 tracking-widest">
                <div className="mx-96">
                    <p className="text-3xl">Landelijke dienstverlening</p>
                    <p className="my-6">Gezondd werkt vanuit drie vaste locaties:</p>
                    <div className="grid grid-cols-3 gap-14 mt-12 text-2xl">
                        <div className="relative bg-blue-aqua pt-8 rounded-2xl">
                            <div className="bg-white w-full h-full text-center font-bold text-blue-aqua rounded-2xl p-16 z-10">
                                Rotterdam
                            </div>
                        </div>
                        <div className="relative bg-blue-aqua pt-8 rounded-2xl">
                            <div className="bg-white w-full h-full text-center font-bold text-blue-aqua rounded-2xl p-16 z-10">
                                Hilversum
                            </div>
                        </div>
                        <div className="relative bg-blue-aqua pt-8 rounded-2xl">
                            <div className="bg-white w-full h-full text-center font-bold text-blue-aqua rounded-2xl p-16 z-10">
                                Den Haag
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
