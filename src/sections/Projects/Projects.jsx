import styles from './ProjectsStyles.module.css';
import Calculator from '../../assets/Calculator.png';
import Crud from '../../assets/Crud.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Crud}
          link="https://github.com/huzaifasaeedcodes/CRUD"
          h3="CRUD"
          p="Create, Read, Update, Delete"
        />
        <ProjectCard
          src={Calculator}
          link="https://github.com/huzaifasaeedcodes/Calculator"
          h3="Calculator"
          p="Arithmetic Operations"
        />
      </div>
    </section>
  );
}

export default Projects;
