import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { deleteMenu, getMenus, saveMenu, updateMenu } from "../api/birt-panel";
import CustomDataTable from "../components/CustomDataTable";
import FormInputGroup from "../components/FormInputGroup";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Colors } from "../utils/colors";
import CustomModal from "../components/CustomModal";
import ConfirmModal from "../components/ConfirmModal";

const BIMainMenu = () => {
  const [menuName, setMenuName] = useState("");
  const [menus, setMenus] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateMenuName, setUpdateMenuName] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [deleteMenuID, setDeleteMenuID] = useState(0);

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

  const handleShowEditDialog = (rowData) => {
    setSelectedMenu(rowData); // store row being edited
    setUpdateMenuName(rowData.menu_name); // preload current value
    setShowUpdateModal(true);
  };

  const handleConfirmDialogClose = () => setConfirmDialog(false);

  const handleConfirmDialog = (rowData) => {
    setDeleteMenuID(rowData.menu_id);
    setConfirmDialog(true);
    console.log(rowData.menu_id);
  };

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

  const handleUpdate = async () => {
    try {
      const menuID = selectedMenu?.menu_id;

      const response = await updateMenu(menuID, updateMenuName);
      // console.log(response);
      if (response.success) {
        setSelectedMenu(null);
        fetchMenus();
        toast.success(response.message, {
          position: "bottom-right",
        });
      } else {
        toast.error(response.message, {
          position: "bottom-right",
        });
        console.error("Failed to update menu:", response.message);
      }
      handleClose();
    } catch (err) {
      console.error("Error updating", err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteMenu(deleteMenuID);
      console.log("Response", response);
      console.log("ID", deleteMenuID);
      if (response.success) {
        setDeleteMenuID(null);
        fetchMenus();
        toast.success(response.message, {
          position: "bottom-right",
        });
      } else {
        toast.error(response.message, {
          position: "bottom-right",
        });
        console.error("Failed to update menu:", response.message);
      }
      handleConfirmDialogClose();
    } catch (err) {
      console.error("Error deleting", err);
    }
  };

  const urlTemplate = (rowData) => (
    <div>
      <FaEdit
        color={Colors.green}
        onClick={() => handleShowEditDialog(rowData)}
      />
      <FaTrash
        color={Colors.red}
        onClick={() => handleConfirmDialog(rowData)}
      />
    </div>
  );

  const columns = [
    { field: "menu_id", header: "#", sortable: true },
    { field: "menu_name", header: "Menu Name", sortable: true },
    { header: "Actions", body: urlTemplate },
  ];

  return (
    <Container fluid className="p-4">
      <Card className="p-3 mb-3">
        <Card.Body>
          <Card.Title className="mb-3">Create Main Menu</Card.Title>
          <Form>
            <FormInputGroup
              label="Menu Title"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              readOnly={false}
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
        handleSave={handleUpdate}
        size="lg"
      >
        <Form>
          <FormInputGroup
            label="Menu Title"
            value={updateMenuName}
            onChange={(e) => setUpdateMenuName(e.target.value)}
            readOnly={false}
            type="text"
          />
        </Form>
      </CustomModal>

      <ConfirmModal
        show={confirmDialog}
        handleClose={handleConfirmDialogClose}
        heading="Are you sure you want to DELETE?"
        negativeText="No"
        positiveText="Yes"
        handleConfirm={handleDelete}
      />
    </Container>
  );
};

export default BIMainMenu;
