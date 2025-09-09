import api from "./axiosConfig";

export const getMonths = async () => {
  const response = await api.get("/get_months_data.php");
  return response.data;
};

export const getMonthTargets = async () => {
  const response = await api.get("/get_bod_targets.php");
  return response.data;
};
