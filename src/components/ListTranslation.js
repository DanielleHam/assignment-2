import "../styling/profile.css";
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";

const ListTranslation = ({ texts }) => {
  return (
    <Container fluid="md" id="translations">
      {texts
        ? texts.map((text, index) => (
            <span key={index}>
              <Form.Control
                type="text"
                placeholder="Translated text"
                readOnly
                value={text}
              />
              <br />
            </span>
          ))
        : ""}
    </Container>
  );
};
export default ListTranslation;
