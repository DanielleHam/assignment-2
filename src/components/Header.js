import Logo from "../images/Logo.png";
import Profile from "../images/profile_icon.png";
import "../styling/header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Robot logo" />
        <h1>Lost in translation</h1>
      </div>
      <div className="user">
        <p>Name</p>
        <img src={Profile} alt="Profile logo" />
      </div>
    </header>
  );
};
export default Header;
