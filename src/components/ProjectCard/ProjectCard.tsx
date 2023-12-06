import styles from './ProjectCard.module.css'


interface ProjectCardProps {
    titulo: string;
    descripcion: string;
    imagen: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ titulo, descripcion, imagen }) => {
    return (
        <div className={styles.container}>

            <div className={styles.izq}>

                <div className={styles.featured}>Featured Project</div>
                <div className={styles.title}>{titulo}</div>
                <div className={styles.backgroundImage}>


                    <div className={styles.description}>
                        {descripcion}
                    </div>
                </div>




                <div className={styles.buttons}> <img src="src\utils\icons\icon-park-solid_click.svg" alt="" /><img src="src\utils\icons\icon-park-solid_click.svg" alt="" /></div>



            </div>


            <div className={styles.der}><div className={styles.luz}></div>
                <div className={styles.backgroundImageProject}>
                    <img src={imagen} alt="" className={styles.image} />
                </div>



            </div>

        </div>

    );
};

export default ProjectCard;
