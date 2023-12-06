import styles from './ProjectCard.module.css'


const ProjectCard = () => {
    return (
        <div className={styles.container}>

            <div className={styles.izq}>

                <div className={styles.featured}>Featured Project</div>
                <div className={styles.title}>Hotel Hunt</div>
                <div className={styles.backgroundImage}>


                    <div className={styles.description}> HotelHunt es una plataforma eficiente para buscar y reservar hoteles. Ofrece a los usuarios una experiencia personalizada con opciones de filtrado y pagos seguros. Los roles de usuario,
                        administrador y superadministrador brindan funcionalidades adaptadas a cada necesidad.

                    </div>
                </div>




                <div className={styles.buttons}> <img src="src\utils\icons\icon-park-solid_click.svg" alt="" /><img src="src\utils\icons\icon-park-solid_click.svg" alt="" /></div>



            </div>


            <div className={styles.der}><div className={styles.luz}></div>
                <div className={styles.backgroundImageProject}>
                    <img src="src\utils\Hotel Hunt.png" alt="" className={styles.image} />
                </div>



            </div>

        </div>

    );
};

export default ProjectCard;
