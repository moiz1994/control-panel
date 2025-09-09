import { Card } from "react-bootstrap";

const CountCard = ({ title, subTitle, count, icon: Icon }) => {
  return (
    <Card className="gradient-4 p-2">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title className="text-white">
            <h4>{title}</h4>
          </Card.Title>
          <div className="d-inline-block">
            <h2 className="text-white">{count}</h2>
            <p className="text-white mb-0">{subTitle}</p>
          </div>
        </div>
        <span className="float-right display-5 opacity-75">
          <Icon className="text-white" />
        </span>
      </Card.Body>
    </Card>
  );
};

export default CountCard;
