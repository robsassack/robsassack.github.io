import profilePic from "../assets/images/456561661_10228677288251197_6563638156515697177_n.jpg";

function Header() {
  return (
    <header className='header'>
      <div className='description'>
        <h1 className='myName'>Rob Sassack</h1>
        <p className='aboutMe'>Developer, technologist, musician</p>
        <p className='adage'>Building software for the future</p>
      </div>
      <div className='portrait'>
        <img
          className='portraitImage'
          src={profilePic}
          alt='Rob Sassack portrait'
          width='80'
          height='80'
          decoding='async'
        />
      </div>
    </header>
  );
}

export default Header;
