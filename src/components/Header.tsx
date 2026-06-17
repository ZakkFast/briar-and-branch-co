export const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#10251D]/95 text-[#F7F1E3] backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            Briar & Branch Co.
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-[#C9A45C]">
              Services
            </a>
            <a href="#process" className="hover:text-[#C9A45C]">
              Process
            </a>
            <a href="#quote" className="hover:text-[#C9A45C]">
              Quote
            </a>
          </div>

          <a
            href="#quote"
            className="rounded-full bg-[#C9A45C] px-4 py-2 text-sm font-semibold text-[#10251D] hover:bg-[#d7b86d]"
          >
            Request Quote
          </a>
        </nav>
      </header>
  )
}