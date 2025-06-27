export default function StockList() {
  const intl = ["AAPL", "MSFT", "TSLA", "AMZN", "GOOGL",
                "NVDA", "META", "JPM", "KO", "XOM"];
  const india = ["RELIANCE.NS", "TCS.NS", "INFY.NS", "HDFCBANK.NS", "ITC.NS",
                 "ICICIBANK.NS", "SBIN.NS", "MARUTI.NS", "BAJFINANCE.NS", "LT.NS"];

  return (
    <div className="absolute right-6 top-14 z-20 w-56 rounded-xl shadow-lg glassy ruled p-4">
      <h4 className="font-semibold mb-2">Quick Tickers</h4>
      <p className="text-xs text-gray-400 mb-1">International</p>
      <ul className="mb-3 space-y-1 text-sm">
        {intl.map(t => <li key={t}>{t}</li>)}
      </ul>
      <p className="text-xs text-gray-400 mb-1">India (NSE)</p>
      <ul className="space-y-1 text-sm">
        {india.map(t => <li key={t}>{t}</li>)}
      </ul>
    </div>
  );
}
