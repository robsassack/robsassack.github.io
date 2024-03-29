import profilePic from '../assets/images/1631740100388.jfif';

function Header() {
  return (
    <div className='header'>
      <div className='description'>
        <p className='myName'>Rob Sassack</p>
        <p className='aboutMe'>Developer, technologist, musician</p>
        <p className='adage'>Building software for the future</p>
      </div>
      <div className='portrait'>
        <img className='portraitImage' src={profilePic} alt="portrait" />
      </div>
    </div>
  );
}

export default Header;
