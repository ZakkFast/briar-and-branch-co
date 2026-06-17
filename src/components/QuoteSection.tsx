export const QuoteSection: React.FC = () => {
  return (
    <section id="quote" className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#10251D] p-8 text-[#F7F1E3] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
          Request a Quote
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Need tree work? Start here.
        </h2>

        <form className="mt-10 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-[#E4DED0]/60 focus:border-[#C9A45C]"
            placeholder="Name"
          />
          <input
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-[#E4DED0]/60 focus:border-[#C9A45C]"
            placeholder="Email"
          />
          <input
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-[#E4DED0]/60 focus:border-[#C9A45C] md:col-span-2"
            placeholder="What kind of work do you need?"
          />
          <button
            type="button"
            className="rounded-full bg-[#C9A45C] px-6 py-4 font-semibold text-[#10251D] hover:bg-[#d7b86d] md:col-span-2"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};
