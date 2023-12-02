import NavBar from "../components/NavBar/NavBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Tecnolgias from "../components/Tecnologias/Tecnologias";
import styles from "./home.module.css";
const Home = () => {


  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img
            className={styles.yo}
            src="src\utils\martinmac-removebg.png "
            alt=""
          />
          <div className={styles.shadow}></div>

          <div className={styles.shadow2}></div>
        </div>

        <div className={styles.container_name}>
          <h1>Hello! I Am</h1>
          <h1 className={styles.bluetext}>Martin Bruno</h1>
        </div>
      </div>
      <div className={styles.container_about}>
        <h1>I'm Fullstack Web Developer</h1>

        <p>
          Full Stack Developer with experience in web and application
          development. I'm proficient in JavaScript, TypeScript, React.js,
          Node.js, Express, Sequelize, PostgreSQL, and agile methodologies. My
          skills include teamwork, data analysis, problem-solving, and
          adaptability
        </p>
      </div>
      <div className={styles.containText}><span className={styles.text1}>I'm currently looking to join a cross-functional team<br /></span><span className={styles.text2}>that values improving people's lives through accessible design </span></div>
      <Tecnolgias />
      <div style={{ width: '100%', color: 'white', fontSize: 50, fontFamily: 'Preahvihear', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>Projects</div>

      <ProjectCard />

    </div>
  );
};

export default Home;
