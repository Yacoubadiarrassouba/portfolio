import { motion } from "framer-motion";
import Title from "./Title";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgLARAVEL from "../assets/techno/laravel.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgBOOTSTRAP from "../assets/techno/Bootstrap.png";
import imgFLUTTER from "../assets/techno/flutter.png";
import imgVUE from "../assets/techno/Vue.js.png";
import imgFLASK from "../assets/techno/flask.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "Bootstrap", image: imgBOOTSTRAP },
    { id: 8, name: "Laravel", image: imgLARAVEL },
    { id: 9, name: "Next.js", image: imgNEXT },
    { id: 10, name: "Flutter", image: imgFLUTTER },
    { id: 11, name: "Vue.js", image: imgVUE },
    { id: 12, name: "Flask", image: imgFLASK },
];

const Experiences = () => {
    return (
        <div id="Experiences" className="py-16 overflow-hidden">
            <Title title="Compétences" />

            <motion.div
                className="flex gap-12 mt-10"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }}
            >
                {/* On répète les skills deux fois pour créer un effet infini */}
                {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex flex-col items-center flex-shrink-0">
                        <div className="w-24 h-24 p-2 rounded-full border-4 border-accent shadow-lg bg-white flex items-center justify-center">
                            <img src={skill.image} alt={skill.name} className="object-cover h-16 w-16" />
                        </div>
                        <span className="mt-2 text-md font-semibold">{skill.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Experiences;
