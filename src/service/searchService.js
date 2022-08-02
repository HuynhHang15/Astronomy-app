import imagesRequest from "~/utils/imagesRequest";

export const search = async (params) => {
  try {
    const url = "search";
    const response = imagesRequest.get(url, params);
    return response;
  } catch (error) {
    console.log(error);
  }
};
