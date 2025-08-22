import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppInfoCard = ({ appName, version, updatedOn, url, appIcon }) => {
  // Format updatedOn
  const formattedDate = updatedOn
    ? new Date(updatedOn).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  // Convert appIcon URL
  const secureAppIcon = appIcon
    ? appIcon.replace(
        "http://mailserver.sukkurbeverages.net:689",
        "https://mailserver.sukkurbeverages.net:589"
      )
    : "";

  return (
    <Card className="p-0">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <h4>App Updates</h4>
          <span style={{ fontSize: "14px" }}>
            <Link to="#" className="nav-link" style={{ color: "GrayText" }}>
              View All Apps
            </Link>
          </span>
        </Card.Title>
        <div className="d-inline-block">
          <h3>
            {appName}
            <span style={{ fontSize: "16px" }} className="ms-2">
              Version: {version} Updated On: {formattedDate}
            </span>
          </h3>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={url} target="_blank">
            <img
              src="images/play_store.png"
              alt="Play Store Image"
              style={{ width: "100px" }}
            />
          </Link>
          <img src={secureAppIcon} alt="App Icon" style={{ width: "70px" }} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default AppInfoCard;
