import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Button } from "../../components/button";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Over() {
    return (
        <>
            <Head />
            <Nav />
            <section className="flex flex-col items-end flex-1 w-full">
                <div >
                    <p className="text-6xl text-white bg-doktor bg-no-repeat bg-cover my-32 h-5/6">
                        Gezondd heeft als missie om op een positieve manier een bijdrage te leveren
                        aan arbeid en gezondheid in Nederland voor werkgevers, werknemers en de meer
                        dan één miljoen zelfstandigen en ondernemers, een groep die vaak vergeten
                        wordt.
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <p>
                        Gezondd is hét aanspreekpunt voor u als werkgever, werknemer, casemanager,
                        bedrijfsarts, Arbo professional of zelfstandig ondernemer voor vragen op het
                        gebied van:
                    </p>
                    <p>
                        • Arbeidsomstandighedenbeleid en Arbo deskundigen • Verzuimbeleid en
                        verzuimmanagementexperts • Gezondheids- en preventiebeleid •
                        Risico-inventarisaties en -evaluaties (RI&E) • Periodiek medische keuringen
                        • Preventief medische onderzoeken of gezondheidschecks •
                        Vitaliteitstrajecten • Periodiek Arbeidsgezondheidskundig Onderzoeken (PAGO)
                        • Werkplekonderzoeken • Bedrijfshulpverlening • Preventiemedewerkers en
                        preventieve spreekuren • Een second opinion • Blessure consults •
                        Diagnostisering en advisering m.b.t. beroepsziekten • Advisering rond het
                        werken met gevaarlijke stoffen zoals Chroom-6, asbest et cetera • Maatwerk
                        (In-Company) trainingen op het snijvlak van arbeid en gezondheid, o.a. op
                        het gebied van verzuimmanagement, preventie en duurzame inzetbaarheid •
                        Diagnose- en advisering m.b.t. zorgbehandeling voor individuele werknemers
                        of zelfstandige ondernemers, ook voor de complexe diagnose- en zorgvragen •
                        Interculturele expertise in relatie tot arbeid, gezondheid, re-integratie en
                        ondersteuning letselschadeslachtoffers • Juridische expertise m.b.t. de Wet
                        verbetering poortwachter, de wet- en regelgeving rond UWV trajecten en
                        ondersteuning voor letselschadeslachtoffers. Bij MyHealth werken
                        bedrijfsartsen, verzekeringsartsen, (interculturele) reïntegratie-adviseurs,
                        arbeidshygiënisten, veiligheidsdeskundigen en arbeids- en
                        organisatiedeskundigen. Daarnaast beschikt MyHealth over een uitgebreid
                        netwerk aan medisch specialisten (klinisch arbeidsgeneeskundigen),
                        juridische en letselschadeadviseurs en interculturele experts.
                    </p>
                    <p>Intercultureel</p>
                    <p>
                        Gezondd beschikt over medewerkers met een niet-westerse achtergrond. Daarom
                        kan Gezondd bij uitstek werknemers, zelfstandige ondernemers en
                        letselschadeslachtoffers met een niet-westerse culturele achtergrond goed
                        begeleiden.
                    </p>
                </div>
                <div>
                    <p>Landelijke dienstverlening</p>
                    <p>MyHealth werkt vanuit drie vaste locaties:</p>
                    <div>Rotterdam</div>
                    <div>Hilversum</div>
                    <div>Den Haag</div>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
