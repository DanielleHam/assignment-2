import { useContext } from "react";
import Logo from "../images/Logo.png";
import Profile from "../images/profile_icon.png";
import "../styling/header.css";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user, "user");

  const toProfile = () => {
    navigate("/profile");
  };

  const toTranslate = () => {
    navigate("/translation");
  };

  return (
    <header>
      <div className="logo" onClick={toTranslate}>
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
