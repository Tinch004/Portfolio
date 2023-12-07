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
          <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926616/Typescript_logo_2020_1_qn73tm.png" className={styles.icon} style={{ left: '10px', top: '11px' }} />
          <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926614/Rectangle_2_b0ldu0.svg" className={styles.icon} style={{ left: '170px', top: '11px' }} />
          <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926615/sequelize_1_hhxnth.png" className={styles.icon} style={{ left: '252px', top: '9px' }} />
          <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926615/Rectangle_12_sgthg2.png" className={`${styles.icon} ${styles.lighten}`} style={{ left: '228px', top: '95px', }} />
          <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926615/Rectangle_6_guwetj.png" className={`${styles.icon} ${styles.lighten}`} style={{ left: '94.70px', top: '86px' }} />
          <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926615/Rectangle_4_x3rps8.png" className={styles.icon} style={{ left: '86px', top: '14px' }} />
        </div>
        <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926614/Postgresql_elephant_1_xbgjup.png" className={styles.icon} style={{ left: '27.47px', top: '84px' }} />
        <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926615/Rectangle_7_oqedgj.png" className={styles.icon} style={{ left: '162px', top: '85px' }} />
      </div>
      <div className={styles.container}>

        <div className={styles.centerContainer}>

          <div className={styles.circulo}>
            <img src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926544/logo_grande_jeofdz.svg" />
          </div>

        </div>

        <img className={styles.lineas} src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926544/Group_1911_wzouq1.svg" alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Tecnologias;
