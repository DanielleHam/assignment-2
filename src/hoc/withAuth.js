import { Navigate } from "react-router-dom";
import { useUser } from "../UserContext";

const withAuth = (Component) => (props) => {
  const { user } = useUser();

  if (user.username) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};
export default withAuth;
