import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Button } from "../../components/button";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";
import Fade from "react-reveal/Fade";

export default function BedrijfsartsArboprofessional() {
    return (
        <>
            <Head>
                <title>Bedrijfsarts/Arboprofessional</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>
            {/* <Nav className="fixed block w-screen z-10 bg-white text-black" /> */}
            <Fade>
                <section className="flex flex-col items-end w-screen lg:w-full lg:h-full">
                    <div className="bg-bedrijfsartsdark lg:bg-bedrijfsarts bg-no-repeat bg-cover bg-left lg:bg-center mt-7 w-screen min-h-full lg:h-3/5">
                        <p className="text-xl mx-6 text-left lg:text-2xl text-white lg:font-bold text-left lg:my-52 mt-24 mb-12 lg:mx-72 tracking-widest ">
                            Vanuit mijn deskundigheid als Arboprofessional of bedrijfsarts weet ik
                            dat er veel factoren een rol spelen bij het gezond houden van
                            werknemers, die vanuit een bepaalde functie in een specifieke sector
                            werkzaam zijn. De kennis en expertise benodigd voor mijn sector houd ik
                            actueel en verwerk ik in de arbeidsomstandigheden- beleid, het
                            verzuimbeleid, het reïntegratiebeleid, personeelsbeleid en in de
                            preventieve maatregelen die wij vanuit onze organisatie kunnen nemen.
                            Als bedrijfsarts kan ik medewerkers bijstaan, wanneer zij verzuimen en
                            hen ondersteunen bij een soepele reïntegratie. In specifieke gevallen,
                            wanneer mijn inschatting is dat een medewerker meer specialistische
                            ondersteuning nodig heeft, verwijs ik tijdig door.
                        </p>
                    </div>
                </section>
            </Fade>
            <section className="flex flex-col tracking-widest text-lg mt-12">
                <div className="lg:mx-64 mx-6">
                    <Fade>
                        <p className="mt-16">
                            Bedrijfsartsen kunnen Gezondd inschakelen als een bepaalde medewerker
                            een specialistische zorgvraag heeft. Gezondd kan in opdracht van de
                            werkgever diagnosticeren bij individuele casuïstiek en een
                            behandeladvies geven. Gezondd adviseert in overleg met de betrokken
                            bedrijfsarts richting de medewerker. Dit gebeurt regelmatig wanneer er
                            sprake is van een complexe zorgvraag, waarbij door de eigen bedrijfsarts
                            een doorverwijzing naar een medisch specialist noodzakelijk wordt
                            geacht. Gezondd kan door de expertise van de IKA Ned klinisch
                            arbeidsgeneeskundigen een specialistische diagnose opstellen, inclusief
                            behandeladvies en doorverwijzing naar een medisch specialist.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="mt-6">
                            Het kan ook voorkomen dat door een specifiek ziektegeval, na onderzoek
                            door Gezondd, nieuwe feiten bekend worden rond de oorzaak van deze
                            ziekte op de werkplek. De bedrijfsarts kan dan in overleg met de
                            Arboprofessionals en P&O door Gezondd een nader onderzoek laten doen
                            naar de (gewijzigde) arbeidsomstandigheden en welke gevolgen dit heeft
                            voor het aan te passen beleid. Arboprofessionals kunnen Gezondd ook
                            proactief benaderen, wanneer er vragen bestaan rond de
                            arbeidsomstandigheden en het waar nodig actualiseren van dit beleid.
                        </p>
                        <p className="mt-6">
                            Gezondd geeft tevens (In-Company) trainingen voor management,
                            bedrijfsartsen, Arbo professionals, casemanagers en P&O professionals op
                            het gebied van arbeid en gezondheid in samenwerking met IKA Academy.
                        </p>
                    </Fade>
                </div>
            </section>
            <section>
                <Fade>
                    <div className="rounded-md bg-gray-50 lg:p-20 py-16 text-center lg:text-left my-16 lg:my-16 w-full flex flex-col lg:flex-row">
                        <p className=" lg:ml-10 lg:mr-36 lg:mt-4 text-left lg:w-7/12 lg:tracking-wider mx-4 text-lg lg:text-lg">
                            Bedrijfsarts op maat, onderdeel van Stichting Praktijkopleiding arbo
                            professionals, detacheert huisartsen en medisch specialisten die we
                            opleiden tot bedrijfsarts. Daarnaast detacheren we geregistreerde
                            bedrijfsartsen. Wij leveren vaste of flexibel inzetbare artsen direct
                            aan arbodiensten en maatschappen van bedrijfsartsen.
                        </p>
                        <Button
                            link="./contact/"
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
