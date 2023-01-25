
import "../../styling/startup.css";
import { useContext, useEffect } from "react";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import SignIn from "./SignIn";

const Startup = () => {
    const navigate = useNavigate();
    const { user, updateUserContext } = useContext(UserContext);

    /**
     * Loads the locally saved user and parses it into an object
     * @returns Locally saved user or empty object
     */
    const getStorageValue = () => {
        const saved = localStorage.getItem("user");
        const initial = JSON.parse(saved);
        return initial || {};
    };

    /**
     * Loads the locally stored user
     */
    useEffect(() => {
        updateUserContext(getStorageValue());
    }, []);

    /**
     * If the user is already logged in, redirect to translation
     */
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
