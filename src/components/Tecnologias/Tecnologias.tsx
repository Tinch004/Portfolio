import styles from "./Tecnologias.module.css";

const Tecnologias = () => {






  return (
    <div className={styles.tecnologias}>
      <div className={styles.containerIcons}>
        <div className={styles.box}>
          <div className={styles.circle}></div>
          <div className={styles.circle} style={{ left: '78.27px' }}></div>
          <div className={styles.circle} style={{ left: '162.76px' }}></div>
          <div className={styles.circle} style={{ left: '244.76px' }}></div>
          <div className={styles.circle} style={{ left: '83.24px', top: '75px' }}></div>
          <div className={styles.circle} style={{ left: '151.58px', top: '75px' }}></div>
          <div className={styles.circle} style={{ left: '224.88px', top: '75px' }}></div>
          <div className={styles.circle} style={{ left: '18.64px', top: '75px' }}></div>
          <img src="src\utils\icons\Typescript_logo_2020 1.png" className={styles.icon} style={{ left: '10px', top: '11px' }} />
          <img src="src\utils\icons\Postgresql_elephant 1.png" className={styles.icon} style={{ left: '171.50px', top: '11px' }} />
          <img src="src\utils\icons\Rectangle 2.svg" className={styles.icon} style={{ left: '252px', top: '11px' }} />
          <img src="src\utils\icons\Rectangle 4.png" className={`${styles.icon} ${styles.lighten}`} style={{ left: '232.61px', top: '90px', }} />
          <img src="src\utils\icons\Rectangle 6.png" className={`${styles.icon} ${styles.lighten}`} style={{ left: '93.70px', top: '86px' }} />
          <img src="src\utils\icons\Rectangle 7.png" className={styles.icon} style={{ left: '90px', top: '11px' }} />
        </div>
        <img src="src\utils\icons\sequelize 1.png" className={styles.icon} style={{ left: '26.47px', top: '84px' }} />
        <img src="src\utils\icons\Rectangle 12.png" className={styles.icon} style={{ left: '155.47px', top: '95px' }} />
      </div>
      <div className={styles.container}>

        <div className={styles.centerContainer}>

          <div className={styles.circulo}>
            <img src="src\utils\Logo grande.svg" />
          </div>

        </div>

        <img className={styles.lineas} src="src\utils\Group 1911.svg" alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Tecnologias;
