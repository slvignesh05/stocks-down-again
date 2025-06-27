import axios from "axios";

export const analyzeStock = (ticker) =>
  axios
    .get(`https://stocks-down-again.onrender.com/analyze/${ticker}`)
    .then((r) => r.data);
