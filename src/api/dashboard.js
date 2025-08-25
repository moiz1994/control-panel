import api from "./axiosConfig";

export const getCounts = async () => {
  const response = await api.get("/get_report_and_user_count.php");
  return response.data;
};

export const getAppInfo = async () => {
  const response = await api.get("/get_app_info.php");
  return response.data;
};

export const getWorkingDate = async () => {
  const response = await api.get("/get_working_dates.php");
  return response.data;
};
