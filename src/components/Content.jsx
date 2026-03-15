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
        </div>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>MobileIT</span>
            <span className='title'>IT Technician</span>
          </div>
          <p className='job-dates'>Oct 2021 - May 2022</p>
        </div>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>MSU</span>
            <span className='title'>Support Analyst</span>
          </div>
          <p className='job-dates'>Dec 2020 - Jun 2021</p>
        </div>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>IBM</span>
            <span className='title'>Support Technician</span>
          </div>
          <p className='job-dates'>Jun 2019 - Apr 2020</p>
        </div>
        <div className='job'>
          <div className='jobs'>
            <span className='company'>WMU</span>
            <span className='title'>Student Technician</span>
          </div>
          <p className='job-dates'>Aug 2018 - Apr 2019</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
