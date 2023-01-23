import { useContext } from "react";
import Logo from "../images/Logo.png";
import Profile from "../images/profile_icon.png";
import "../styling/header.css";
import UserContext from "../UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user, "user");

  const toProfile = () => {
    window.location = "/profile";
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Robot logo" />
        <h1>Lost in translation</h1>
      </div>

      <div className="user" onClick={toProfile}>
        {user.username ? (
          <>
            <p>{user.username}</p>
            <img src={Profile} alt="Profile logo" />
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};
export default Header;
