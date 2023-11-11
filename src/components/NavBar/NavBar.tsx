import LogoNav from "../Logo/LogoNav";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <LogoNav />
      </div>
      <div className={styles.right}>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Projects</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
};

export default NavBar;
