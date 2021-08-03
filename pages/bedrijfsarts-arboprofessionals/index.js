import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function BedrijfsartsArboprofessional() {
    return (
        <>
            <Head />
            <Nav />
            <section className="flex flex-col tracking-widest">
                <div>
                    <p className="text-3xl font-bold mt-72 mx-52 leading-normal">
                        Vanuit mijn deskundigheid als Arboprofessional of bedrijfsarts weet ik dat
                        er veel factoren een rol spelen bij het gezond houden van werknemers, die
                        vanuit een bepaalde functie in een specifieke sector werkzaam zijn. De
                        kennis en expertise benodigd voor mijn sector houd ik actueel en verwerk ik
                        in de arbeidsomstandigheden- beleid, het verzuimbeleid, het
                        reïntegratiebeleid, personeelsbeleid en in de preventieve maatregelen die
                        wij vanuit onze organisatie kunnen nemen. Als bedrijfsarts kan ik
                        medewerkers bijstaan, wanneer zij verzuimen en hen ondersteunen bij een
                        soepele reïntegratie. In specifieke gevallen, wanneer mijn inschatting is
                        dat een medewerker meer specialistische ondersteuning nodig heeft, verwijs
                        ik tijdig door.
                    </p>
                </div>
                <div className="mx-64">
                    <p className="mt-28">
                        Bedrijfsartsen kunnen MyHealth inschakelen als een bepaalde medewerker een
                        specialistische zorgvraag heeft. MyHealth kan in opdracht van de werkgever
                        diagnosticeren bij individuele casuïstiek en een behandeladvies geven.
                        MyHealth adviseert in overleg met de betrokken bedrijfsarts richting de
                        medewerker. Dit gebeurt regelmatig wanneer er sprake is van een complexe
                        zorgvraag, waarbij door de eigen bedrijfsarts een doorverwijzing naar een
                        medisch specialist noodzakelijk wordt geacht. MyHealth kan door de expertise
                        van de IKA Ned klinisch arbeidsgeneeskundigen een specialistische diagnose
                        opstellen, inclusief behandeladvies en doorverwijzing naar een medisch
                        specialist.
                    </p>
                    <p className="mt-6">
                        Het kan ook voorkomen dat door een specifiek ziektegeval, na onderzoek door
                        MyHealth, nieuwe feiten bekend worden rond de oorzaak van deze ziekte op de
                        werkplek. De bedrijfsarts kan dan in overleg met de Arboprofessionals en P&O
                        door MyHealth een nader onderzoek laten doen naar de (gewijzigde)
                        arbeidsomstandigheden en welke gevolgen dit heeft voor het aan te passen
                        beleid. Arboprofessionals kunnen MyHealth ook proactief benaderen, wanneer
                        er vragen bestaan rond de arbeidsomstandigheden en het waar nodig
                        actualiseren van dit beleid.{" "}
                    </p>
                    <p className="mt-6">
                        MyHealth geeft tevens (In-Company) trainingen voor management,
                        bedrijfsartsen, Arbo professionals, casemanagers en P&O professionals op het
                        gebied van arbeid en gezondheid in samenwerking met IKA Academy.
                    </p>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
