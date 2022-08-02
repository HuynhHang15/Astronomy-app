import httpRequest from "~/utils/httpRequest";

export const images = async (params) => {
  try {
    const url = "planetary/apod";
    const response = await httpRequest.get(url, params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
