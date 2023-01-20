import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styling/startup.css";
import LogoHello from "../../images/Logo-Hello.png";


const Startup = () => 
{
    return (
        <Container fluid className="bg">
            <Row className="welcome align-items-center mt-5 mb-5">
                <Col>
                <img src={LogoHello} alt="Logo hello" />
                </Col>
                <Col>
                    <h1>Welcome<br />to<br />Lost in translation</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Startup;