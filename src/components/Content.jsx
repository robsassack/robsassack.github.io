function Content() {
  return (
    <section className='content' aria-labelledby='work-experience-heading'>
      <h2 id='work-experience-heading'>Work Experience</h2>
      <div className='work'>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>State of Michigan</span>
            <span className='title'>Software Developer</span>
          </div>
          <p className='job-dates'>Apr 2023 - Present</p>
          <p className='job-description'>Builds CI/CD pipelines and automation in Azure DevOps using Python, PowerShell, and REST API integrations, and develops Salesforce platform features in Apex and Lightning Web Components.</p>
        </div>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>MobileIT, Michigan State University, IBM</span>
            <span className='title'>IT Support Roles</span>
          </div>
          <p className='job-dates'>Jun 2019 - May 2022</p>
          <p className='job-description'>Remote and on-site technical support across consulting clients, executive-level university staff, and enterprise deskside environments.</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
