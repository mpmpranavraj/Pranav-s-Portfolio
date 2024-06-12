import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import GithubIconsun from "../../assets/github-light.svg";
import GithubIconmoon from "../../assets/github-dark.svg";
import linkedIconsun from "../../assets/linkedin-light.svg";
import linkedIconmoon from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../Common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "dark" ? moon : sun;
  const GithubIcon = theme === "dark" ? GithubIconmoon : GithubIconsun;
  const linkedIcon = theme === "dark" ? linkedIconmoon : linkedIconsun;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Pranav Raj"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Pranav Raj</h1>
        <h2>Aspiring Coder </h2>
        <span>
          <a href="https://github.com/mpmpranavraj" target="_blank">
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/mpmpranavaraj/" target="_blank">
            <img src={linkedIcon} alt="Linkein Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Aspiring Programmer Studying BCA in Christ University.
        </p>
        <a href={CV}>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
