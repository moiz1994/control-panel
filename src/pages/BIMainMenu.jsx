import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { getMenus, saveMenu } from "../api/birt-panel";
import CustomDataTable from "../components/CustomDataTable";
import InputLabelGroup from "../components/InputLabelGroup";
import { FaEdit, FaTrash } from "react-icons/fa";

const BIMainMenu = () => {
  const [menuName, setMenuName] = useState("");
  const [menus, setMenus] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await saveMenu(menuName);
      if (response.success) {
        setMenuName("");
        fetchMenus();
      } else {
        console.error("Failed to save menu:", response.message);
      }
    } catch (error) {
      console.error("Failed to reach server", error);
    }
  };

  useEffect(() => {
    fetchMenus();
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

  const urlTemplate = (rowData) => (
    <div>
      <FaEdit
        color="#8bc34a"
        onClick={() => {
          // open a modal to edit the menu with id
        }}
      />
      <FaTrash
        color="#c34a4e"
        onClick={() => {
          // open a modal to confirm if you want to delete
        }}
      />
    </div>
  );

  const columns = [
    { field: "menu_id", header: "#", sortable: true },
    { field: "menu_name", header: "Menu Name", sortable: true },
    { header: "Actions", body: urlTemplate },
  ];

  return (
    <div>
      <Card className="p-3 mb-3">
        <Card.Body>
          <Card.Title className="mb-3">Create Main Menu</Card.Title>
          <Form>
            <InputLabelGroup
              label="Menu Title"
              value={menuName}
              setValue={setMenuName}
              isReadable={false}
              type="text"
            />

            <Button
              variant="success"
              type="submit"
              className="mt-2 float-end"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="p-3">
        <CustomDataTable
          data={menus}
          columns={columns}
          rows={10}
          title="Main Menu List"
        />
      </Card>
    </div>
  );
};

export default BIMainMenu;
