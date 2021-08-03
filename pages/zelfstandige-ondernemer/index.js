import React from "react";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function ZelfstandigeOndernemer() {
    return (
        <>
            <Head />
            <Nav />
            <section className="flex flex-col tracking-widest text-gray-700">
                <div>
                    <p className="text-3xl font-bold mt-72 mx-52 leading-normal">
                        Als ondernemer heb ik ervoor gekozen te allen tijde eigen
                        verantwoordelijkheid te dragen voor mijn gezondheid, herstel en duurzame
                        inzetbaarheid. Deze eigen verantwoordelijkheid kan ik ook dragen omdat ik
                        weet waar ik, indien nodig, snel terecht kan voor medische expertise om tot
                        een voor mij passend herstel- en gezondheidsplan te komen.{" "}
                    </p>
                </div>
                <div className="mx-64">
                    <p className="mt-28">
                        Zelfstandigen of ondernemers kunnen MyHealth inschakelen voor advies bij
                        vragen over gezondheid en werk. Bij ziekte, dreigende arbeidsongeschiktheid
                        of na een ongeval, waar letselschade het gevolg van is. MyHealth kan
                        zelfstandigen en ondernemers ook preventief ondersteunen om gezond te
                        blijven werken.
                    </p>
                    <p className="text-3xl font-bold mt-24">Arbeidsongeschikt door ziekte?</p>

                    <p className="mt-6">
                        MyHealth helpt een ondernemer bij zijn of haar re-integratie, als hij of zij
                        ziek is geworden. Bij een tijdelijke aandoening of wanneer de ondernemer
                        geconfronteerd wordt met een ernstige ziekte, zoals kanker, of een
                        chronische aandoening, zoals diabetes of reuma. Onze arts of
                        reintegratiemanager helpt hem of haar om een goed reïntegratieplan op te
                        stellen, zodat het werk zo snel mogelijk en passend hervat kan worden.
                    </p>
                    <p className="text-3xl font-bold mt-24">Letselschade?</p>
                    <p className="my-12">
                        Heft u letselschade opgelopen, bijvoorbeeld als gevolg van een
                        verkeersongeval of een medische fout, buiten uw eigen schuld? In de meeste
                        verkeersongevallen vergoedt de verzekeraar van de tegenpartij, of de
                        inzittendenverzekering de schade, inclusief de schade omdat u niet kunt
                        werken. Daar kunt u een claim indienen. Daarbij helpt het wanneer u niet
                        alleen een brief van uw huisarts meestuurt, maar ook een rapport met de
                        beoordeling van uw arbeidsongeschiktheid door een bedrijfsarts, inclusief
                        een professioneel reïntegratieplan.
                    </p>
                    <p className="text-3xl font-bold mt-24">Arbeidsongeschiktheidsverzekering?</p>
                    <p className="my-12">
                        Heeft u als ondernemer of zelfstandige een Arbeidsongeschiktheidsverzekering
                        (AOV) of bent u lid van een broodfonds? In overleg kunt u dan ook bij
                        MyHealth terecht voor beoordeling en begeleiding.
                    </p>
                    <p className="mt-12">
                        Indien u als zelfstandige nog niet beschikt over een AOV, dan dient u er
                        rekening mee te houden dat de overheid deze op niet te lange termijn
                        verplicht zal stellen. MyHealth adviseert haar klanten, die werkzaam zijn
                        als zelfstandige of ondernemer, altijd een AOV af te sluiten, zelfs voordat
                        deze verplicht is gesteld vanuit de wet- en regelgeving. U kunt immers niet
                        altijd voorkomen dat u ziek wordt, of slachtoffer wordt van een ongeval. Een
                        AOV draagt zorg voor zekerheid, wanneer er onverhoopt iets gebeurt waardoor
                        u niet meer kunt werken.
                    </p>
                    <p className="my-4">
                        Met een goede AOV kunt u op het moment dat het nodig is adequate
                        zorgverlening inschakelen, zodat uw (financiële) risico’s beperkt blijven.
                        Daarbij voorkomt u tevens dat u onnodige tijd verliest, omdat u niet weet
                        welke (medisch) specialist u kan helpen met uw specifieke zorgvraag.
                        MyHealth kan u goed en deskundig begeleiden en waar nodig doorverwijzen in
                        het geval van ziekte, arbeidsongeschiktheid of letselschade.
                    </p>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
