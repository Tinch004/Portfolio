import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css'


interface ProjectCardProps {
    titulo: string;
    descripcion: string;
    imagen: string;
    url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ titulo, descripcion, imagen, url }) => {
    return (
        <Link to={url} target="_blank">
            <div className={styles.container}>

                <div className={styles.izq}>

                    <div className={styles.featured}>Featured Project</div>
                    <div className={styles.title}>{titulo}</div>
                    <div className={styles.backgroundImage}>
                        <div className={styles.description}>
                            {descripcion}
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926614/icon-park-solid_click_zbsirf.svg" alt="" />
                        <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926614/icon-park-solid_click_zbsirf.svg" alt="" />
                    </div>

                </div>
                <div className={styles.der}><div className={styles.luz}></div>
                    <div className={styles.backgroundImageProject}>
                        <img src={imagen} alt="" className={styles.image} />
                    </div>
                </div>

            </div>
        </Link>

    );
};

export default ProjectCard;
