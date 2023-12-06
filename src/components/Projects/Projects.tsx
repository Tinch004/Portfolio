import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

interface Project {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    link1: string;
    link2: string;
}

const Projects = () => {

    const proyectos: Project[] = [
        {

            id: 1,
            titulo: "Hotel Hunt",
            descripcion: "HotelHunt es una plataforma eficiente para buscar y reservar hoteles. Ofrece a los usuarios una experiencia personalizada con opciones de filtrado y pagos seguros. Los roles de usuario, administrador y superadministrador brindan funcionalidades adaptadas a cada necesidad.",
            imagen: "ruta/a/la/imagen1.jpg",
            link2: "https://github.com/usuario/proyecto1",
            link1: "https://proyecto1.com"
        },
        {
            id: 2,
            titulo: "Proyecto 2",
            descripcion: "Descripción del Proyecto 2.",
            imagen: "ruta/a/la/imagen2.jpg",
            link2: "https://github.com/usuario/proyecto2",
            link1: "https://proyecto2.com"
        },
        {
            id: 3,
            titulo: "Proyecto 3",
            descripcion: "Descripción del Proyecto 3.",
            imagen: "ruta/a/la/imagen3.jpg",
            link2: "https://github.com/usuario/proyecto3",
            link1: "https://proyecto3.com"
        }
    ]



    const peticion = async () => {
        try {


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        peticion()
    }, [])


    return (

        <div>
            {
                proyectos.map(project => {
                    return (
                        <ProjectCard
                            key={project.id}
                            titulo={project.titulo}
                            descripcion={project.descripcion}
                            imagen={project.imagen}
                        />
                    )
                })
            }
        </div>)


}

export default Projects;