import { Form, Row, Col } from "react-bootstrap";

const InputLabelGroup = ({ label, value, setValue, isReadable, type }) => {
  return (
    <div>
      <Form.Group
        as={Row}
        className="mb-3 d-flex justify-content-center align-items-center"
      >
        <Form.Label column sm="2" className="text-muted">
          {label}
        </Form.Label>
        <Col sm="10" md="10">
          <Form.Control
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            readOnly={isReadable}
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default InputLabelGroup;
