import { Card, Form, Col, Row } from "react-bootstrap";
import EditableTripleForm from "./EditableTripleForm";

const BodMonthlyClosing = ({
  selectedMonth,
  setSelectedMonth,
  allMonths,
  month,
  selectedYear,
  setSelectedYear,
  year,
  setDays,
  days,
  selectDay,
}) => {
  return (
    <div>
      <Card.Title>BOD Monthly Closing</Card.Title>

      {/* Month */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" md="2">
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
        <Form.Label column sm="2" md="2">
          {month}
        </Form.Label>
      </Form.Group>

      {/* Year */}
      <EditableTripleForm
        label="Year"
        initialValues={year}
        value={selectedYear}
        setValue={setSelectedYear}
      />

      {/* Days */}
      <EditableTripleForm
        label="Month Total Days"
        initialValues={selectDay}
        value={days}
        setValue={setDays}
      />
    </div>
  );
};

export default BodMonthlyClosing;
