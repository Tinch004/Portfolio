import styles from './ProjectCard.module.css'


const ProjectCard = () => {
    return (

        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>


                <div style={{ backgroundImage: 'radial-gradient( 50% 50% at 50% 50%,#763cac 0%,rgba(50, 15, 133, 0) 100%);' }}></div>

                <div style={{
                    width: 582.88, height: 341, left: 587, top: 191, position: 'absolute', overflow: 'hidden', borderRadius: 29,
                }}>

                    <div style={{ width: 582.88, height: 341, left: 0, top: 0, position: 'absolute' }}>
                        <div style={{ width: 582.88, height: 341, left: 0, top: 0, position: 'absolute', background: '#2B215A', borderRadius: 10 }} />
                        <div style={{ width: 642.64, height: 380.17, left: -29.88, top: -29.10, position: 'absolute', background: '#2B0B3A', borderRadius: 10 }} />
                    </div>
                    <img style={{ width: 568, height: 354, left: 44, top: 30, position: 'absolute', borderRadius: 15 }} src="src\utils\Hotel Hunt.png" />
                </div>

                <div style={{ width: 669, height: 165, left: 0, top: 315, position: 'absolute' }}>
                    <div style={{ width: 669, height: 165, left: 0, top: 0, position: 'absolute', background: 'radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(104.78, 58.65, 146.62, 0.20) 0%, rgba(109.97, 190.80, 244.37, 0.04) 77%, rgba(69.95, 144.07, 212.50, 0) 100%)', borderRadius: 14, backdropFilter: 'blur(80px)' }} />
                    <div style={{ width: 669, height: 165, left: 0, top: 0, position: 'absolute', background: 'radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(104.78, 58.65, 146.62, 0.20) 0%, rgba(109.97, 190.80, 244.37, 0.04) 77%, rgba(69.95, 144.07, 212.50, 0) 100%)', borderRadius: 14, backdropFilter: 'blur(80px)' }} />
                </div>

                <div style={{ width: 622, height: 333, left: 2, top: 215, position: 'absolute' }}>
                    <div className={styles.texto} style={{ left: 32, top: 126, position: 'absolute', color: '#CCD6F6', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>
                        "HotelHunt" es una plataforma eficiente para buscar y reservar <br />hoteles. Ofrece a los usuarios una experiencia personalizada con opciones de filtrado y pagos seguros. Los roles de usuario,
                        <br />administrador y superadministrador brindan funcionalidades
                        <br /> adaptadas a cada necesidad.
                    </div>
                    <div style={{ left: 0, top: 19, position: 'absolute', color: '#CCD6F6', fontSize: 34, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.68, wordWrap: 'break-word' }}>Hotel Hunt</div>
                    <div style={{ left: 0, top: 0, position: 'absolute', color: '#9857D3', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.32, wordWrap: 'break-word' }}>Featured  Project</div>
                    <img style={{ width: 31, height: 31, left: 73, top: 302, position: 'absolute' }} src="src\utils\icons\icon-park-solid_click.svg" />
                    <img style={{ width: 31, height: 31, left: 25, top: 301, position: 'absolute' }} src="src\utils\icons\icon-park-solid_click.svg" />
                </div>

            </div>



        </div >

    );
};

export default ProjectCard;
