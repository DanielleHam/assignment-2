import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { getOneUser, addUser } from "../../api/apiCalls";
import { useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";

const SignIn = () => {
  const [username, setUsername] = useState({ value: "" });
  const navigate = useNavigate();
  const { updateUserContext } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  /**
   * Handles an event by setting the username to the value of the target.
   * @param {*} e Triggering Event
   */
  const handleUsernameChange = (e) => {
    setUsername({ value: e.target.value });
  };

  /**
   * Handles the user attempt to sign in by checking if an account by that name exists. If it does, it updates the UserContext to set it to that account, if it does not it creates an account with that name. It also saves the user to the local storage.
   * @param {*} e Triggering Event
   */
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let fetchedUser = await getOneUser(username.value);
    if (fetchedUser.length > 1) throw new Error("Two users have the same name");
    if (fetchedUser.length !== 0) {
      updateUserContext(fetchedUser[0]);
      localStorage.setItem("user", JSON.stringify(fetchedUser[0]));

      navigate("/translation");
      return;
    }
    let createdUser = await addUser({
      username: username.value,
      translations: [],
    });
    updateUserContext(createdUser);
    localStorage.setItem("user", JSON.stringify(createdUser));
    setLoading(false);
    navigate("/translation");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row className="justify-content-center align-items-center signIn">
        <Col className="col-3">
          <Container className="nameContainer d-flex align-items-left rounded-5 shadow">
            <label htmlFor="nameInput"></label>
            <input
              className="nameInput form-control border-0 mt-3 mb-3"
              type="text"
              placeholder="Enter your name"
              onChange={handleUsernameChange}
            ></input>
          </Container>
        </Col>
        <Col className="col-2">
          <Button
            type="submit"
            className="signInButton p-3 px-5 rounded-5 shadow"
            disabled={loading}
          >
            Sign in
          </Button>
        </Col>
      </Row>
      {loading && (
        <div className="loadingContainer">
          <p>Loading..</p>
        </div>
      )}
    </Form>
  );
};

export default SignIn;
