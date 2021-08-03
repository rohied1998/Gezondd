import React from "react";

export class Partners extends React.Component {
    render() {
        return (
            <div className="tracking-widest">
                <p className="text-center text-3xl my-12">Onze partners</p>
                <div className="grid grid-cols-7 gap-8 mx-24 mb-20 justify-items-center">
                    <img src="ika.png" alt="IKA Ned en IKA Academy" className="w-36" />
                    <img
                        src="cme.png"
                        alt="Centrum voor Medische Expertise"
                        className="w-36 mt-3"
                    />
                    <img src="sanacare.png" alt="Sanacare" className="w-40 mt-12" />
                    <img
                        src="letseladvies.png"
                        alt="Randstad Letselschade en Advies"
                        className="w-44 mt-6"
                    />
                    <img
                        src="interfocus.png"
                        alt="Inter-Focus Intercultureel Expertisecentrum"
                        className="w-42 h-42 mt-1 ml-4"
                    />
                    <img
                        src="arbo.png"
                        alt="Stichting Praktijkopleiding Arbo Professionals"
                        className="w-32 h-32 "
                    />
                    <img src="oude-gracht.png" alt="Oude Gracht Groep" className="w-42 h-42" />
                </div>
            </div>
        );
    }
}
