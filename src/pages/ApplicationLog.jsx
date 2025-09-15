import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

import { formatDate, getSecureAppIcon } from "../utils/formatters";
import CustomDataTable from "../components/CustomDataTable";

const ApplicationLog = () => {
  const [appInfo, setAppInfo] = useState([]);
  // const [filters, setFilters] = useState({
  //   global: { value: null, matchMode: "contains" },
  // });
  // const [globalFilterValue, setGlobalFilterValue] = useState("");
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppInfo();
  }, []);

  // const fetchAppInfo = async () => {
  //   const data = await getAppInfo();

  //   // sort descending by date
  //   const sorted = data.sort(
  //     (a, b) => new Date(b.APP_UPDATED_ON) - new Date(a.APP_UPDATED_ON)
  //   );
  //   setAppInfo(sorted);
  //   setLoading(false);
  // };

  const fetchAppInfo = () => {
    const data = JSON.parse(localStorage.getItem("appInfo"));

    // sort descending by date
    const sorted = data.sort(
      (a, b) => new Date(b.APP_UPDATED_ON) - new Date(a.APP_UPDATED_ON)
    );
    setAppInfo(sorted);
  };

  // templates
  const iconTemplate = (rowData) => (
    <img
      src={getSecureAppIcon(rowData.APP_ICON)}
      alt={rowData.APP_NAME}
      style={{ width: "40px" }}
    />
  );

  const urlTemplate = (rowData) =>
    rowData.URL ? (
      <a href={rowData.URL} target="_blank" rel="noreferrer">
        <img
          src="images/play_store.png"
          alt="Play Store Icon"
          style={{ width: "100px" }}
        />
      </a>
    ) : (
      "-"
    );

  const dateTemplate = (rowData, col) => formatDate(rowData[col.field]);

  const columns = [
    { header: "App Icon", body: iconTemplate },
    { field: "APP_NAME", header: "App Name", sortable: true },
    { field: "VERSION_NAME", header: "Version", sortable: true },
    {
      field: "ROLLED_OUT_ON",
      header: "Rolled Out On",
      body: (row) => dateTemplate(row, { field: "ROLLED_OUT_ON" }),
      sortable: true,
    },
    { field: "APP_UPDATED_BY", header: "Updated By", sortable: true },
    {
      field: "APP_UPDATED_ON",
      header: "Updated On",
      body: (row) => dateTemplate(row, { field: "APP_UPDATED_ON" }),
      sortable: true,
    },
    { field: "APP_STATUS", header: "Status", sortable: true },
    { header: "Download", body: urlTemplate },
  ];

  return (
    <Container fluid className="p-4">
      <Card className="p-3">
        <CustomDataTable
          data={appInfo}
          columns={columns}
          rows={12}
          title="Application Log"
        />
      </Card>
    </Container>
  );
};

export default ApplicationLog;
