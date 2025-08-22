import { useEffect, useState } from "react";
import WeatherWidget from "../components/WeatherWIdget";
import { getCounts } from "../api/reportAndUserCount";
import { Row } from "react-bootstrap";
import CountCard from "../components/CountCard";

import { FaUsers, FaChartBar } from "react-icons/fa";

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [reportCount, setReportCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    const countData = await getCounts();
    console.log(countData);
    setUserCount(countData.user_count);
    setReportCount(countData.report_count);
  };

  return (
    <div>
      <WeatherWidget />
      <div className="p-4">
        <Row>
          <div className="col-lg-3 col-sm-6">
            <CountCard
              title="Bi Users Account"
              subTitle="Total Active Users"
              count={userCount}
              icon={FaUsers}
            />
          </div>
          <div className="col-lg-3 col-sm-6">
            <CountCard
              title="Bi Reports"
              subTitle="Total Active Reports"
              count={reportCount}
              icon={FaChartBar}
            />
          </div>
          <div className="col-lg-6 col-sm-6"></div>
        </Row>
      </div>
    </div>
  );
};

export default Home;
