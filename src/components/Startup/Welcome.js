import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoHello from "../../images/HelloCloud.png";
import "animate.css";

const Welcome = () => {
  return (
    <Container fluid className="bg">
      <Row className="welcome align-items-center mt-5 mb-5">
        <Col>
          <img
            className="animate__animated animate__bounce"
            src={LogoHello}
            alt="Logo hello"
          />
        </Col>
        <Col>
          <h1>
            Welcome
            <br />
            to
            <br />
            Lost in translation
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
