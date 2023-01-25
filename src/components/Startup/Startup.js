
import "../../styling/startup.css";
import { useContext, useEffect } from "react";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import SignIn from "./SignIn";

const Startup = () => {
    const navigate = useNavigate();
    const { user, updateUserContext } = useContext(UserContext);

    const getStorageValue = () => {
        const saved = localStorage.getItem("user");
        const initial = JSON.parse(saved);
        return initial || {};
    };

    useEffect(() => {
        updateUserContext(getStorageValue());
    }, []);

    useEffect(() => {
        if (user.id) navigate("/translation");
    }, [user]);


    return (
        <>
            <Welcome />
            <SignIn />
        </>
    );
};

export default Startup;
