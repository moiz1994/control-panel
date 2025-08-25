import { useEffect, useState } from "react";
import { Badge, Card, Table } from "react-bootstrap";
import { getWorkingDate } from "../api/dashboard";
import CustomDataTable from "./CustomDataTable";

const WorkingDates = () => {
  const [workingDates, setWorkingDates] = useState([]);

  useEffect(() => {
    fetchWorkingDates();
  }, []);

  const fetchWorkingDates = async () => {
    const data = await getWorkingDate();
    setWorkingDates(data);
  };

  const workingDateCompare = (dateStr) => {
    // dateStr format: "25-AUG-25"
    const [day, monthStr, yearStr] = dateStr.split("-");

    const months = {
      JAN: 0,
      FEB: 1,
      MAR: 2,
      APR: 3,
      MAY: 4,
      JUN: 5,
      JUL: 6,
      AUG: 7,
      SEP: 8,
      OCT: 9,
      NOV: 10,
      DEC: 11,
    };

    const date1 = new Date(
      2000 + parseInt(yearStr), // "25" -> 2025
      months[monthStr.toUpperCase()],
      parseInt(day)
    );

    const today = new Date();

    // Compare only the date part (ignore time)
    return (
      date1.getFullYear() === today.getFullYear() &&
      date1.getMonth() === today.getMonth() &&
      date1.getDate() === today.getDate()
    );
  };

  return (
    <div className="mt-3">
      <Card className="p-3">
        <h4 className="mb-3">Current Working Dates</h4>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Depot Name</th>
              <th>Description</th>
              <th>Working Dates</th>
            </tr>
          </thead>
          <tbody>
            {workingDates.map((item) => (
              <tr>
                <td>{item.DEPOT_ID}</td>
                <td>{item.DEPOT_NAME}</td>
                <td>{item.DESCRIPTION}</td>
                <td>
                  {workingDateCompare(item.WORKING_DATE) ? (
                    <Badge bg="success">{item.WORKING_DATE}</Badge>
                  ) : (
                    <Badge bg="danger">{item.WORKING_DATE}</Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default WorkingDates;
