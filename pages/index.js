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
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>
            <section className="flex flex-col items-end flex-1 w-full h-screen bg-home bg-cover homepage">
                <Nav></Nav>
                <div className="text-white font-varela w-5/12 justify-end mb-64 mt-96 mr-20 ">
                    <p className="text-6xl text-left">
                        Ambities realiseren door optimaal presteren
                    </p>
                    <p className="my-8 text=left w-10/12 leading-relaxed tracking-widest">
                        Gezondd ondersteunt organisaties en haar medewerkers om vitaal en inzetbaar
                        te blijven. Een goede gezondheid is immers de basis om optimaal te kunnen
                        blijven werken of te ondernemen.
                    </p>
                    <Button
                        label="Over Gezondd"
                        className="bg-green-pastel px-8 py-3 rounded-3xl ml-60 tracking-wider"
                    />
                </div>
                <div className="w-full mt-4">
                    <a href="#intro">
                        <svg
                            className="animate-bounce w-6 h-6 text-white mx-auto"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </a>
                </div>
            </section>

            <section className="bg-white mx-96" id="intro">
                <p className="text-2xl my-24 tracking-widest text-left">
                    Gezondd is dé expert als het gaat om inzet van maatwerk (medische) expertise op
                    het snijvlak van gezondheid en arbeid. Er wordt in overleg met werkgever,
                    werknemer of zelfstandig ondernemer gekeken naar mogelijkheden om:
                </p>
                <ul className="list-disc mx-6 text-lg">
                    <li className="mb-4">
                        Oorzaken van verzuim goed in beeld te krijgen en door inzet van onze
                        deskundigheid en effectieve interventies het verzuim te verlagen en
                        re-integratie van u of uw medewerkers te bespoedigen.
                    </li>
                    <li className="mb-4">
                        De gezondheid van uw medewerkers of uzelf te vergroten op korte én langere
                        termijn, zodat bereikte gezondheidswinst duurzaam behouden blijft.
                    </li>
                    <li className="mb-4">
                        De arbeidsomstandigheden zodanig in te richten dat de gezondheid van u of uw
                        medewerkers verbeterd kan worden of maximaal ondersteund kan worden.
                    </li>
                    <li className="mb-4">
                        De gezondheid van werknemers te borgen door inzet van preventie op de
                        verschillende van belang zijnde aspecten. Deze preventiemaatregelen worden
                        steeds specifiek toegespitst op de sector en de functie waarbinnen u of uw
                        werknemers werkzaam zijn.
                    </li>
                    <li className="mb-4">
                        Geldende wet- en regelgeving rond verzuim, re-integratie, dreigende
                        arbeidsongeschiktheid en de daarbij betrokken (juridische) procedures helder
                        in kaart te brengen. Door inzet van onze experts heeft u sneller een
                        overzicht van de (wettelijke) mogelijkheden, waardoor u de vermijdbare
                        kosten tijdig kunt identificeren en onnodig tijdverlies rond verzuim,
                        reïntegratie en bepaling van arbeidsongeschiktheid kunt voorkomen.
                    </li>
                    <li className="mb-4">
                        Geldende wet- en regelgeving rond (letsel)schade door een ongeval en de
                        daarbij betrokken (juridische) procedures helder in kaart te brengen. Door
                        inzet van onze experts heeft u sneller een overzicht van de (wettelijke)
                        mogelijkheden, waardoor u de vermijdbare kosten tijdig kunt identificeren en
                        onnodig tijdverlies rond verzuim en bepaling van arbeidsongeschiktheid
                        a.g.v. letselschade van uzelf of uw medewerker kunt voorkomen.
                    </li>
                    <li className="mb-4">
                        U te begeleiden bij diversiteitsvraagstukken op het gebied van verzuim,
                        ziekte, reïntegratie, gezondheidsbevordering & preventie of dreigende
                        arbeidsongeschiktheid. MyHealth beschikt over specifieke deskundigheid op
                        het terrein van diversiteitsbeleid in relatie tot het beperken van verzuim,
                        het bespoedigen van re-integratie en ondersteuning voor
                        letselschadeslachtoffers, waarbij rekening gehouden wordt met de
                        interculturele verschillen van werknemers.
                    </li>
                </ul>
            </section>

            <section>
                <div className="rounded-md bg-gray-50 p-20 my-28 w-full flex">
                    <p className="ml-10 mr-36 mt-4 w-7/12 tracking-wider text-lg">
                        Uw vragen op het gebied van werk en gezondheid, voor uzelf of uw
                        medewerkers, worden door Gezondd snel beantwoord door onze bedrijfsartsen,
                        verzuim- en reïntegratie experts, klinisch arbeidsgeneeskundigen (IKA Ned),
                        verzekeringsartsen, medische adviseurs, letselschade experts en deskundigen
                        op het gebied van diversiteit.
                    </p>
                    <Button
                        label="Voor meer vragen"
                        className="bg-blue-aqua h-16 w-80 my-8 mx-20 rounded-full font-bold text-white drop-shadow-lg"
                    />
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
