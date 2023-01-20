import "../styling/profile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Profile = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="previousTranslation">
          <h3 id="header">Previous translations</h3>
          <Container fluid="md" id="translations">
            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />
            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            <br />

            <Form.Control type="text" placeholder="Translated text" readOnly />
            {/* will put the input field in a map function later to make it create one for each  */}
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
