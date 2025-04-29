import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-base-100 shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold text-accent">Diarrassouba</a>

                {/* Menu Desktop */}
                <div className="hidden md:flex flex-grow justify-center space-x-6">
                    <a href="#Home" className="hover:text-accent transition">Accueil</a>
                    <a href="#About" className="hover:text-accent transition">À propos</a>
                    <a href="#Projects" className="hover:text-accent transition">Projets</a>
                    <a href="#Contact" className="hover:text-accent transition">Contact</a>
                </div>

                {/* Bouton Mobile */}
                <button
                    className="md:hidden text-accent focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -20 }} 
                    transition={{ duration: 0.3 }} 
                    className="md:hidden bg-base-100 shadow-md p-4 absolute top-16 left-0 right-0"
                >
                    <a href="#Home" className="block py-2 text-center hover:text-accent" onClick={() => setIsOpen(false)}>Accueil</a>
                    <a href="#About" className="block py-2 text-center hover:text-accent" onClick={() => setIsOpen(false)}>À propos</a>
                    <a href="#Projects" className="block py-2 text-center hover:text-accent" onClick={() => setIsOpen(false)}>Projets</a>
                    <a href="#Contact" className="block py-2 text-center hover:text-accent" onClick={() => setIsOpen(false)}>Contact</a>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;