import React from "react";
import Fade from "react-reveal/Fade";

// components
import Head from "next/head";
import Nav from "../../components/nav/index.jsx";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";

export default function Werkgever() {
    return (
        <>
            <Head>
                <title>Werkgever</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>

            <Nav />
            <section className="flex flex-col items-end flex-1 w-full h-full">
                <Fade>
                    <div className="bg-werkgeverdark lg:bg-werkgever bg-no-repeat bg-cover bg-center lg:h-3/5">
                        <p className="text-xl mt-28 mb-24 mx-6 lg:text-2xl text-white text-left lg:font-bold text-left lg:my-52 lg:mx-72 tracking-widest">
                            Gezondd ondersteunt organisaties en bedrijven die onderschrijven dat het
                            succes van de eigen organisatie in kritische mate wordt bepaald door de
                            gezondheid en duurzame inzetbaarheid van hun medewerkers. Deze
                            werkgevers onderscheiden zich door een proactieve houding als het gaat
                            om het borgen van de gezondheid en vitaliteit van hun medewerkers. Zij
                            moedigen de eigen verantwoordelijkheid van medewerkers aan om steeds aan
                            de eigen vitaliteit en inzetbaarheid te blijven werken. Daarbij
                            ondersteunen deze werkgevers hun medewerkers met de daarbij behorende
                            instrumenten, teneinde dit doel te bereiken.
                        </p>
                    </div>
                </Fade>
            </section>
            <section className="flex flex-col tracking-widest">
                <div className="mx-6 lg:mx-64">
                    <Fade>
                        <p className="lg:mt-28 mt-12 text-lg">
                            Werkgevers kunnen bij Gezondd terecht om hun organisatie vitaal en
                            gezond te houden in de Meest brede zin van het woord. Onze experts
                            werken op het snijvlak van arbeid en gezondheid en maken daarbij steeds
                            gebruik van verschillende invalshoeken. Afhankelijk van de vraag vanuit
                            de werkgever kunnen de Gezondd experts zich richten op de medische
                            aspecten, verzuim- en reïntegratie, arbobeleid, juridische aspecten
                            (wet- en regelgeving) en interculturele expertise. Gezondd experts
                            kunnen werkgevers begeleiden bij hun beleidsvorming én begeleiden op
                            verzoek van de werkgever tevens individuele werknemers.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="mt-4 text-lg">Gezondd ondersteunt werkgevers o.a. bij:</p>
                        <ul className="list-disc mx-6 text-lg">
                            <li>
                                het beperken van verzuim en het versnellen van re-integratie van
                                medewerkers
                            </li>
                            <li>
                                het toetsten of omschrijven van een deskundig arbobeleid specifiek
                                toegespitst op uw organisatie in de sector, waarbinnen u werkzaam
                                bent
                            </li>
                            <li>
                                het toetsen of opstellen van een ziekteverzuimbeleidsplan, teneinde
                                verzuim te minimaliseren en re-integratie van medewerkers te
                                bevorderen
                            </li>
                            <li>
                                het identificeren van preventieve en curatieve maatregelen ter
                                bevordering van de gezondheid van medewerkers en daarbij een basis
                                te leggen voor duurzame inzetbaarheid van uw medewerkers
                            </li>
                        </ul>
                        <p className="mt-4 text-lg">
                            Gezondd bedrijfsartsen, verzuim- en reïntegratie-experts, klinisch
                            arbeidsgeneeskundigen, medische adviseurs en diversiteitsexperts
                            begeleiden op uw verzoek ook individuele medewerkers bij een spoedig
                            herstel en brengen in kaart wat hierbij noodzakelijk wordt geacht.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-3xl mt-16">Verzuimbegeleiding met visie</p>
                        <p className="mt-6 text-lg">
                            Gezondd biedt op verzoek van de werkgever verzuimbegeleiding door inzet
                            van een reïntegratie-expert of bedrijfsarts. Wij doen dat met de
                            overtuiging dat voorkomen beter is dan genezen. Bij elke werknemer, die
                            verzuimt, vragen we ons steeds af: had dit verzuim voorkomen kunnen
                            worden? En zo ja, hoe kunnen we de werkgever helpen bij preventie van
                            dergelijk verzuim? En tegelijk werken we samen met werknemer en
                            werkgever aan een snel herstel en een optimale re-integratie ten behoeve
                            van een duurzame inzetbaarheid van betreffende werknemer.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-3xl mt-16">Reïntegratie zonder stagnatie</p>
                        <p className="mt-6 text-lg">
                            Stagneert de reïntegratie om medische redenen, of wellicht vanwege niet
                            medische oorzaken? Gezondd werkt samen met experts, werkzaam vanuit
                            verschillende invalshoeken, om dergelijke problemen op te lossen. Zijn
                            er medische of psychologische redenen voor het verzuim? Dan werkt
                            Gezondd nauw samen met haar zusterorganisatie IKA Ned. Vanuit IKA Ned
                            zijn gespecialiseerde bedrijfsartsen werkzaam samen met medisch
                            specialisten en burn-out deskundigen. Zij adviseren medewerker en
                            werkgever hoe de blokkades weg te nemen.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-3xl mt-16">Verzuim en personeelsbeleid</p>
                        <p className="mt-6 text-lg">
                            Verzuim hangt samen met het personeelsbeleid in een bedrijf en kan voor
                            een belangrijk deel worden voorkomen. Hierbij kan gedacht worden aan:
                        </p>
                    </Fade>
                    <Fade>
                        <ul className="list-disc mx-6 text-lg">
                            <li>Een goed verzuimbeleid, dat duidelijk is voor iedereen. </li>
                            <li>
                                Het herkennen van, en reageren op, vroege signalen van dreigend
                                verzuim.
                            </li>
                            <li>
                                Het creëren van een gezonde en veilige werkomgeving waarin
                                werknemers serieus worden genomen.
                            </li>
                        </ul>
                    </Fade>
                    <Fade>
                        <p className="mt-4 text-lg">
                            Een goed ziekteverzuimbeleidsplan bestaat uit drie onderdelen:
                        </p>
                        <ul className="list-disc mx-6 text-lg">
                            <li>
                                Preventief beleid, ter verbetering van de verdeling tussen
                                werkbelasting en belastbaarheid van personeel.
                            </li>
                            <li>
                                Curatief beleid, ter bevordering van het herstel van personeel en
                                spoedige werkhervatting.
                            </li>
                            <li>Een goede registratie en administratie.</li>
                        </ul>
                    </Fade>
                    <Fade>
                        <p className="text-3xl mt-16">Arbobeleid</p>
                        <p className="mt-6 text-lg">
                            Arbobeleid is het beleid dat een werkgever binnen zijn bedrijf voert op
                            het gebied van arbeidsomstandigheden. Een goed arbobeleid beperkt de
                            gezondheidsrisico’s in het bedrijf, vermindert het ziekteverzuim en
                            bevordert de reïntegratie na ziekte.
                        </p>
                        <p className="mt-4 text-lg">
                            Werkgevers zijn verplicht ervoor te zorgen dat hun werknemers veilig en
                            gezond kunnen werken. De mate van bescherming die zij moeten bieden is
                            door de overheid vastgelegd in de Arbowet, het Arbobesluit en de
                            Arboregeling. Om deze wetten na te leven dient elk bedrijf een concreet
                            arbobeleid te voeren. Dit wordt opgesteld in samenwerking met de
                            vertegenwoordiging van werknemers.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="mt-4 text-lg">
                            Gezondd ondersteunt bij de volgende onderdelen:
                        </p>
                        <ul className="list-disc mx-6 mt-4 text-lg">
                            <li>
                                Een Risico-inventarisatie en -evaluatie (RI&E) – In een RI&E staat
                                welke risico’s er binnen het bedrijf zijn ten aanzien van de
                                veiligheid en gezondheid van werknemers.
                            </li>
                            <li>
                                Voortvloeiend uit deze inventarisatie moet een Plan van Aanpak
                                worden opgesteld met daarin de maatregelen, die genomen zullen
                                worden, om de risico’s aan te pakken.
                            </li>
                            <li>
                                Periodiek Arbeidsgezondheidskundig Onderzoek (PAGO) – Werknemers
                                moeten de mogelijkheid hebben om een periodiek
                                arbeidsgezondheidskundig onderzoek (PAGO) te ondergaan.
                            </li>
                            <li>
                                Preventiemedewerker – Bedrijven zijn verplicht om ten minste één
                                werknemer aan te wijzen als preventiemedewerker.
                            </li>
                            <li>
                                Bedrijfshulpverlening – Binnen het bedrijf moet minimaal één
                                bedrijfshulpverlener (bhv’er) aanwezig zijn.
                            </li>
                            <li>
                                Voorlichting – Bedrijven moeten hun werknemers voorlichting en
                                instructies geven over veilig en gezond werken.
                            </li>
                            <li>
                                Arbodeskundige – Werkgevers moeten toegang verlenen tot een
                                arbodeskundige, bijvoorbeeld een bedrijfsarts of arbeidshygiënist.
                            </li>
                        </ul>
                    </Fade>
                    <Fade>
                        <p className="text-3xl mt-16">Duurzame inzetbaarheid</p>
                    </Fade>
                    <p className="mt-6">
                        <Fade>
                            <p className="italic text-lg">Op weg naar duurzame inzetbaarheid</p>
                            <p className="mt-4">
                                Bedrijven en organisaties, die werk maken van de gezondheid,
                                betrokkenheid en ontwikkeling van hun medewerkers, plukken daar vaak
                                direct de vruchten van. Het zorgt voor meer werkplezier, minder
                                ziekteverzuim en een hogere arbeidsproductiviteit. Mensen zullen
                                steeds langer doorwerken en de gemiddelde leeftijd op de werkvloer
                                stijgt. Tegelijkertijd vragen economische en technologische
                                ontwikkelingen wendbaarheid van organisaties. Werkgevers en
                                werknemers, die ervoor zorgen dat ze fit blijven voor het steeds
                                sneller veranderende werk, zijn op weg naar duurzame inzetbaarheid.
                            </p>
                        </Fade>
                        <Fade>
                            <p className="italic mt-6 text-lg">Zelf aan de slag</p>
                            <p className="text-lg mt-4">
                                Gezondd kan u helpen bij de volgende aspecten:
                            </p>
                            <ul className="list-disc mx-6 text-lg">
                                <li>
                                    Gezond eten & bewegen zorgt voor minder verzuim en meer energie
                                    op het werk.
                                </li>
                                <li>
                                    Zingeving in het werk door ruimte voor eigen
                                    verantwoordelijkheid, vakmanschap en ideeën vanuit medewerkers.
                                    Betrokken bij het werk, betrokken bij elkaar.
                                </li>
                                <li>
                                    Werkplezier: Autonomie in het werk, verbinding met collega’s en
                                    ruimte voor Vakmanschap. Dit zijn cruciale factoren die
                                    bijdragen aan bevorderen van werkplezier en verminderen van
                                    werkstress.
                                </li>
                                <li>
                                    Fysieke belasting: Fysieke over- en onderbelasting zorgt voor
                                    veel uitval. Gerichte maatregelen op basis van kennis over de
                                    risico’s van bijvoorbeeld te zwaar tillen of te lang zitten,
                                    kunnen dit voorkomen.
                                </li>
                            </ul>
                        </Fade>
                    </p>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 bg-gray-light px-6 lg:mx-4 mt-16">
                    <Fade>
                        <div className="lg:ml-64 tracking-widest leading-relaxed">
                            <p className="text-3xl mt-16">Diversiteit</p>
                            <p className="mt-6 text-lg">
                                Gezondd beschikt over re-integratie-adviseurs, die werkgevers en
                                werknemers ondersteunen met arbeidsdeskundig advies en
                                herstelcoaching t.b.v. medewerkers of letselschadeslachtoffers met
                                een niet-westerse culturele achtergrond. Gezondd kan in specifieke
                                zin werknemers en letselschadeslachtoffers helpen, die door een
                                beperking, aandoening, ziekte of letselschade problemen ondervinden
                                bij het vinden van perspectief of het verrichten van werk. Daarnaast
                                ondersteunt Gezondd organisaties en bedrijven bij het creëren van
                                een inclusieve bedrijfscultuur, waar wij op verzoek tevens
                                (In-Company) trainingen voor geven.
                            </p>
                            <p className="my-6 text-lg">
                                Gezondd werkt voor deze unieke dienstverlening samen met haar
                                zusterorganisatie Inter-Focus.
                            </p>
                        </div>
                        <div className="lg:mr-64">
                            <img
                                className="w-3/5 h-4/5 m-16 float-right"
                                src="/achter-pc.png"
                            ></img>
                        </div>
                    </Fade>
                </div>

                <div className="mx-6 lg:mx-64 mb-20">
                    <Fade>
                        <p className="text-3xl mt-16">Duurzame inzetbaarheid</p>
                        <p className="italic mt-6 text-lg">Toxic Incident Counseling</p>
                        <p className="text-lg mt-4">
                            Het is voor bedrijven met het oog op de gezondheid van hun werknemers
                            van groot belang calamiteiten met gevaarlijke stoffen te voorkomen, of
                            adequaat te handelen wanneer ze zich wel voordoen. Incidenten met
                            gevaarlijke stoffen kunnen voorkomen, zelfs wanneer risico’s actief
                            beperkt worden en het arbobeleid daar expliciet rekening mee houdt. Een
                            plotselinge blootstelling aan een gevaarlijke stof kan leiden tot grote
                            onrust binnen een bedrijf. Vaak zijn werknemers bezorgd over hun
                            gezondheid en roept het vragen op wat eraan is gedaan om blootstelling
                            te voorkómen. Voor de werkgever spelen daarnaast ook aspecten als
                            negatieve PR en de financiële consequenties voor de organisatie een
                            belangrijke rol, wanneer onverhoopt calamiteiten met gevaarlijke stoffen
                            hebben plaatsgevonden.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="mt-4 text-lg">
                            Gezondd kan binnen 24 uur een team van deskundigen beschikbaar stellen
                            bij calamiteiten met gevaarlijke stoffen. Het expertteam kan de
                            deskundigen van de eigen Arbodienst van de werkgever of de interne
                            deskundigen ondersteunen en adviseren. Belangrijke voordelen voor de
                            werkgever, om een externe expert in te zetten vanuit Gezondd, is de
                            specialistische kennis die hiermee in huis wordt gehaald en de
                            onpartijdigheid van deze expertise.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="italic text-lg  mt-6">De Werkplek poli</p>
                        <p className="mt-4 text-lg">
                            De ‘Werkplek-poli’ is een dienst die klachten van mensen over het
                            werkklimaat op de werkplekken helpt op te lossen. Gezondd onderzoekt
                            hiervoor de fysieke kenmerken van de werkplek, en praat ook met
                            betrokkenen over de wijze waarop gewerkt wordt.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="mt-4 text-lg">
                            De Werkplek poli is bij uitstek de oplossing bij:
                            <ul className="list-disc mx-6 text-lg">
                                <li>Klachten over lucht en klimaat van op werkplekken.</li>
                                <li>Klachten over tranende, jeukende of droge ogen.</li>
                                <li>
                                    Klachten over eczeem of irritatie van de huid waarbij het
                                    vermoeden bestaat dat de klachten samenhangen met het werk of de
                                    werkplek.
                                </li>
                                <li>
                                    Gezondheidsklachten die bij meerdere werknemers op dezelfde
                                    werkplek of afdeling voorkomen en waarvan men vermoedt dat ze
                                    met het werk samenhangen.
                                </li>
                                <li>
                                    Klachten over de gezondheid die samenhangen met bijzondere
                                    werkplekken zoals zwembaden, scholen en verpleeg- en
                                    verzorgingstehuizen.
                                </li>
                            </ul>
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-3xl mt-16">Keuringen en onderzoek</p>
                        <p className="italic mt-6 text-lg">Preventief Medisch onderzoek</p>
                        <p className="text-lg mt-4">
                            Het Preventief Medisch Onderzoek (PMO) geeft inzicht in de gezondheids-
                            en arbeidsgerelateerde aspecten van inzetbaarheid. Centraal staat het
                            werkvermogen. Gezondd brengt zowel individueel als organisatorisch
                            d.m.v. risicoprofielen de beïnvloedbare risico’s op leefstijl,
                            gezondheid, arbeidsgerelateerde factoren en werkvermogen helder in
                            beeld.
                        </p>
                        <p className="italic mt-6 text-lg">
                            Overige keuringen en gericht periodiek onderzoek
                        </p>
                        <p className="text-lg mt-4">
                            Sommige werkzaamheden gaan gepaard met bijzondere gezondheidsrisico’s.
                            Werknemers, die hiermee te maken hebben, hebben recht op een Gericht
                            Periodiek Onderzoek (GPO).
                        </p>
                    </Fade>
                    <Fade>
                        <p className="italic mt-6 text-lg"> Rijbewijskeuring</p>
                        <p className="text-lg mt-4">
                            Om deel te kunnen nemen aan het gemotoriseerde verkeer in Nederland,
                            moeten rijbewijshouders ‘medisch geschikt’ zijn. Dat wil zeggen dat ze
                            moeten voldoen aan een aantal eisen voor de lichamelijke en geestelijke
                            gezondheid.
                        </p>
                        <p className="mt-4 text-lg">
                            In de volgende gevallen is er een rijbewijskeuring nodig:
                            <ul className="list-disc mx-6 text-lg">
                                <li>
                                    Bij een 75-jarige leeftijd; vervolgens elke vijf jaar bij
                                    verlenging van het rijbewijs.
                                </li>
                                <li>
                                    Bij het beantwoorden van een vraag met ‘ja’ op de Eigen
                                    verklaring.
                                </li>
                                <li>Bij een verandering in de gezondheidssituatie.</li>
                                <li>
                                    Bij aanvraag (examen) en verlenging van rijbewijs C (E)
                                    (vrachtwagen) of D (E) (bus)
                                </li>
                                <li>
                                    Bij aanvraag en verlenging van chauffeurspas taxi en Medibus.
                                </li>
                            </ul>
                        </p>
                    </Fade>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
