import React from "react";

// components
import Head from "next/head";
import { Nav } from "../components/nav";
import { Button } from "../components/button";
import { Footer } from "../components/footer";

export default function Over() {
    return (
        <>
            <Head />
            <Nav />
            <div>
                Gezondd heeft als missie om op een positieve manier een bijdrage te leveren aan
                arbeid en gezondheid in Nederland voor werkgevers, werknemers en de meer dan één
                miljoen zelfstandigen en ondernemers, een groep die vaak vergeten wordt.
            </div>
            <Footer />
        </>
    );
}
