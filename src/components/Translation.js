import "../styling/Translation.css";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function Translation() {
  return (
    <>
    <hr/>
      <div className="maintop">
        <input type="text" className = "customTextInput" placeholder="what do you want to say?"></input>
        <Button variant="flat" size = "xxl">Translate</Button>{' '}
      </div>
      <div className ="container">
        <div className="imageContainer">

        </div>
        {/* put images here */}
      </div>
      </>
  );
}
export default Translation;
