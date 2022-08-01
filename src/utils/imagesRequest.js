import axios from "axios";
import queryString from "query-string";
import apiConfig from "./apiConfig";

const imagesRequest = axios.create({
  baseURL: apiConfig.imagesUrl,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({
      ...params,
    }),
});

export const get = async (path, params = {}) => {
  const response = await imagesRequest.get(path, params);
  return response.data;
};

export default imagesRequest;
