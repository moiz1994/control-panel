import { Card, Form, Col, Row } from "react-bootstrap";
import EditableTripleForm from "./EditableTripleForm";

const BodMonthlyClosing = ({
  monthData,
  selectedMonth,
  setSelectedMonth,
  allMonths,
  selectedYear,
  setSelectedYear,
  setDays,
  days,
}) => {
  return (
    <div>
      <Card.Title className="mb-5">BOD Monthly Closing</Card.Title>

      {/* Month */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" md="2" className="text-muted">
          Month
        </Form.Label>
        <Col sm="8" md="8">
          <Form.Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {allMonths.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Form.Label column sm="2" md="2" className="text-muted">
          {monthData.monthName}
        </Form.Label>
      </Form.Group>

      {/* Year */}
      <EditableTripleForm
        label="Year"
        initialValues={monthData.cyear}
        value={selectedYear}
        setValue={setSelectedYear}
      />

      {/* Days */}
      <EditableTripleForm
        label="Month Total Days"
        initialValues={monthData.monthDays}
        value={days}
        setValue={setDays}
        isReadOnly={true}
      />
    </div>
  );
};

export default BodMonthlyClosing;
