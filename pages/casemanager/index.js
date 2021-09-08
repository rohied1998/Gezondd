import React from "react";
import Fade from "react-reveal/Fade";

// components
import Head from "next/head";
import Nav from "../../components/nav/index.jsx";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Casemanager() {
    return (
        <>
            <Head>
                <title>Casemanager</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>

            <Nav />
            <Fade>
                <section className="flex flex-col items-end w-screen h-screen lg:w-full lg:h-full">
                    <div className="bg-casemanagerdark lg:bg-casemanager bg-no-repeat bg-cover bg-center w-screen h-screen lg:h-3/5">
                        <p className="text-xl lg:text-2xl text-white lg:font-bold mx-6 text-left mt-24 mb-12 lg:my-52 lg:mx-72 tracking-widest ">
                            Als casemanager ben ik een belangrijke spin in het web, wanneer een
                            medewerker ziek wordt en verzuimt. Vanuit mijn rol zie ik erop toe dat
                            de noodzakelijke activiteiten rond het verzuim tijdig en soepel worden
                            begeleid, waarbij ik namens de werkgever een regiefunctie heb in het
                            contact tussen werknemer, P&O, bedrijfsarts of arbodienst.
                        </p>
                    </div>
                </section>
            </Fade>
            <section className="flex flex-col tracking-widest mt-12 lg:my-24">
                <div className="mx-6 lg:mx-64 text-lg">
                    <Fade>
                        <p className="">
                            Casemanagers, die namens de wekgever het proces rond het verzuim van een
                            medewerker begeleiden, kunnen Gezondd inschakelen als bedrijfsarts en/of
                            expert op het gebied van arbodienstverlening.
                        </p>
                        <p className="mt-6">
                            Gezondd kan in opdracht van de werkgever diagnosticeren bij individuele
                            casuïstiek en een behandeladvies geven. Ook kan Gezondd, indien reeds
                            een bedrijfsarts betrokken is, in overleg met de betrokken bedrijfsarts
                            adviseren richting werknemer. Dit gebeurt regelmatig wanneer er sprake
                            is van een complexe zorgvraag, waarbij een doorverwijzing naar een
                            medisch specialist noodzakelijk wordt geacht. Gezondd kan door de
                            expertise van de IKA Ned klinisch arbeidsgeneeskundigen een
                            specialistische diagnose opstellen, inclusief behandeladvies en
                            doorverwijzing naar een medisch specialist.
                        </p>
                        <p className="mt-6">
                            In bepaalde gevallen, wanneer een medewerker langdurig verzuimt, kan een
                            casemanager Gezondd verzoeken te ondersteunen rond de wet- en
                            regelgeving aspecten voortvloeiend uit de Wet verbetering poortwachter.
                            Gezondd beschikt over reïntegratie experts, die goed ingevoerd zijn rond
                            de eisen die aan de werkgever worden gesteld als het gaat om goede
                            reïntegratiebegeleiding voor een werknemer die verzuimt. Deze eisen voor
                            de werkgever zijn zowel inhoudelijk als procedureel van aard. Om het
                            risico op hoge kosten en boetes te minimaliseren, kan Gezondd in een
                            vroeg stadium worden ingeschakeld, zodat de werkgever tijdig en volledig
                            aan de eisen kan voldoen.
                        </p>
                    </Fade>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
