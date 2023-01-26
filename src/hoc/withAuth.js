import { Navigate } from "react-router-dom";
import { useUser } from "../UserContext";

const withAuth = (Component) => (props) => {
  const { user } = useUser();
  console.log("with aout", user);
  if (user !== null) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};
export default withAuth;
