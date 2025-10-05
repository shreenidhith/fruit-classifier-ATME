// src/api/predict.js
import axios from 'axios';

export const classifyFruit = async (file, modelName) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('model_name', modelName);
  const response = await axios.post('http://localhost:8000/predict', formData);
  return response.data;
};
