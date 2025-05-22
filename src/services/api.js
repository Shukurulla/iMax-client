import axios from "axios";

// Create an instance of axios
const API_URL =
  import.meta.env.VITE_API_URL || "https://imax.flash-print.uz/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Service functions
export const getServices = () => api.get("/services");
export const getPortfolio = () => api.get("/portfolio");
export const getAboutInfo = () => api.get("/about");
export const submitContact = (contactData) => api.post("/contact", contactData);

export default api;
