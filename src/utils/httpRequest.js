import axios from "axios";
import queryString from "query-string";
import apiConfig from "./apiConfig";

const httpRequest = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) =>
    queryString.stringify({
      ...params,
      api_key: apiConfig.apiKey,
    }),
});

export const get = async (path, params = {}) => {
  const response = await httpRequest.get(path, params);
  return response.data;
};

export default httpRequest;
