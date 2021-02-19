import axios from "axios";

const api = axios.create({
  baseURL: "https://602dc44396eaad00176dcc1b.mockapi.io/wiser/",
});

export default api;
