import { motion } from "framer-motion";
import Title from "./Title";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];

const Experiences = () => {
    return (
        <div id="Experiences" className="py-16">
            <Title title="Compétences" />
            
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <div className="w-24 h-24 p-2 rounded-full border-4 border-accent shadow-lg bg-white flex items-center justify-center">
                            <img src={skill.image} alt={skill.name} className="object-cover h-16 w-16" />
                        </div>
                        <span className="mt-2 text-md font-semibold">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experiences;