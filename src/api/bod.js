import api from "./axiosConfig";

export const getMonths = async () => {
  const response = await api.get("/months_data_get.php");
  return response.data;
};

export const getMonthTargets = async () => {
  const response = await api.get("/bod_targets_get.php");
  return response.data;
};

export const updateBodData = async (payload) => {
  const response = await api.post("/bod_data_update.php", payload);
  return response.data;
};
