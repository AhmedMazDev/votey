import axios from "axios";

export const instance = axios.create({
  baseURL: "/api/",
  headers: {
    "Content-type": "application/json",
  },
});
