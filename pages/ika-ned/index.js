import React from "react";

// components
import Head from "next/head";
import Nav from "../../components/nav/index.jsx";
import { Button } from "../../components/button";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";
import Fade from "react-reveal/Fade";

export default function IkaNed() {
    return (
        <>
            <Head>
                <title>IKA Ned</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>
            <Nav />
            <Fade>
                <section className="flex flex-col items-end h-screen w-full lg:h-full">
                    <div className="bg-ikadark lg:bg-ika bg-no-repeat bg-cover bg-center lg:h-3/5">
                        <p className="mt-20 mb-8 text-lg lg:text-2xl text-white lg:font-bold text-left mx-6 lg:my-52 lg:mx-72 tracking-widest ">
                            IKA Ned is een tweedelijns zorgorganisatie actief binnen de sectoren
                            overheid, semioverheidsinstellingen, zorg, handel, transport en
                            logistiek. IKA Ned baseert zich hierbij op de jarenlange ervaring van de
                            verschillende artsen en professionals opgedaan in profit en non-profit
                            sectoren. Daarnaast past IKA-Ned specialistische kennis toe op
                            verschillende voor organisaties van belang zijnde domeinen, zoals het
                            beoordelen van beroepsziekten en het versnellen van re-integratie
                            trajecten. Het gaat dan om de meer complexe problemen, waarbij een
                            bedrijfsarts, casemanager, de HR manager of betrokkene zelf, graag
                            advies krijgen van een expert{" "}
                        </p>
                    </div>
                </section>
            </Fade>
            <section className="flex flex-col lg:mx-96 mx-6 mt-16 tracking-widest">
                <div>
                    <ul className="list-disc mx-6 text-lg">
                        <Fade>
                            <li>
                                Advies bij reïntegratie, bij chronische aandoeningen zoals MS, of
                                complexe aandoeningen als kanker.
                            </li>
                        </Fade>
                        <Fade>
                            <li>
                                VDiagnostiek van beroepsziekten. IKA Ned is hét Centre of Excellence
                                in Nederland.
                            </li>
                        </Fade>
                        <Fade>
                            <li>
                                Advies bij keuringen, met name in het transport (railvervoer, bus).
                            </li>
                        </Fade>
                        <Fade>
                            <li>
                                Expertises: in rechtszaken, claim zaken (letselschade,
                                beroepsziekten), UWV beroepszaken.
                            </li>
                        </Fade>
                    </ul>
                    <Fade>
                        <p className="text-lg mt-6">
                            Gezondd werkt als arbodienst intensief samen met haar zusterorganisatie
                            IKA Ned voor die cliënten, die specialistische medische kennis vereisen
                            op het snijvlak van arbeid en zorg, voor diagnostiek bij beroepsziekten,
                            advies bij keuringen en expertises.
                        </p>
                    </Fade>
                </div>
                <Fade>
                    <p className="text-3xl mt-16">IKA Academy</p>
                    <p className="mt-6">
                        IKA Academy biedt excellente educatie door top docenten, waarbij u met
                        plezier leergangen kunt volgen én uw accreditatie punten kunt behalen. IKA
                        Academy organiseert hooggekwalificeerde nationale en internationale
                        opleiding en training speciaal ontwikkeld voor bedrijfs- en
                        verzekeringsartsen en andere Arbo professionals, maar ook voor
                        leidinggevenden, HR-profs en management.
                    </p>
                    <p className="mt-6">
                        Huidige research creëert nieuw wetenschappelijk bewijs. Het bewijs wordt
                        verwerkt en toegepast in een continue stroom van nieuwe standaarden en
                        professionele richtlijnen. Dat is het begin van onze opleiding! We leveren u
                        als deelnemer evidence based information, maar met een duidelijke lijn naar
                        praktische implicaties. Wetenschappelijke kennis moet vertaald worden naar
                        de praktijk.
                    </p>
                    <p className="mt-6">
                        De thema’s waarbinnen de verschillende modules vallen, zijn voorgedragen
                        door de praktiserende bedrijfsartsen binnen het IKA-netwerk. De keuze voor
                        die thema’s heeft alles te maken met het feit dat hier de kracht ligt van
                        onze experts. Ons netwerk groeit, dus ook de diversiteit aan expertise.{" "}
                    </p>
                </Fade>
                <Fade>
                    <p className="text-3xl mt-16">Het educatieve model</p>
                    <p className="mt-6">
                        De didactische benadering van IKA Academy is gebaseerd op leermethoden die
                        passen bij de huidige ontwikkelingen in het vak. De volgende principes
                        vormen de rode draad:
                    </p>
                    <ul className="list-disc mx-6 mt-6">
                        <li>De student staat centraal </li>
                        <li>Gerenommeerde subject matter experts uit het vak als docent </li>
                        <li>Diversiteit in leermethodes en leerstijlen</li>
                        <li>Gebaseerd op recente wetenschappelijke inzichten</li>
                        <li>Actief kennis en ervaring uitwisselen in kleine groepen</li>
                        <li>Een prettige stimulerende sfeer</li>
                    </ul>
                    <p className="mt-6">
                        Gezondd werkt samen met IKA Academy voor het ontwikkelen en geven van
                        (in-Company) trainingen en opleidingen. De vraag van de opdrachtgever staat
                        telkens centraal bij de invulling van het trainingsprogramma en
                        opleidingsdoelstellingen.
                    </p>
                </Fade>
            </section>
            <section>
                <Fade>
                    <div className="rounded-md bg-gray-50 lg:p-20 py-16 text-center lg:text-left my-16 lg:my-16 w-full flex flex-col lg:flex-row">
                        <p className=" lg:ml-10 lg:mr-36 lg:mt-4 lg:w-7/12 lg:tracking-wider mx-4 text-lg lg:text-lg">
                            IKA Ned is een gespecialiseerd instituut en Centre of Excellence op het
                            gebied van arbeid en gezondheid. We werken samen met de topspecialisten
                            en -universiteiten van Nederland. Ook stimuleren we kennisdeling en
                            onderzoek op het gebied van klinische arbeidsgeneeskunde.
                        </p>
                        <Button
                            link="https://www.ika-ned.nl/"
                            label="Ga naar de website"
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
