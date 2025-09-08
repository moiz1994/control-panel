import { Card, Col, Container, Form, Row } from "react-bootstrap";

const BodData = () => {
  return (
    <div>
      <Container fluid className="mt-3">
        <Form>
          <Card>
            <Card.Body>
              <Card.Title>BOD Monthly Closing</Card.Title>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" md="2">
                  Month
                </Form.Label>
                <Col sm="8" md="8">
                  <Form.Select>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                  </Form.Select>
                </Col>
                <Form.Label column sm="2" md="2">
                  Sep
                </Form.Label>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Year
                </Form.Label>
                <Col sm="8" md="8">
                  <Form.Control type="number" placeholder="Year" />
                </Col>
                <Form.Label column sm="2" md="2">
                  2025
                </Form.Label>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Month Total Days
                </Form.Label>
                <Col sm="8" md="8">
                  <Form.Select>
                    <option value="1">1</option>
                  </Form.Select>
                </Col>
                <Form.Label column sm="2" md="2">
                  2025
                </Form.Label>
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </div>
  );
};

export default BodData;
