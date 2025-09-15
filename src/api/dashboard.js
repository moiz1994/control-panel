import api from "./axiosConfig";

export const getCounts = async () => {
  const response = await api.get("/report_and_user_count_get.php");
  return response.data;
};

export const getAppInfo = async () => {
  const response = await api.get("/app_info_get.php");
  return response.data;
};

export const getWorkingDate = async () => {
  const response = await api.get("/working_dates_get.php");
  return response.data;
};
