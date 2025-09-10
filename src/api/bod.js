import api from "./axiosConfig";

export const getMonths = async () => {
  const response = await api.get("/get_months_data.php");
  return response.data;
};

export const getMonthTargets = async () => {
  const response = await api.get("/get_bod_targets.php");
  return response.data;
};

export const updateBodData = async (payload) => {
  const response = await api.post("/update_bod_data.php", payload);
  return response.data;
};
