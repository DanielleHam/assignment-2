import "../styling/Translation.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { updateUser } from "./../api/apiCalls";

import { useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import TranslationBox from "./TranslationBox";

const Translation = () => {
  const navigate = useNavigate();
  const { user, updateUserContext } = useContext(UserContext);
  const [translationInput, setTransInput] = useState("");
  const [finalInput, setFinalInput] = useState("");

  //return to startPage if user is not logged in
  useEffect(() => {
    if (!user.username) {
      navigate("/");
    }
  });

  //Produce an image for each letter in the input and update database if the translation if unique
  const translateTextFunction = () => {
    let checkIfTranslationExist = false;
    const inputTextArray = Array.from(translationInput);
    setFinalInput(translationInput);

    const copyUser = { ...user };
    copyUser.translations.forEach((translationItem) => {
      if (translationItem === translationInput) {
        checkIfTranslationExist = true;
      }
    });
    if (!checkIfTranslationExist) {
      copyUser.translations.push(translationInput);
    }
    updateUserContext(copyUser);
    localStorage.setItem("user", JSON.stringify(copyUser));
    updateUser(user.id, { translations: user.translations });
  };
  return (
    <main>
      <div className="maintop">
        <div className="container">
          <input
            type="text"
            className="customTextInput d-flex align-items-left rounded-5 shadow"
            placeholder="what do you want to say?"
            onChange={(e) => setTransInput(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                translateTextFunction();
              }
            }}
          />
          <Button
            variant="flat d-flex align-items-left rounded-5 shadow"
            size="xxl"
            onClick={translateTextFunction}
          >
            Translate
          </Button>{" "}
        </div>
      </div>
      <TranslationBox textInput={finalInput} />
    </main>
  );
};
export default Translation;
