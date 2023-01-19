import "../styling/Translation.css";
import Button from 'react-bootstrap/Button';

function Translation() {
  return (
    <>
    <hr/>
    <div className="maintop">
        <input type="text" className = "customTextInput" placeholder="what do you want to say?"></input>
        <Button variant="flat" size = "xxl">Translate</Button>{' '}
    </div></>
  );
}
export default Translation;
