import { Card } from "react-bootstrap";

const CardContainer = ({ title, children }) => {
  return (
    <Card className="p-3 mb-3">
      <Card.Body>
        <Card.Title className="mb-4">{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
