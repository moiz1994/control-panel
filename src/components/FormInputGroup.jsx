import { Form, Row, Col } from "react-bootstrap";

const FormInputGroup = ({
  label,
  children,
  readOnly,
  type,
  extraHint,
  ...rest // This gathers all other props
}) => {
  return (
    <Form.Group
      as={Row}
      className="mb-3 d-flex justify-content-center align-items-center"
    >
      <Form.Label column sm="4" md="2" className="text-muted">
        {label}
      </Form.Label>
      <Col sm="8" md="10">
        {type === "select" ? (
          <Form.Select readOnly={readOnly} {...rest}>
            {children}
          </Form.Select>
        ) : type === "file" ? (
          <Form.Control type="file" {...rest} />
        ) : (
          <Form.Control type={type} readOnly={readOnly} {...rest} />
        )}
        {type === "text" && extraHint && (
          <Form.Text className="text-muted">{extraHint}</Form.Text>
        )}
      </Col>
    </Form.Group>
  );
};

export default FormInputGroup;
