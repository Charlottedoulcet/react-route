import axios from "axios";

export const api = () => {
  const url = "http://localhost:3000/patata";

  const getCoders = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const addCoder = async (dataForm) => {
    const response = await axios.post(url, dataForm);
    return response.data;
  };

  const updateCoder = async (id, dataForm) => {
    const response = await axios.put(`${url}/${id}`, dataForm);
    return response.data;
  };

  const deleteCoder = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  };

  return {
    getCoders,
    addCoder,
    updateCoder,
    deleteCoder,
  };
};
