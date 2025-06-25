import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StockForm from "./components/StockForm";
import PredictionCard from "./components/PredictionCard";
import Footer from "./components/Footer";

export default function App() {
  const [res, setRes] = useState(null);

  return (
    <>
      <Header />
      <main className="px-4">
        <Hero />
        <div className="flex justify-center">
          <StockForm onResult={setRes} />
        </div>
        <PredictionCard result={res} />
      </main>
      <Footer />
    </>
  );
}
