import { Button, Card, Container, Form } from "react-bootstrap";
import FormInputGroup from "../components/FormInputGroup";
import { getMenus, getReportFolder } from "../api/birt-panel";
import { useEffect, useState } from "react";

const ReportCreate = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("");

  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");

  const [reportName, setReportName] = useState("");

  const [urlParameter, setUrlParameter] = useState("");

  const [reportFile, setReportFile] = useState(null);

  useEffect(() => {
    fetchMenus();
    fetchFolders();
  }, []);

  const fetchMenus = async () => {
    try {
      const data = await getMenus();
      const sorted = data.sort((a, b) => a.menu_id - b.menu_id);
      setMenus(sorted);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  const fetchFolders = async () => {
    try {
      const data = await getReportFolder();
      setFolders(data);
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setReportFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!reportFile) {
      alert("Please select a file before submitting.");
      return;
    }
  };

  return (
    <Container fluid className="p-4">
      <Card className="p-3 mb-3">
        <Card.Body>
          <Card.Title className="mb-4">Create New Report</Card.Title>

          <Form onSubmit={handleSubmit}>
            {/* Menu Name Select */}
            <FormInputGroup
              label="Menu Name"
              type="select"
              value={selectedMenu}
              onChange={(e) => setSelectedMenu(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Menu
              </option>
              {menus &&
                menus.map((menu) => (
                  <option value={menu.menu_id} key={menu.menu_id}>
                    {menu.menu_name}
                  </option>
                ))}
            </FormInputGroup>

            {/* Folder Name Select */}
            <FormInputGroup
              label="Folder Name"
              type="select"
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Folder
              </option>
              {folders &&
                folders.map((folder) => (
                  <option value={folder.RL_ID} key={folder.RL_ID}>
                    {folder.FOLDER_NAME}
                  </option>
                ))}
            </FormInputGroup>

            {/* Report Name Input */}
            <FormInputGroup
              label="Report Name"
              type="text"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              required
            />

            {/* URL Parameter Input */}
            <FormInputGroup
              label="URL Parameter(If Any)"
              placeholder="%20BI%20Reporting%20Portal"
              value={urlParameter}
              onChange={(e) => setUrlParameter(e.target.value)}
              type="text"
              extraHint="Hint: %20BI%20Reporting%20Portal"
            />

            {/* Report File Input */}
            <FormInputGroup
              label="Report File"
              type="file"
              onChange={handleFileChange}
              required
              accept=".rptdesign"
            />

            <Button variant="success" type="submit" className="float-end">
              Create Report
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReportCreate;
