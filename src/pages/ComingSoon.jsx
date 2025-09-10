import { Card, Col, Container, Row } from "react-bootstrap";

const ComingSoon = () => {
  return (
    <div>
      <Container fluid className="p-4">
        <Row>
          <Col sm="12" md="12">
            <Card className="p-3">
              <img
                src="images/comming_soon.jpg"
                alt="Coming Soon"
                className="img-fluid"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComingSoon;
