import "../styling/Translation.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const Translation = () => {

  const [translationInput, setTransInput] = useState("");
  const [result, setResult] = useState("");
  const translateTextFunction = () => {
    {
      /* handle translation logic here, update user translations here*/
    }
    setResult(translationInput);
    const inputTextArray = Array.from(translationInput);
    inputTextArray.forEach(handleTranslateLetters);
  };
  function handleTranslateLetters(letter, index) {
    {
      /* get the images for each letter here */
    }
    console.log("element: " + letter + " i: " + index);
  }
  return (
    <>
      <div className="maintop">
        <input
          type="text"
          className="customTextInput"
          placeholder="what do you want to say?"
          onChange={(e) => setTransInput(e.target.value)}
        />
        <Button variant="flat" size="xxl" onClick={translateTextFunction}>
          Translate
        </Button>{" "}
      </div>
      <div className="container">
        <div className="imageContainer">
        {/* put images here */}
        {result}
        </div>
      </div>
    </>
  );
};
export default Translation;
