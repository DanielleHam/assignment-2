import "../styling/profile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getUsers } from "../api/apiCalls";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getUsers();
      setUser(users[0]); // for now
      return await users;
    };

    fetchUser();
  }, []);
  console.log(user);

  return (
    <Container fluid>
      <Row>
        <Col className="previousTranslation">
          <h3 id="header">Previous translations</h3>

          <Container fluid="md" id="translations">
            {user.translations.map((text, index) => (
              <>
                <Form.Control
                  key={index}
                  type="text"
                  placeholder="Translated text"
                  readOnly
                  value={text}
                />
                <br />
              </>
            ))}
          </Container>
        </Col>

        <Col xs lg="4" id="buttonsContainer">
          <Button size="lg" className="button" id="del">
            Delete
          </Button>
          <Button size="lg" className="button" id="log">
            Log out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
