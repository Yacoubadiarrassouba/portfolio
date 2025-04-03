import Title from "./Title"

import img1 from '../assets/projects/App_Trello.png';
// import img2 from '../assets/projects/Dashbord.png';
import img3 from '../assets/projects/My_shop.png';
import img4 from '../assets/projects/Post-it.png';
import img5 from '../assets/projects/Service.png';
// import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'TRELLTECH',
        description: 'Créer une application de gestion de projet similaire à Trello en utilisant l\'API Trello.',
        technologies: ['React Native'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    // {
    //     id: 2,
    //     title: 'Plateforme E-commerce',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    //     technologies: ['Next.js', 'TypeScript', 'Prisma'],
    //     demoLink: '#',
    //     repoLink: '#',
    //     image: img2,
    // },
    {
        id: 3,
        title: 'Plateforme E-commerce',
        description: 'Développement d\'un site e-commerce complet permettant aux utilisateurs de parcourir, rechercher et acheter des produits en ligne. Le projet inclut une gestion dynamique des produits et une interface utilisateur optimisée pour l\'expérience client',
        technologies: ['HTML', 'CSS', 'PHP', 'Javascript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Post-it',
        description: 'Le Projet consistait a créer un post-it',
        technologies: ['Vuejs'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Dashboard',
        description: 'Le but de ce projet est de mettre en œuvre une application web qui fonctionne comme Netvibes.',
        technologies: ['React', 'MongoDB', 'Node js'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    // {
    //     id: 6,
    //     title: 'Analyseur de sentiment',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    //     technologies: ['Python', 'Flask', 'NLTK'],
    //     demoLink: '#',
    //     repoLink: '#',
    //     image: img6,
    // },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
