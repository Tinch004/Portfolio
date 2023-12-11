import { useRef } from "react";
import NavBar from "../components/NavBar/NavBar";
import Tecnolgias from "../components/Tecnologias/Tecnologias";
import styles from "./home.module.css";
import Projects from "../components/Projects/Projects.tsx";
import Particles2 from "../components/Particles/Particles.tsx";
import Contact from "../components/Contact/Contact.jsx";






const Home = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div className={styles.home} ref={homeRef} >
      <Particles2 />

      <NavBar
        scrollToAbout={aboutRef}
        scrollToProjects={projectsRef}
        scrollToContact={contactRef}
        scrollToHome={homeRef}
      />
      <div className={styles.container} >
        <div className={styles.image_container} >
          <img

            className={styles.yo}
            src="https://res.cloudinary.com/dqyj6zstv/image/upload/v1701926545/martinmac-removebg_nlo9bw.png"
            alt=""
          />
          <div className={styles.shadow}></div>

          <div className={styles.shadow2}></div>
        </div>

        <div className={styles.container_name} >
          <h1>Hello! I Am</h1>
          <h1 className={styles.bluetext}>Martin Bruno</h1>
        </div>
      </div>
      <div className={styles.container_about} ref={aboutRef}>
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

      <div className={styles.projects}>
        <div ref={projectsRef} style={{ width: '100%', color: 'white', fontSize: 50, fontFamily: 'Preahvihear', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>Projects</div>

        <Projects />

        <Contact />


      </div>


    </div>
  );
};

export default Home;
