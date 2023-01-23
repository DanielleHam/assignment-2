import "../styling/Translation.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { updateUser } from "./../api/apiCalls";

import { useContext } from "react";
import UserContext from "../UserContext";

const Translation = () => {
  const { user, addUser } = useContext(UserContext);
  const [translationInput, setTransInput] = useState("");
  const [result, setResult] = useState("");
  //breaks the string down for image convertion
  const translateTextFunction = () => {
    setResult(translationInput);
    const inputTextArray = Array.from(translationInput);
    inputTextArray.forEach(handleTranslateLetters);

    const copyUser = { ...user };
    copyUser.translations.push(translationInput);
    addUser(copyUser);

    updateUser(user.id, { translations: user.translations });
  };

  function handleTranslateLetters(letter, index) {
    /* get the images for each letter here */
    console.log("element: " + letter + " i: " + index);
  }
  return (
    <>
      <div className="maintop">
        <div className="container">
          <input
            type="text"
            className="customTextInput d-flex align-items-left rounded-5 shadow"
            placeholder="what do you want to say?"
            onChange={(e) => setTransInput(e.target.value)}
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
      <div className="imageContainer d-flex align-items-left rounded-5 shadow">
        {/* put images here */}
        {result}
      </div>
    </>
  );
};
export default Translation;
