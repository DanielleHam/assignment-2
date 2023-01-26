import "../../styling/startup.css";
import { useContext, useEffect } from "react";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import SignIn from "./SignIn";

const Startup = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  /**
   * If the user is already logged in, redirect to translation
   */
  useEffect(() => {
    if (user.id) navigate("/translation");
  }, []);

  return (
    <>
      <Welcome />
      <SignIn />
    </>
  );
};

export default Startup;
