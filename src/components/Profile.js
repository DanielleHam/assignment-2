import "../styling/profile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { updateUser } from "./../api/apiCalls";
import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import ListTranslation from "./ListTranslation";
import withAuth from "../hoc/withAuth";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { updateUserContext } = useContext(UserContext);

  const [translations, setTranslations] = useState(
    user.translations.slice(-10)
  );

  // useEffect(() => {
  //   //return to startPage if user is not logged in
  //   if (!user.username) {
  //     navigate("/");
  //   } else {
  //     // if logged in show only the last 10 translations

  //   }
  // }, []);

  const remove = () => {
    let copyUser = { ...user };
    if (translations.length < 10) {
      updateUser(user.id, { translations: [] });
      setTranslations([]);
      copyUser.translations = [];
      updateUserContext(copyUser);
      localStorage.setItem("user", JSON.stringify(copyUser));
    } else {
      // remove the last 10 translations from the translations array
      let allTranslations = [...user.translations];
      allTranslations.splice(-10);
      setTranslations(allTranslations.slice(-10));
      copyUser.translations = allTranslations;
      updateUserContext(copyUser);
      localStorage.setItem("user", JSON.stringify(copyUser));
      updateUser(user.id, { translations: allTranslations });
    }
  };
  // when user log's out, remove stored info
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
          <ListTranslation texts={translations} />
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
export default withAuth(Profile);
