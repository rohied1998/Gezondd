import React from "react";
import Fade from "react-reveal/Fade";

export class Partners extends React.Component {
    render() {
        return (
            <Fade>
                <div className="lg:tracking-widest">
                    <p className="text-center text-3xl my-20">Onze partners</p>
                    <div className="flex flex-col lg:grid lg:grid-cols-3  gap-8 mx-24 mb-20 justify-items-center">
                        <a href="./ika-ned/">
                        <img src="ika.png" alt="IKA Ned en IKA Academy" className="w-36" />
                        </a>
                        <a href="./bedrijfsarts-arboprofessionals/">
                        <img
                            src="bedrijfsartsopmaat.png"
                            alt="Bedrijfs arts op maat"
                            className="w-36 mt-9"
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
