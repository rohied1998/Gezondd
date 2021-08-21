import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Zelfstandige() {
    return (
        <>
            <Head />
            <Nav />
            <section className="flex flex-col tracking-widest">
                <div>
                    <p className="text-2xl mt-72 mx-52 leading-normal">
                        Als werknemer ben ik zelf verantwoordelijk voor mijn gezondheid, herstel en
                        duurzame inzetbaarheid. Een cruciaal aspect van eigen verantwoordelijkheid
                        nemen is tijdig medische expertise inschakelen om samen met mijn werkgever
                        en bedrijfsarts tot een voor mij passend herstel- en gezondheidsplan te
                        komen. Daarnaast zet ik mij proactief in om de doelstellingen van mijn
                        gezondheidsplan te realiseren.
                    </p>
                </div>
                <div className="mx-64  text-gray">
                    <p className="mt-28  text-gray">
                        Een werknemer heeft een grote verantwoordelijkheid als het gaat om het
                        behouden van de eigen gezondheid en inzetbaarheid. Het tijdig aangeven dat
                        er ondersteuning nodig is om dit doel te bereiken, hoort ook bij deze
                        verantwoordelijkheid. Werknemers kunnen met de inzet van de Gezondd
                        bedrijfsartsen en experts versnelde gezondheidswinst bereiken, zodat hij of
                        zij optimaal inzetbaar blijven.
                    </p>
                    <p className="text-3xl mt-24  text-gray">Ziek door het werk? Beroepsziekte?</p>

                    <p className="mt-6  text-gray">
                        Wanneer er klachten zijn, die misschien door het werk veroorzaakt worden, is
                        het verstandig om dit uit te laten zoeken door de bedrijfsartsen (BIG
                        geregistreerd) van Gezondd. Wanneer en sprake is van een serieuze
                        aandoening of een beroepsziekte, dan werkt Gezondd samen met de klinisch
                        arbeidsgeneeskundigen van IKA Ned, dé specialist in Nederland op het gebied
                        van beroepsziekten.
                    </p>
                    <p className="text-3xl mt-24  text-gray">Second opinion</p>
                    <p className="my-12  text-gray">
                        Komt de eigen bedrijfsarts er niet uit? Indien nodig, is het mogelijk dat
                        een werknemer bij Gezondd een second opinion aanvraagt als onafhankelijk
                        oordeel naast het oordeel van de eigen bedrijfsarts. Een second opinion door
                        een bedrijfsarts van Gezondd kan helpen om de impasse te doorbreken.{" "}
                    </p>
                    <p className="text-3xl mt-24  text-gray">Blessure consult</p>
                    <p className="my-12  text-gray">
                        Als werknemer kunt bij een bedrijfsarts terecht van Gezondd voor een
                        deskundige diagnose van klachten, die u beperken in uw werkzaamheden. Alle
                        aspecten worden daarbij meegenomen. Na de diagnose adviseert de bedrijfsarts
                        in overleg met u of, en zo ja welk vervolg er zal plaatsvinden. Vaak kan de
                        bedrijfsarts adviseren over aanpassingen in het werk of het verbeteren van
                        uw conditie.
                    </p>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
