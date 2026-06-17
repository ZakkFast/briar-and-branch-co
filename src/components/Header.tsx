export const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-forest/95 text-cream backdrop-blur">
      <nav className="section-container flex items-center justify-between px-6 py-4">
        <a href="#" className="focus-ring text-lg font-bold tracking-tight">
          Briar & Branch Co.
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#services" className="focus-ring hover:text-gold">
            Services
          </a>
          <a href="#process" className="focus-ring hover:text-gold">
            Process
          </a>
          <a href="#quote" className="focus-ring hover:text-gold">
            Quote
          </a>
        </div>

        <a href="#quote" className="btn-primary px-4 py-2 text-sm">
          Request Quote
        </a>
      </nav>
    </header>
  );
};
