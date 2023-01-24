import { useEffect, useState } from "react";
import "../styling/TranslationBox.css";

const TranslationBox = ({ textInput }) => {
  const [imageArray, setImageArray] = useState([]);
  const [warningText, setWarningText] = useState("");

  const inputTextToArray = Array.from(textInput);

  //Add images for corresponding letter and ignore special characters
  const handleTranslateLetters = (letterArray) => {
    const list = [];
    setWarningText("");
    const regLetter = /^[a-zA-Z]+$/;
    letterArray.forEach((letter, index) => {
      if (letter.match(regLetter)) {
        list.push(
          <img
            key={letter + index}
            className="image"
            src={require("../images/handSigns/" +
              letter.toLowerCase() +
              ".png")}
            title={letter}
            alt="letterImage"
          />
        );
      } else if (letter === " ") {
        list.push(
          <p key={letter + index} className="hiddenText">
            space
          </p>
        );
      } else {
        setWarningText("Only translates letters");
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
      {}
      <div className="bottomColor">
        <>{warningText}</>
      </div>
    </div>
  );
};
export default TranslationBox;
