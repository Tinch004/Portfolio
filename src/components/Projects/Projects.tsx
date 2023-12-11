
import { useEffect } from "react";
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
            imagen: "https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926545/Hotel_Hunt_ondmg0.png",
            link2: "https://github.com/usuario/proyecto1",
            link1: "https://hotelhunt.com.ar"
        },
        {
            id: 2,
            titulo: "Proyecto 2",
            descripcion: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists ofrecommended tracks based on your existing playlists and more",
            imagen: "https://res.cloudinary.com/dqyj6zstv/image/upload/v1701927256/Screenshot_2022-09-20_at_11.44_1_jsqsmi.png",
            link2: "https://github.com/usuario/proyecto2",
            link1: "https://proyecto2.com"
        },
        {
            id: 3,
            titulo: "Proyecto 3",
            descripcion: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists ofrecommended tracks based on your existing playlists and more",
            imagen: "https://res.cloudinary.com/dqyj6zstv/image/upload/v1701927256/Screenshot_2022-09-20_at_11.44_1_jsqsmi.png",
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
                            url={project.link1}
                        />
                    )
                })
            }
        </div>)


}

export default Projects;
