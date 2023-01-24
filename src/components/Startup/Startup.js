import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styling/startup.css";
import LogoHello from "../../images/HelloCloud.png";
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useState } from "react";
import { getOneUser, addUser } from "../../api/apiCalls";
import UserContext from "../../UserContext"
import {useNavigate} from "react-router-dom"

const Startup = () => 
{
    const navigate = useNavigate();
    const [username, setUsername] = useState({value: ''});
    const {user, updateUserContext} = useContext(UserContext);


    useEffect(() => {
        if(Object.keys(user).length !== 0)
            navigate("/translation");
    }, [])


    const handleUsernameChange = e => {
        setUsername({value: e.target.value});
    }

    const onSubmit = async(e) => 
    {
        e.preventDefault();
        let fetchedUser = await getOneUser(username.value);
        if(fetchedUser.length > 1)
            throw new Error("Two users have the same name");
        if(fetchedUser.length !== 0)
        {
            updateUserContext(fetchedUser[0]);
            navigate("/translation");
            return;
        }
        let createdUser = await addUser({
            username: username.value,
            translations: []
        });
        updateUserContext(createdUser)
        navigate("/translation");
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
                                <input className="nameInput form-control border-0 mt-3 mb-3" type="text" placeholder="Enter your name" onChange={handleUsernameChange}></input>
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