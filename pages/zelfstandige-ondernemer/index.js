import React from "react";
import Fade from "react-reveal/Fade";

// components
import Head from "next/head";
import { Nav } from "../../components/nav";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function ZelfstandigeOndernemer() {
    return (
        <>
            <Head>
                <title>Zelfstandige/Ondernemer</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>

            <Nav className="fixed block w-screen z-10 bg-white text-black" />
            <section className="flex flex-col items-end flex-1 w-full h-full">
                <div className="bg-teddy bg-no-repeat bg-cover bg-center  mt-7 h-3/5">
                    <Fade>
                        <p className="text-2xl text-white font-bold text-left my-52 mx-72 tracking-widest">
                            Als ondernemer heb ik ervoor gekozen te allen tijde eigen
                            verantwoordelijkheid te dragen voor mijn gezondheid, herstel en duurzame
                            inzetbaarheid. Deze eigen verantwoordelijkheid kan ik ook dragen omdat
                            ik weet waar ik, indien nodig, snel terecht kan voor medische expertise
                            om tot een voor mij passend herstel- en gezondheidsplan te komen.
                        </p>
                    </Fade>
                </div>
            </section>
            <section className="flex flex-col tracking-widest">
                <div className="mx-64 text-lg">
                    <Fade>
                        <p className="mt-16">
                            Zelfstandigen of ondernemers kunnen Gezondd inschakelen voor advies bij
                            vragen over gezondheid en werk. Bij ziekte, dreigende
                            arbeidsongeschiktheid of na een ongeval, waar letselschade het gevolg
                            van is. Gezondd kan zelfstandigen en ondernemers ook preventief
                            ondersteunen om gezond te blijven werken.
                        </p>
                    </Fade>
                </div>
                <div className="mx-64 text-lg">
                    <Fade>
                        <p className="text-3xl mt-16">Arbeidsongeschikt door ziekte?</p>

                        <p className="mt-6">
                            Gezondd helpt een ondernemer bij zijn of haar re-integratie, als hij of
                            zij ziek is geworden. Bij een tijdelijke aandoening of wanneer de
                            ondernemer geconfronteerd wordt met een ernstige ziekte, zoals kanker,
                            of een chronische aandoening, zoals diabetes of reuma. Onze arts of
                            reintegratiemanager helpt hem of haar om een goed reïntegratieplan op te
                            stellen, zodat het werk zo snel mogelijk en passend hervat kan worden.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-3xl mt-16">Letselschade?</p>
                        <p className="my-6">
                            Heft u letselschade opgelopen, bijvoorbeeld als gevolg van een
                            verkeersongeval of een medische fout, buiten uw eigen schuld? In de
                            meeste verkeersongevallen vergoedt de verzekeraar van de tegenpartij, of
                            de inzittendenverzekering de schade, inclusief de schade omdat u niet
                            kunt werken. Daar kunt u een claim indienen. Daarbij helpt het wanneer u
                            niet alleen een brief van uw huisarts meestuurt, maar ook een rapport
                            met de beoordeling van uw arbeidsongeschiktheid door een bedrijfsarts,
                            inclusief een professioneel reïntegratieplan.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-3xl mt-16">Arbeidsongeschiktheidsverzekering?</p>
                        <p className="mt-6">
                            Heeft u als ondernemer of zelfstandige een
                            Arbeidsongeschiktheidsverzekering (AOV) of bent u lid van een
                            broodfonds? In overleg kunt u dan ook bij Gezondd terecht voor
                            beoordeling en begeleiding.
                        </p>
                        </Fade>
                        <Fade>
                        <p className="mt-6">
                            Indien u als zelfstandige nog niet beschikt over een AOV, dan dient u er
                            rekening mee te houden dat de overheid deze op niet te lange termijn
                            verplicht zal stellen. Gezondd adviseert haar klanten, die werkzaam zijn
                            als zelfstandige of ondernemer, altijd een AOV af te sluiten, zelfs
                            voordat deze verplicht is gesteld vanuit de wet- en regelgeving. U kunt
                            immers niet altijd voorkomen dat u ziek wordt, of slachtoffer wordt van
                            een ongeval. Een AOV draagt zorg voor zekerheid, wanneer er onverhoopt
                            iets gebeurt waardoor u niet meer kunt werken.
                        </p>
                        </Fade>
                    <Fade>
                        <p className="my-4">
                            Met een goede AOV kunt u op het moment dat het nodig is adequate
                            zorgverlening inschakelen, zodat uw (financiële) risico’s beperkt
                            blijven. Daarbij voorkomt u tevens dat u onnodige tijd verliest, omdat u
                            niet weet welke (medisch) specialist u kan helpen met uw specifieke
                            zorgvraag. Gezondd kan u goed en deskundig begeleiden en waar nodig
                            doorverwijzen in het geval van ziekte, arbeidsongeschiktheid of
                            letselschade.
                        </p>
                    </Fade>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
