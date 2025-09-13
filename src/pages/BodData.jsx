import { Alert, Button, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getMonths, getMonthTargets, updateBodData } from "../api/bod";
import BodMonthlyClosing from "../components/bod/BodMonthlyClosing";
import BodMonthlyTarget from "../components/bod/BodMonthlyTarget";
import { toast } from "react-toastify";

const BodData = () => {
  const [monthData, setMonthData] = useState(null);
  const [targetData, setTargetData] = useState(null);

  // closing state
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);

  // target state
  const [targetRaw, setTargetRaw] = useState("");
  const [targetConvertedCases, setTargetConvertedCases] = useState("");
  const [OnzCases, setOnzCases] = useState("");

  const [targetRawNCB, setTargetRawNCB] = useState("");
  const [targetConvertedNCB, setTargetConvertedNCB] = useState("");
  const [OnzCasesNCB, setOnzCasesNCB] = useState("");

  const [targetRawCSD, setTargetRawCSD] = useState("");
  const [targetConvertedCSD, setTargetConvertedCSD] = useState("");
  const [OnzCasesCSD, setOnzCasesCSD] = useState("");

  const [canTargetValue, setCanTargetValue] = useState("");

  const [showAlert, setShowAlert] = useState({
    show: false,
    variant: "",
    message: "",
  });

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
    fetchTargets();
  }, []);

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const monthIndex = allMonths.indexOf(selectedMonth); // convert "Sep" → 8
      const totalDays = getDaysInMonth(monthIndex, parseInt(selectedYear));
      setSelectedDay(totalDays);
    }
  }, [selectedMonth, selectedYear]); // runs whenever month or year changes

  const fetchMonthData = async () => {
    try {
      const data = await getMonths();
      if (data.length > 0) {
        setMonthData(data[0]);
        setSelectedMonth(data[0].monthName);
        setSelectedYear(data[0].cyear);
        setSelectedDay(
          getDaysInMonth(monthMap[data[0].monthName], parseInt(data[0].cyear))
        );
      }
    } catch (error) {
      console.error("Error Fetching month data:", error);
    }
  };

  const fetchTargets = async () => {
    try {
      const data = await getMonthTargets();
      setTargetData(data);

      const { monthToDate, canTarget } = data;
      setTargetRaw(monthToDate.targetRaw);
      setTargetConvertedCases(monthToDate.targetConvertedCases);
      setOnzCases(monthToDate.OnzCases);

      setTargetRawNCB(monthToDate.targetRawNCB);
      setTargetConvertedNCB(monthToDate.targetConvertedNCB);
      setOnzCasesNCB(monthToDate.OnzCasesNCB);

      setTargetRawCSD(monthToDate.targetRawCSD);
      setTargetConvertedCSD(monthToDate.targetConvertedCSD);
      setOnzCasesCSD(monthToDate.OnzCasesCSD);

      setCanTargetValue(canTarget[0].sales_target);
    } catch (error) {
      console.error("Error Fetching target data:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const payload = {
      closing: {
        month: selectedMonth,
        year: selectedYear,
        day: selectedDay,
      },
      targets: {
        targetRaw,
        targetConvertedCases,
        OnzCases,
        targetRawNCB,
        targetConvertedNCB,
        OnzCasesNCB,
        targetRawCSD,
        targetConvertedCSD,
        OnzCasesCSD,
        canTargetValue,
      },
    };

    try {
      const response = await updateBodData(payload);
      if (response.success) {
        // setShowAlert({
        //   show: true,
        //   variant: "success",
        //   message: response.message,
        // });
        toast.success(response.message, {
          position: "bottom-right",
        });
      } else {
        // setShowAlert({
        //   show: true,
        //   variant: "danger",
        //   message: response.message || "Failed to update Data",
        // });
        toast.error(response.message || "Failed to update Data", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      setShowAlert({
        show: true,
        variant: "danger",
        message: "An error occurred while updating data.",
      });
    }
  };

  return (
    <div>
      <Form>
        <Card className="px-2 py-3">
          <Card.Body>
            {/* Monthly Closing */}
            {monthData && (
              <BodMonthlyClosing
                monthData={monthData}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                allMonths={allMonths}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                setDays={setSelectedDay}
                days={selectedDay}
              />
            )}

            <hr className="my-6" />

            {targetData && (
              <BodMonthlyTarget
                monthToDate={targetData.monthToDate}
                canTarget={targetData.canTarget}
                targetRaw={targetRaw}
                setTargetRaw={setTargetRaw}
                targetConvertedCases={targetConvertedCases}
                setTargetConvertedCases={setTargetConvertedCases}
                OnzCases={OnzCases}
                setOnzCases={setOnzCases}
                targetRawNCB={targetRawNCB}
                setTargetRawNCB={setTargetRawNCB}
                targetConvertedNCB={targetConvertedNCB}
                setTargetConvertedNCB={setTargetConvertedNCB}
                OnzCasesNCB={OnzCasesNCB}
                setOnzCasesNCB={setOnzCasesNCB}
                targetRawCSD={targetRawCSD}
                setTargetRawCSD={setTargetRawCSD}
                targetConvertedCSD={targetConvertedCSD}
                setTargetConvertedCSD={setTargetConvertedCSD}
                OnzCasesCSD={OnzCasesCSD}
                setOnzCasesCSD={setOnzCasesCSD}
                canTargetValue={canTargetValue}
                setCanTargetValue={setCanTargetValue}
              />
            )}

            <Button
              variant="success"
              type="submit"
              className="mt-2 float-end"
              onClick={handleUpdate}
            >
              Update
            </Button>
          </Card.Body>
        </Card>
      </Form>
    </div>
  );
};

export default BodData;
