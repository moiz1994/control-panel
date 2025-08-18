import api from "./axiosConfig";

export const login = async (username, password) => {
  const response = await api.post("/login.php", { username, password });
  return response.data;
};
