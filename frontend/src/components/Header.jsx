export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6">
      <h1 className="text-3xl font-bold glow">Stocks down again</h1>
      <nav className="space-x-6 text-sm">
        <a href="#how" className="hover:text-accent">How&nbsp;it&nbsp;works</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </nav>
    </header>
  );
}
