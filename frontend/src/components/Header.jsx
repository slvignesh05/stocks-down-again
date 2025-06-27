import { useState } from "react";
import StockList from "./StockList";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between py-4 px-6">
      <h1 className="text-3xl font-bold glow">Stocks down again</h1>

      <nav className="space-x-6 text-sm flex items-center">
        <a href="#how" className="hover:text-accent">How it works</a>
        <a href="#contact" className="hover:text-accent">Contact</a>

        {/* Quick-list button */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-4 px-3 py-1 rounded-lg border border-accent text-accent hover:bg-accent/20 transition-colors"
        >
          Tickers
        </button>
      </nav>

      {open && <StockList />}
    </header>
  );
}
