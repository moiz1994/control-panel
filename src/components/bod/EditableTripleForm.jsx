import { Form, Row, Col } from "react-bootstrap";

const EditableTripleForm = ({ label, initialValues, value, setValue }) => {
  return (
    <div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          {label}
        </Form.Label>
        <Col sm="8" md="8">
          <Form.Control
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Col>
        <Form.Label column sm="2" md="2">
          {initialValues}
        </Form.Label>
      </Form.Group>
    </div>
  );
};

export default EditableTripleForm;
