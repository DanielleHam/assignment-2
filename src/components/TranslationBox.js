import { useEffect, useState } from "react";
import "../styling/TranslationBox.css";

const TranslationBox = ({ textInput, warning }) => {
  const [imageArray, setImageArray] = useState([]);
  const [warningText, setWarningText] = useState("");

  const inputTextToArray = Array.from(textInput);

  //Add images for corresponding letter and ignore special characters
  const handleTranslateLetters = (letterArray) => {
    const list = [];
    setWarningText(warning);
    const regLetter = /^[a-zA-Z]+$/;
    let previousLetter = "";
    letterArray.forEach((letter, index) => {
      if (letter.match(regLetter)) {
        previousLetter = letter;
        list.push(
          <img
            key={letter + index}
            className="image"
            src={require("../images/handsigns/" +
              letter.toLowerCase() +
              ".png")}
            title={letter}
            alt="letterImage"
          />
        );
      } else if (
        letter === " " &&
        previousLetter !== " " &&
        previousLetter !== ""
      ) {
        previousLetter = letter;
        list.push(
          <p key={letter + index} className="hiddenText">
            space
          </p>
        );
      } else {
        previousLetter = letter;
        //setWarningText("Don't spam space");
      }
    });
    return list;
  };

  //set Image array to the processed array when textInput is changed
  useEffect(() => {
    setImageArray(handleTranslateLetters(inputTextToArray));
  }, [textInput]);

  return (
    <div className="imageContainer d-flex align-items-left rounded-5 shadow">
      {imageArray}
      <div className="bottomColor">
        <label className="warningText">{warningText}</label>
      </div>
    </div>
  );
};
export default TranslationBox;
