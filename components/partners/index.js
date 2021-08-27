import React from "react";
import Fade from "react-reveal/Fade";

export class Partners extends React.Component {
    render() {
        return (
            <Fade>
                <div className="tracking-widest">
                    <p className="text-center text-3xl my-20">Onze partners</p>
                    <div className="grid grid-cols-7 gap-8 mx-24 mb-20 justify-items-center">
                        <a href="https://www.ika-ned.nl/">
                        <img src="ika.png" alt="IKA Ned en IKA Academy" className="w-36" />
                        </a>
                        <a href="https://centrummedischeexpertise.nl/">
                        <img
                            src="cme.png"
                            alt="Centrum voor Medische Expertise"
                            className="w-36 mt-3"
                        />
                        </a>
                        <img src="sanacare.png" alt="Sanacare" className="w-40 mt-12" />
                        <a href="https://sanacare.nu/">
                        <img
                            src="letseladvies.png"
                            alt="Randstad Letselschade en Advies"
                            className="w-44 mt-6"
                        />
                        </a>
                        <a href="https://letseladvies.nl/">
                        <img
                            src="interfocus.png"
                            alt="Inter-Focus Intercultureel Expertisecentrum"
                            className="w-42 h-42 mt-1 ml-4"
                        />
                        </a>
                        <a href="https://inter-focus.nl/">
                        <img
                            src="arbo.png"
                            alt="Stichting Praktijkopleiding Arbo Professionals"
                            className="w-32 h-32 "
                        />
                        </a>
                        <a href="http://oudegrachtgroep.nl/CMS/Home/show.do?ctx=764482,766810">
                        <img src="oude-gracht.png" alt="Oude Gracht Groep" className="w-42 h-42" />
                        </a>
                    </div>
                </div>
            </Fade>
        );
    }
}
