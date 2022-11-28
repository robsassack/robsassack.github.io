import projectsData from "../projectsData";

function Projects() {
  const projects = projectsData.projects.map((project) => {
    return (
      <a key={project.id} href={project.url} className='projects--link'>
        <div className='projects--item'>{project.title}</div>
      </a>
    );
  });

  return <div className='projects'>
    <h2>Projects</h2>
    <div className="projects--container">
      {projects}
    </div>
  </div>;
}

export default Projects;
