// src/services/api.js
import axios from "axios";

const API_URL = "https://your-api-url.com";

export const fetchBloodStock = async () => {
  const response = await axios.get(`${API_URL}/blood-stock`);
  return response.data;
};

export const requestBlood = async (data) => {
  const response = await axios.post(`${API_URL}/request-blood`, data);
  return response.data;
};
