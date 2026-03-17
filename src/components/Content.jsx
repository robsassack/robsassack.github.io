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
          <p className='job-description'>Develops Salesforce applications using Apex and Lightning Web Components, builds DevOps automation scripts and API integrations through Azure DevOps, and manages data corrections across production environments.</p>
        </div>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>MobileIT</span>
            <span className='title'>IT Technician</span>
          </div>
          <p className='job-dates'>Oct 2021 - May 2022</p>
          <p className='job-description'>Diagnosed and resolved software and hardware issues for client staff across multiple sites using remote support tools to minimize downtime.</p>
        </div>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>MSU</span>
            <span className='title'>Support Analyst</span>
          </div>
          <p className='job-dates'>Dec 2020 - Jun 2021</p>
          <p className='job-description'>Provided technical support to executive-level staff remotely and on-site, and streamlined ticket routing through cross-team coordination.</p>
        </div>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>IBM</span>
            <span className='title'>Support Technician</span>
          </div>
          <p className='job-dates'>Jun 2019 - Apr 2020</p>
          <p className='job-description'>Managed IT support tickets and collaborated with distributed teams to resolve technical issues for end users remotely and in person.</p>
        </div>

      </div>
    </section>
  );
}

export default Content;
