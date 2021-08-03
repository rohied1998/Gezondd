import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Casemanager() {
    return (
        <>
            <Head />
            <Nav />
            <section className="flex flex-col tracking-widest">
                <div>
                    <p className="text-3xl font-bold mt-72 mx-52 leading-normal">
                        Als casemanager ben ik een belangrijke spin in het web, wanneer een
                        medewerker ziek wordt en verzuimt. Vanuit mijn rol zie ik erop toe dat de
                        noodzakelijke activiteiten rond het verzuim tijdig en soepel worden
                        begeleid, waarbij ik namens de werkgever een regiefunctie heb in het contact
                        tussen werknemer, P&O, bedrijfsarts of arbodienst.
                    </p>
                </div>
                <div className="mx-64">
                    <p className="mt-28">
                        Casemanagers, die namens de wekgever het proces rond het verzuim van een
                        medewerker begeleiden, kunnen MyHealth inschakelen als bedrijfsarts en/of
                        expert op het gebied van arbodienstverlening.
                    </p>
                    <p className="mt-6">
                        MyHealth kan in opdracht van de werkgever diagnosticeren bij individuele
                        casuïstiek en een behandeladvies geven. Ook kan MyHealth, indien reeds een
                        bedrijfsarts betrokken is, in overleg met de betrokken bedrijfsarts
                        adviseren richting werknemer. Dit gebeurt regelmatig wanneer er sprake is
                        van een complexe zorgvraag, waarbij een doorverwijzing naar een medisch
                        specialist noodzakelijk wordt geacht. MyHealth kan door de expertise van de
                        IKA Ned klinisch arbeidsgeneeskundigen een specialistische diagnose
                        opstellen, inclusief behandeladvies en doorverwijzing naar een medisch
                        specialist.
                    </p>
                    <p className="mt-6">
                        In bepaalde gevallen, wanneer een medewerker langdurig verzuimt, kan een
                        casemanager MyHealth verzoeken te ondersteunen rond de wet- en regelgeving
                        aspecten voortvloeiend uit de Wet verbetering poortwachter. MyHealth
                        beschikt over reïntegratie experts, die goed ingevoerd zijn rond de eisen
                        die aan de werkgever worden gesteld als het gaat om goede
                        reïntegratiebegeleiding voor een werknemer die verzuimt. Deze eisen voor de
                        werkgever zijn zowel inhoudelijk als procedureel van aard. Om het risico op
                        hoge kosten en boetes te minimaliseren, kan MyHealth in een vroeg stadium
                        worden ingeschakeld, zodat de werkgever tijdig en volledig aan de eisen kan
                        voldoen.
                    </p>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
