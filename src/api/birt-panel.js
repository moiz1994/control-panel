import api from "./axiosConfig";

export const getMenus = async () => {
  const response = await api.get("/birt_main_menus_get.php");
  return response.data;
};

export const saveMenu = async (menuName) => {
  const response = await api.post("/birt_main_menu_insert.php", { menuName });
  return response.data;
};

export const updateMenu = async (menuId, menuName) => {
  const response = await api.post("/birt_main_menu_update.php", {
    menuId,
    menuName,
  });
  return response.data;
};

export const deleteMenu = async (menuId) => {
  const response = await api.post("/birt_main_menu_delete.php", { menuId });
  return response.data;
};

export const getReportFolder = async () => {
  const response = await api.get("/birt_report_folders_get.php");
  return response.data;
};
