import Head from "next/head";
import { Nav } from "../components/nav";
import { Button } from "../components/button";
import { Partners } from "../components/partners";
import { Footer } from "../components/footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Gezondd</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/fonts/Varela/Varela-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <section className="flex flex-col items-end flex-1 w-full h-screen bg-home bg-cover">
                <Nav></Nav>
                <div className="text-white font-varela w-5/12 justify-end my-96 mr-12">
                    <p className="text-6xl text-left">
                        Ambities realiseren door optimaal presteren
                    </p>
                    <p className="my-4 text-left">
                        Gezondd ondersteunt organisaties en haar medewerkers om vitaal en inzetbaar
                        te blijven. Een goede gezondheid is immers de basis om optimaal te kunnen
                        blijven werken of te ondernemen.
                    </p>
                    <Button
                        label="Over Gezondd"
                        className="bg-green-pastel px-8 py-3 rounded-3xl ml-60"
                    />
                </div>
            </section>

            <section className="bg-white">
                <p className="text-3xl my-40 mx-24">
                    Gezondd is dé expert als het gaat om inzet van maatwerk (medische) expertise op
                    het snijvlak van gezondheid en arbeid. Er wordt in overleg met werkgever,
                    werknemer of zelfstandig ondernemer gekeken naar mogelijkheden om:
                </p>

                <div className="grid grid-cols-3 gap-8 mx-24 my-16 text-center">
                    <div className="rounded-md bg-green-light p-20">
                        <p>
                            Oorzaken van verzuim goed in beeld te krijgen en door inzet van onze
                            deskundigheid en effectieve interventies het verzuim te verlagen en
                            re-integratie van u of uw medewerkers te bespoedigen.
                        </p>
                    </div>
                    <div className="rounded-md bg-green-light p-16">
                        <p>
                            De gezondheid van werknemers te borgen door inzet van preventie op de
                            verschillende van belang zijnde aspecten. Deze preventiemaatregelen
                            worden steeds specifiek toegespitst op de sector en de functie
                            waarbinnen u of uw werknemers werkzaam zijn.
                        </p>
                    </div>
                    <div className="rounded-md bg-green-light p-16">
                        <p>
                            De arbeidsomstandigheden zodanig in te richten dat de gezondheid van u
                            of uw medewerkers verbeterd kan worden of maximaal ondersteund kan
                            worden.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 mx-24 my-12 p-12 bg-green-pastel text-center rounded-md">
                    <p>
                        De gezondheid van uw medewerkers of uzelf te vergroten op korte én langere
                        termijn, zodat bereikte gezondheidswinst duurzaam behouden blijft.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8 mx-24 text-center">
                    <div className="rounded-md bg-green-light p-16">
                        <p>
                            Geldende wet- en regelgeving rond verzuim, re-integratie, dreigende
                            arbeidsongeschiktheid en de daarbij betrokken (juridische) procedures
                            helder in kaart te brengen. Door inzet van onze experts heeft u sneller
                            een overzicht van de (wettelijke) mogelijkheden, waardoor u de
                            vermijdbare kosten tijdig kunt identificeren en onnodig tijdverlies rond
                            verzuim, reïntegratie en bepaling van arbeidsongeschiktheid kunt
                            voorkomen.
                        </p>
                    </div>
                    <div className="rounded-md bg-green-light p-16">
                        <p>
                            Geldende wet- en regelgeving rond (letsel)schade door een ongeval en de
                            daarbij betrokken (juridische) procedures helder in kaart te brengen.
                            Door inzet van onze experts heeft u sneller een overzicht van de
                            (wettelijke) mogelijkheden, waardoor u de vermijdbare kosten tijdig kunt
                            identificeren en onnodig tijdverlies rond verzuim en bepaling van
                            arbeidsongeschiktheid a.g.v. letselschade van uzelf of uw medewerker
                            kunt voorkomen.
                        </p>
                    </div>
                    <div className="rounded-md bg-green-light p-16">
                        <p>
                            U te begeleiden bij diversiteitsvraagstukken op het gebied van verzuim,
                            ziekte, reïntegratie, gezondheidsbevordering & preventie of dreigende
                            arbeidsongeschiktheid. Gezondd beschikt over specifieke deskundigheid op
                            het terrein van diversiteitsbeleid in relatie tot het beperken van
                            verzuim, het bespoedigen van re-integratie en ondersteuning voor
                            letselschadeslachtoffers, waarbij rekening gehouden wordt met de
                            interculturele verschillen van werknemers.
                        </p>
                    </div>
                </div>
                <div className="rounded-md bg-gray-50 p-16 my-24">
                    <p className="ml-10 mr-72">
                        Uw vragen op het gebied van werk en gezondheid, voor uzelf of uw
                        medewerkers, worden door Gezondd snel beantwoord door onze bedrijfsartsen,
                        verzuim- en reïntegratie experts, klinisch arbeidsgeneeskundigen (IKA Ned),
                        verzekeringsartsen, medische adviseurs, letselschade experts en deskundigen
                        op het gebied van diversiteit.
                    </p>
                    <Button
                        label="Voor meer vragen"
                        className="bg-blue-aqua h-12 w-40 rounded-3xl ml-36"
                    />
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
