import api from "./axiosConfig";

export const getMenus = async () => {
  const response = await api.get("/get_birt_main_menus.php");
  return response.data;
};

export const saveMenu = async (menuName) => {
  const response = await api.post("/save_birt_main_menu.php", { menuName });
  return response.data;
};

export const updateMenu = async (menuId, menuName) => {
  const response = await api.post("/update_birt_main_menu.php", {
    menuId,
    menuName,
  });
  return response.data;
};

export const deleteMenu = async (menuId) => {
  const response = await api.post("/delete_birt_main_menu.php", {
    data: { menuId },
  });
  return response.data;
};
