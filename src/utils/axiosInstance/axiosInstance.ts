import axios from "axios";
const instance = axios.create({
  baseURL: "https://managementsystem-coral.vercel.app/api/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
