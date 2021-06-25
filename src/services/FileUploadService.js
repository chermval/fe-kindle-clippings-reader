import http from "../http-common";

const uploadClippingFile = (file) => {
    let formData = new FormData();
  
    formData.append("file", file);

    return http.post("/api/v1/clippings", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
};
  
const getClippingFiles = () => {
    return http.get("/clippings");
};
  

export {
    uploadClippingFile,
    getClippingFiles
};