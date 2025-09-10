import { Form, Row, Col } from "react-bootstrap";

const EditableTripleForm = ({
  label,
  initialValues,
  value,
  setValue,
  isReadOnly = false,
}) => {
  return (
    <div>
      <Form.Group
        as={Row}
        className="mb-3 d-flex justify-content-center align-items-center"
      >
        <Form.Label column sm="2" className="text-muted">
          {label}
        </Form.Label>
        <Col sm="8" md="8">
          <Form.Control
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            readOnly={isReadOnly}
          />
        </Col>
        <Form.Label column sm="2" md="2" className="text-muted">
          {initialValues}
        </Form.Label>
      </Form.Group>
    </div>
  );
};

export default EditableTripleForm;
