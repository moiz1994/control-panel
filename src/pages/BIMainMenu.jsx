import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { getMenus, saveMenu } from "../api/birt-panel";
import CustomDataTable from "../components/CustomDataTable";
import InputLabelGroup from "../components/InputLabelGroup";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Colors } from "../utils/colors";
import CustomModal from "../components/CustomModal";

const BIMainMenu = () => {
  const [menuName, setMenuName] = useState("");
  const [menus, setMenus] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateMenuName, setUpdateMenuName] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await saveMenu(menuName);
      if (response.success) {
        setMenuName("");
        fetchMenus();
        toast.success(response.message, {
          position: "bottom-right",
        });
      } else {
        toast.error(response.message, {
          position: "bottom-right",
        });
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

  const handleClose = () => setShowUpdateModal(false);
  const handleShow = () => setShowUpdateModal(true);

  const handleEdit = (rowData) => {
    alert("Test");
    setSelectedMenu(rowData); // store row being edited
    setUpdateMenuName(rowData.menu_name); // preload current value
    setShowUpdateModal(true);
  };

  const urlTemplate = (rowData) => (
    <div>
      {console.log(rowData)}
      <FaEdit color={Colors.green} onClick={() => handleEdit(rowData)} />
      <FaTrash
        color={Colors.red}
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

      <CustomModal
        show={showUpdateModal}
        handleClose={handleClose}
        heading="Update Menu"
        buttonText="Update"
        handleSave={() => {
          console.log("Saving:", selectedMenu?.menu_id, updateMenuName);
          // TODO: call update API here
        }}
      >
        <Form>
          <InputLabelGroup
            label="Menu Title"
            value={updateMenuName}
            setValue={setUpdateMenuName}
            isReadable={false}
            type="text"
          />
        </Form>
      </CustomModal>
    </div>
  );
};

export default BIMainMenu;
