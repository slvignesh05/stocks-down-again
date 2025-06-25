import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="how" className="text-center py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold glow mb-6"
      >
        Predict&nbsp;Your&nbsp;Next&nbsp;Trade
      </motion.h2>
      <p className="max-w-xl mx-auto text-gray-300">
        Real-time fundamentals + rule-based AI → instant&nbsp;
        <span className="text-accent">Buy/Sell</span> calls.
      </p>
    </section>
  );
}
