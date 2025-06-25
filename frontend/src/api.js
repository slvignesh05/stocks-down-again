import axios from "axios";

export const analyzeStock = (ticker) =>
  axios.get(`http://localhost:8000/analyze/${ticker}`).then((r) => r.data);
