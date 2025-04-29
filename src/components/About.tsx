import { motion } from "framer-motion";
import Title from "./Title";
import santos from "../assets/santos.jpeg";
import { CalendarSync, LetterText } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-base-300 p-10 mb-10 md:mb-32"
            id="About"
        >
            <Title title="À propos" />
            <div className="md:h-96 flex justify-center items-center flex-col md:flex-row">
                {/* Image animée */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hidden md:block"
                >
                    <img
                        src={santos}
                        alt=""
                        className="w-96 object-cover rounded-xl shadow-lg"
                    />
                </motion.div>

                {/* Sections animées */}
                <div className="md:ml-8 space-y-6">
                    {aboutSections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">{section.icon}</div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                                <p className="text-sm">{section.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default About;