import styles from './ProjectsStyles.module.css';
import resume from '../../assets/jfx.png';
import videoplayer from '../../assets/viberr.png';
import portfolio from '../../assets/avatar.png';
import ProjectCard from '../../Common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={resume}
          link="https://github.com/mpmpranavraj/ResumeJavaFX"
          h3="Resume App"
          p="Resume using JavaFX"
        />
        <ProjectCard
          src={videoplayer}
          link="https://github.com/mpmpranavraj/VideoPlayer"
          h3="Video PLayer"
          p="India's Cultural Significance Video Player"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/mpmpranavraj/Pranav-s-Portfolio"
          h3="Portfolio"
          p="Portfolio using ReactJS"
        
        />
       
      </div>
    </section>
  );
}

export default Projects;