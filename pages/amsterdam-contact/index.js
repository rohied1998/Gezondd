import React from "react";
import Fade from "react-reveal/Fade";

// components
import Head from "next/head";
import Nav from "../../components/nav/index.jsx";
import { Partners } from "../../components/partners";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

export default function AmsterdamContact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favico.png" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                ></link>
            </Head>

            <Nav />
            <section className="flex flex-col tracking-widest h-full">
                <div className="flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2 mt-32 lg:mb-36 gap-8">
                    <Fade>
                        <div className="lg:ml-64 lg:mt-36 ">
                            <p className="text-3xl">Contact gegevens</p>
                            <p className="mt-6 text-lg">Gezondd BV</p>
                            <p className="text-lg">Amsterdamse bos</p>
                            <p className="text-lg">De cuserstraat 93, 2nd floor</p>
                            <p className="text-lg">1081 CN Amsterdam</p>
                            <p className="text-lg mb-6">Tel: 085 015 0020</p>
                        </div>
                        <div className="lg:justify-self-center lg:mt-16 lg:w-full lg:h-full">
                            <iframe
                                className="h-72 lg:h-full w-full lg:w-full"
                                width="800"
                                height="650"
                                loading="lazy"
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm-JkpN_hxUcR2JNX5xIi0lc&key=AIzaSyDaM3DN_oRGrTHmGYY48JsJ2mU-EhvgYI8"
                            ></iframe>
                        </div>
                    </Fade>
                </div>
            </section>
            <section className="lg:grid flex lg:flex-row flex-col lg:mt-0 tracking-widest bg-gray-light">
                <Fade>
                    <div className="lg:ml-64 mt-20 tracking-widest leading-relaxed">
                        <p className="text-xl lg:text-3xl my-4 text-center lg:text-left lg:my-14">
                            Neem contact met ons op
                        </p>
                    </div>
                    <form className="lg:ml-64" action="#" method="POST">
                        <div className="py-5 text-center lg:text-left">
                            <div className="flex lg:flex-row flex-col gap-6 mt-12 text-gray-300">
                                <div className="text-left col-span-1 w-4/5 mx-8 lg:mx-0 lg:w-2/5 appearance-none label-floating mb-6">
                                    <label className="text-black text-left">Volledige naam</label>
                                    <input
                                        className="mt-4 tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="name"
                                        type="text"
                                        placeholder="Vul hier je volledige naam in"
                                        required
                                    ></input>
                                </div>
                                <div className="text-left col-span-1 w-4/5 mx-8 lg:mx-0 lg:w-2/5 appearance-none label-floating">
                                    <label className="text-black text-left">Email adress</label>
                                    <input
                                        className="mt-4 tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="name"
                                        type="email"
                                        placeholder="Vul hier je email addres in"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="flex lg:flex-wrap flex-col mt-12 lg:mt-0">
                                <div className="text-left w-4/5 mx-8 lg:mx-0 appearance-none label-floating">
                                    <label className="text-black text-left">Uw bericht</label>
                                    <textarea
                                        className="autoexpand tracking-wide py-2 px-4 mb-3 mt-6 lg:mt-0 leading-relaxed appearance-none block w-full lg:w-3/5 border-b border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="message"
                                        type="text"
                                        placeholder=" Vul hier uw bericht in..."
                                    ></textarea>
                                </div>
                            </div>
                            <Button
                                label="Verzenden"
                                className="bg-blue-aqua h-14 w-52 my-6 rounded-full text-white drop-shadow-lg  tracking-widest"
                            />
                        </div>
                    </form>
                </Fade>
            </section>
            <Partners />
            <Footer />
        </>
    );
}
