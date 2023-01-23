import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styling/startup.css";
import LogoHello from "../../images/HelloCloud.png";
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { getOneUser } from "../../api/apiCalls";
import { postApiData } from "../../api/protectedAPI";

const Startup = () => 
{
    const [username, setUsername] = useState({value: ''});
    const handleUsernameChange = e => {
        setUsername({value: e.target.value});
    }
    const onSubmit = async(e) => 
    {
        e.preventDefault();
        let user = await getOneUser(username.value);
        if(user.length > 1)
            throw new Error("Two users have the same name");
        if(user.length !== 0)
        {
            console.log(user[0].username);
            // login 
            return;
        }
        console.log("try post");
        postApiData("", {
            username: username.value,
            translations: []
        });
        
        //login
    }
   

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
            <Form onSubmit={onSubmit}>

                <Row className="justify-content-center align-items-center signIn">
                        <Col className="col-3">
                            <Container className="nameContainer d-flex align-items-left rounded-5 shadow">
                                <label htmlFor="nameInput"></label>
                                <input className="nameInput mt-3 mb-3" type="text" placeholder="Enter your name" onChange={handleUsernameChange}></input>
                            </Container>
                        </Col>
                        <Col className="col-2">
                            <Button type="submit" className="signInButton p-3 px-5 rounded-5 shadow">Sign in</Button>
                        </Col>
                        
                    
                </Row>
            </Form>

        </>
        
    );
}

export default Startup;