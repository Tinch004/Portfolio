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


    const [projects, setProjects] = useState<Project[]>([]);

    const peticion = async () => {
        try {
            const { data } = await axios.get<Project[]>('http://localhost:5000/projects')
            setProjects(data)
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
                projects.map(project => {
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