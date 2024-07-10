import axios from "axios";
const instance = axios.create({
  baseURL: "https://managementsystem-coral.vercel.app/api/",
  // baseURL: "http://172.50.101.158:3000/api/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
