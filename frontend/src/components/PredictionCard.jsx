export default function PredictionCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-10 bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-2">{result.ticker}</h3>
      <p>
        Prediction:&nbsp;
        <span
          className={
            result.prediction === "Buy" ? "text-green-400" : "text-red-400"
          }
        >
          {result.prediction}
        </span>
      </p>
      <p className="text-xs text-gray-400 mt-4">
        P/E {result.data.trailingPE?.toFixed(1)} • EPS&nbsp;growth&nbsp;
        {(result.data.earningsQuarterlyGrowth * 100).toFixed(1)}% •
        Debt/Equity {result.data.debtToEquity}
      </p>
    </div>
  );
}
