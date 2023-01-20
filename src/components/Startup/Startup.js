import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styling/startup.css";
import LogoHello from "../../images/HelloCloud.png";
import Button from "react-bootstrap/Button"

const Startup = () => 
{
    return (
        <>
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
            <Row className="justify-content-center align-items-center signIn">
                <Col className="col-3">
                    <Container className="nameContainer d-flex align-items-left rounded-5 shadow">
                        <input className="nameInput mt-3 mb-3" type="text" placeholder="Enter your name"></input>
                    </Container>
                </Col>
                <Col className="col-2">
                    <Button className="signInButton p-3 px-5 rounded-5 shadow">Sign in</Button>
                </Col>
            </Row>
        </>
        
    );
}

export default Startup;