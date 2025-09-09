import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getMonths, getMonthTargets } from "../api/bod";
import BodMonthlyClosing from "../components/bod/BodMonthlyClosing";
import BodMonthlyTarget from "../components/bod/BodMonthlyTarget";

const BodData = () => {
  const [month, setMonth] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [year, setYear] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [days, setDays] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthMap = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const getDaysInMonth = (month, year) => {
    // month is 0-based (0 = Jan, 1 = Feb, … 11 = Dec)
    return new Date(year, month + 1, 0).getDate();
  };

  useEffect(() => {
    fetchMonthData();
  }, []);

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const monthIndex = allMonths.indexOf(selectedMonth); // convert "Sep" → 8
      const totalDays = getDaysInMonth(monthIndex, parseInt(selectedYear));
      setDays(totalDays);
    }
  }, [selectedMonth, selectedYear]); // runs whenever month or year changes

  const fetchMonthData = async () => {
    try {
      const data = await getMonths();
      if (data.length > 0) {
        setMonth(data[0].monthName);
        setSelectedMonth(data[0].monthName);
        setYear(data[0].cyear);
        setSelectedYear(data[0].cyear);
        setSelectedDay(data[0].monthDays);
        setDays(
          getDaysInMonth(monthMap[data[0].monthName], parseInt(data[0].cyear))
        );
      }
    } catch (error) {
      console.error("Error Fetching month data:", error);
    }
  };

  return (
    <div>
      <Container fluid className="mt-3">
        <Form>
          <Card>
            <Card.Body>
              <BodMonthlyClosing
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                allMonths={allMonths}
                month={month}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                year={year}
                setDays={setDays}
                selectDay={selectedDay}
                days={days}
              />

              <hr className="my-6" />

              <BodMonthlyTarget />

              <Button variant="success">Update</Button>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </div>
  );
};

export default BodData;
