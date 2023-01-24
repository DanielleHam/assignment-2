import "../styling/profile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { updateUser } from "./../api/apiCalls";
import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { updateUserContext } = useContext(UserContext);

  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    if (!user.username) {
      navigate("/");
    } else {
      setTranslations(user.translations.slice(-10));
    }
  }, []);
  console.log("first", translations);

  const remove = () => {
    setTranslations([]);
    if (translations.length < 10) {
      console.log("du har färre än 10");
      updateUser(user.id, { translations: [] });
    } else {
      console.log("du har fler än 10");
      let allTranslations = [...user.translations];
      allTranslations.splice(-10);
      setTranslations(allTranslations.slice(-10));

      updateUser(user.id, { translations: allTranslations });
    }
  };

  const logOut = () => {
    updateUserContext([]);
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Container fluid>
      <Row>
        <Col className="previousTranslation">
          <h3 id="header">Previous translations</h3>

          <Container fluid="md" id="translations">
            {user.translations
              ? translations.map((text, index) => (
                  <span key={index}>
                    <Form.Control
                      type="text"
                      placeholder="Translated text"
                      readOnly
                      value={text}
                    />
                    <br />
                  </span>
                ))
              : ""}
          </Container>
        </Col>

        <Col xs lg="4" id="buttonsContainer">
          <Button size="lg" className="button" id="del" onClick={remove}>
            Delete
          </Button>
          <Button size="lg" className="button" id="log" onClick={logOut}>
            Log out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
