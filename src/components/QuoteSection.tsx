import { RevealOnScroll } from "./RevealOnScroll";

export const QuoteSection: React.FC = () => {
  return (
    <section id="quote" className="section-shell">
      <RevealOnScroll className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] bg-forest p-8 text-cream md:p-12">
          <p className="section-label text-gold">Request a Quote</p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Need tree work? Start here.
          </h2>

          <form className="mt-10 grid gap-4 md:grid-cols-2">
            <input className="form-input" placeholder="Name" />
            <input className="form-input" placeholder="Email" />
            <input
              className="form-input md:col-span-2"
              placeholder="What kind of work do you need?"
            />
            <button
              type="button"
              className="btn-primary px-6 py-4 md:col-span-2"
            >
              Submit Request
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
