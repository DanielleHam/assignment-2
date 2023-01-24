import "../styling/Translation.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { updateUser } from "./../api/apiCalls";

import { useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";

const Translation = () => {
  const navigate = useNavigate();
  const { user, updateUserContext } = useContext(UserContext);
  const [translationInput, setTransInput] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const [varningText, setVarningText] = useState();
  //breaks the string down for image convertion

  useEffect(() => {
    if (!user.username) {
      navigate("/");
    }
  });

  const translateTextFunction = () => {
    setImageArray([]);
    const inputTextArray = Array.from(translationInput);

    setImageArray(handleTranslateLetters(inputTextArray));

    const copyUser = { ...user };
    copyUser.translations.push(translationInput);
    updateUserContext(copyUser);

    updateUser(user.id, { translations: user.translations });
  };

  function handleTranslateLetters(letterarray) {
    const list = [];
    setVarningText("");
    const regLetter = /^[a-zA-Z]+$/;
    letterarray.forEach((letter, index) => {
      if (letter.match(regLetter)) {
        list.push(
          <img
            key={letter + index}
            className="image"
            src={require("../images/handsigns/" +
              letter.toLowerCase() +
              ".png")}
            title={letter}
            alt="letterimage"
          />
        );
      } else if (letter === " ") {
        list.push(
          <p key={letter + index} className="hiddenText">
            space
          </p>
        );
      } else {
        setVarningText("Only translates letters");
      }
    });
    return list;
  }
  const handleEnterPress = (event) => {
    console.log(event.key);
  };

  return (
    <>
      <div className="maintop">
        <div className="container">
          <input
            type="text"
            className="customTextInput d-flex align-items-left rounded-5 shadow"
            placeholder="what do you want to say?"
            onChange={(e) => setTransInput(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                console.log("enter");
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
      <div className="imageContainer d-flex align-items-left rounded-5 shadow">
        {/* put images here */}
        {imageArray}
        <div className="bottomColor">
          <>{varningText}</>
        </div>
      </div>
    </>
  );
};
export default Translation;
