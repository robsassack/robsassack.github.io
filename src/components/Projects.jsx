import projectsData from "../projectsData";

function Projects() {
  const projects = projectsData.projects.map((project) => {
    return (
      <a
        key={project.id}
        href={project.url}
        className='projects--link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='projects--item'>
          <p className='projects--title'>{project.title}</p>
          <p className='projects--description'>{project.description}</p>
        </div>
      </a>
    );
  });

  return (
    <section className='projects' aria-labelledby='projects-heading'>
      <h2 id='projects-heading'>Projects</h2>
      <div className='projects--container'>{projects}</div>
    </section>
  );
}

export default Projects;
