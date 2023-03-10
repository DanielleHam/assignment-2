import "../styling/Translation.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { updateUser } from "./../api/apiCalls";

import { useContext } from "react";
import UserContext from "../UserContext";
import TranslationBox from "./TranslationBox";

import withAuth from "../hoc/withAuth";

const Translation = () => {
  const { user, updateUserContext } = useContext(UserContext);
  const [translationInput, setTransInput] = useState("");
  const [finalInput, setFinalInput] = useState("");
  const [warning, setWarning] = useState("");

  //removes all unnecessary spaces in the input
  const removeSpaceSpam = (inputString) => {
    let previousLetter = "";
    let fixedInputWithoutSpaceSpam = [];
    let inputArray = Array.from(inputString);
    inputArray.forEach((letter) => {
      if (letter !== " ") {
        previousLetter = letter;
        fixedInputWithoutSpaceSpam.push(letter);
      } else if (
        letter === " " &&
        previousLetter !== " " &&
        previousLetter !== ""
      ) {
        previousLetter = letter;
        fixedInputWithoutSpaceSpam.push(letter);
      } else {
        setWarning("Don't spam space");
      }
    });
    if (
      fixedInputWithoutSpaceSpam[fixedInputWithoutSpaceSpam.length - 1] === " "
    ) {
      fixedInputWithoutSpaceSpam.pop();
    }
    return fixedInputWithoutSpaceSpam.join("");
  };
  //Produce an image for each letter in the input and update database if the translation if unique
  const translateTextFunction = () => {
    const regLetterAndSpace = /^[a-zA-Z ]+$/;
    const regLetter = /[a-zA-Z]/;
    if (translationInput.match(regLetterAndSpace)) {
      let checkIfTranslationExist = false;

      setWarning("");
      //setFixedInput(removeSpaceSpam(translationInput));
      //if we don't want to save same translation with more space

      let fixedInput = removeSpaceSpam(translationInput);

      if (!regLetter.test(fixedInput)) {
        setFinalInput("");
        setWarning("Enter more than just space");
        checkIfTranslationExist = true;
      }
      //if we do want to save it
      setFinalInput(translationInput);

      const copyUser = { ...user };
      copyUser.translations.forEach((translationItem) => {
        if (translationItem === fixedInput) {
          checkIfTranslationExist = true;
        }
      });

      if (!checkIfTranslationExist) {
        copyUser.translations.push(fixedInput);
      }
      updateUserContext(copyUser);
      localStorage.setItem("user", JSON.stringify(copyUser));
      updateUser(user.id, { translations: user.translations });
    } else {
      alert("invalid input");
      setFinalInput("");
      setWarning("Only translates a-z letters");
    }
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
      <TranslationBox textInput={finalInput} warning={warning} />
    </main>
  );
};
export default withAuth(Translation);
