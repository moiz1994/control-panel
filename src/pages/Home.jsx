import { useEffect, useState } from "react";
import WeatherWidget from "../components/WeatherWIdget";
import { getCounts, getAppInfo } from "../api/dashboard";
import { Row } from "react-bootstrap";
import CountCard from "../components/CountCard";

import { FaUsers, FaChartBar } from "react-icons/fa";
import AppInfoCard from "../components/AppInfoCard";

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [reportCount, setReportCount] = useState(0);
  const [appInfo, setAppInfo] = useState([]);

  useEffect(() => {
    fetchCounts();
    fetchAppInfo();
  }, []);

  const fetchCounts = async () => {
    const countData = await getCounts();
    setUserCount(countData.user_count);
    setReportCount(countData.report_count);
  };

  const fetchAppInfo = async () => {
    const appInfo = await getAppInfo();
    // console.log(appInfo);
    if (appInfo.length > 0) {
      setAppInfo(appInfo.at(-1));
    }
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
          <div className="col-lg-6 col-sm-6">
            <AppInfoCard
              appName={appInfo.APP_NAME}
              version={appInfo.VERSION_NAME}
              updatedOn={appInfo.APP_UPDATED_ON}
              appIcon={appInfo.APP_ICON}
              url={appInfo.URL}
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Home;
