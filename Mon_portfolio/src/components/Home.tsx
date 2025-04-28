import { Mail, Download } from "lucide-react";
import santos from "../assets/santos.jpeg";

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-accent">Diarrassouba</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur fullstack <br />
                    avec plus d'expériences, utilisant plusieurs <br /> technologies. Contactez-moi si vous avez besoin
                    de mes services.
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <a href="mailto:yacouba.diarrassouba@epitech.eu" className="btn btn-accent md:w-fit flex items-center">
                        <Mail className="w-5 h-5" />
                        Contactez-moi
                    </a>

                    <a href="/CV_DIARRASSOUBA.pdf" download className="btn btn-outline md:w-fit flex items-center">
                        <Download className="w-5 h-5" />
                        Télécharger mon CV
                    </a>
                </div>
            </div>

            <div className="md:ml-60">
                <img src={santos} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }} 
                />
            </div>
        </div>
    );
};

export default Home;