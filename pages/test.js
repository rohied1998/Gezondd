import React from "react";

// components
import Head from "next/head";
import Example from "../components/nav/index.jsx";

export default function BedrijfsartsArboprofessional() {
    return (
        <>
            <Head>
                <title>Bedrijfsarts/Arboprofessional</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>
            <Example />
            Hallo wereld
            {/* <Nav className="fixed block w-screen z-10 bg-white text-black" /> */}
        </>
    );
}
