/**
 * IMPORTS
 */
import axios from "axios";

/**
 * CODE
 */

// configure url for apps API
const api = axios.create({
  baseURL: "https://602dc44396eaad00176dcc1b.mockapi.io/wiser/",
});

/**
 * EXPORTS
 */
export default api;
