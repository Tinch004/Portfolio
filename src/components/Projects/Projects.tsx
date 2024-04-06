
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
            titulo: "Countries SPA",
            descripcion: "Aplicacion web con un conjunto de características que incluyen: un buscador de países, filtros de actividades, continentes y ordenamiento, así como un formulario de creación de actividades y paginado en la pagina principal.",
            imagen: "https://res.cloudinary.com/dqyj6zstv/image/upload/v1710880166/Desktop_Screenshot_2024.03.19_-_17.29.14.39_lks5qx.png",
            link2: "https://github.com/usuario/proyecto2",
            link1: "https://countries-3jps.onrender.com/"
        },
  
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
