import LogoNav from "../Logo/LogoNav";
import styles from "./NavBar.module.css";

interface NavBarProps {
  scrollToAbout: React.RefObject<HTMLDivElement>;
  scrollToProjects: React.RefObject<HTMLDivElement>;
  scrollToContact: React.RefObject<HTMLDivElement>;
  scrollToHome: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
  scrollToHome,
}) => {




  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <LogoNav />
      </div>
      <div className={styles.right}>
        <h4 onClick={() => scrollToHome.current?.scrollIntoView({ behavior: "smooth" })}>Home</h4>
        <h4 onClick={() => scrollToAbout.current?.scrollIntoView({ behavior: "smooth" })}>About</h4>
        <h4 onClick={() => scrollToProjects.current?.scrollIntoView({ behavior: "smooth" })}>Projects</h4>
        <h4 onClick={() => scrollToContact.current?.scrollIntoView({ behavior: "smooth" })}>Contact</h4>
      </div>
    </div>
  );
};

export default NavBar;