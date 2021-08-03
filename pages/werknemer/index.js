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
                    <p className="text-3xl font-bold mt-72 mx-52 leading-normal">
                        Als werknemer ben ik zelf verantwoordelijk voor mijn gezondheid, herstel en
                        duurzame inzetbaarheid. Een cruciaal aspect van eigen verantwoordelijkheid
                        nemen is tijdig medische expertise inschakelen om samen met mijn werkgever
                        en bedrijfsarts tot een voor mij passend herstel- en gezondheidsplan te
                        komen. Daarnaast zet ik mij proactief in om de doelstellingen van mijn
                        gezondheidsplan te realiseren.
                    </p>
                </div>
                <div className="mx-64">
                    <p className="mt-28">
                        Een werknemer heeft een grote verantwoordelijkheid als het gaat om het
                        behouden van de eigen gezondheid en inzetbaarheid. Het tijdig aangeven dat
                        er ondersteuning nodig is om dit doel te bereiken, hoort ook bij deze
                        verantwoordelijkheid. Werknemers kunnen met de inzet van de MyHealth
                        bedrijfsartsen en experts versnelde gezondheidswinst bereiken, zodat hij of
                        zij optimaal inzetbaar blijven.
                    </p>
                    <p className="text-3xl font-bold mt-24">Ziek door het werk? Beroepsziekte?</p>

                    <p className="mt-6">
                        Wanneer er klachten zijn, die misschien door het werk veroorzaakt worden, is
                        het verstandig om dit uit te laten zoeken door de bedrijfsartsen (BIG
                        geregistreerd) van MyHealth. Wanneer en sprake is van een serieuze
                        aandoening of een beroepsziekte, dan werkt MyHealth samen met de klinisch
                        arbeidsgeneeskundigen van IKA Ned, dé specialist in Nederland op het gebied
                        van beroepsziekten.
                    </p>
                    <p className="text-3xl font-bold mt-24">Second opinion</p>
                    <p className="my-12">
                        Komt de eigen bedrijfsarts er niet uit? Indien nodig, is het mogelijk dat
                        een werknemer bij MyHealth een second opinion aanvraagt als onafhankelijk
                        oordeel naast het oordeel van de eigen bedrijfsarts. Een second opinion door
                        een bedrijfsarts van MyHealth kan helpen om de impasse te doorbreken.{" "}
                    </p>
                    <p className="text-3xl font-bold mt-24">Blessure consult</p>
                    <p className="my-12">
                        Als werknemer kunt bij een bedrijfsarts terecht van MyHealth voor een
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
