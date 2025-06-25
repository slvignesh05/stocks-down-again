import { useState } from "react";
import { analyzeStock } from "../api";

export default function StockForm({ onResult }) {
  const [ticker, setTicker] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    onResult(await analyzeStock(ticker.trim().toUpperCase()));
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <input
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="AAPL"
        required
        className="bg-gray-800 px-4 py-2 rounded-lg w-40"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-accent transition-colors px-6 py-2 rounded-lg font-semibold"
      >
        {loading ? "…" : "Analyze"}
      </button>
    </form>
  );
}
