import Profile from "../assets/Profile.jpg";

function Main() {
  return (
    <>
      <h1 className= "name"> Ahmad Ruzaini</h1>
      <img src={Profile} className= "profile" alt="Profile" />
      <h2 className="brief">Hi there I'm Ruzaini, welcome to my portfolio,<br /> feel free to look around to get to know me better.</h2>
      <p style={{ fontSize: '40px', marginTop: '70px' }}>A bit about me</p>
      <p className="about">My only working experience is all on hardware.<br /> My intent is to make a switch to be a software developer.<br />I hope my progress is decent.</p>    
    </>
  );
}

export default Main;
