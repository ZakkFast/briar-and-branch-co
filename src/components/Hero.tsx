export const Hero: React.FC = () => {
  return (
    <section className="bg-[#10251D] px-6 pb-24 pt-36 text-[#F7F1E3]">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
            Tree Care & Storm Cleanup
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Reliable tree work without the runaround.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E4DED0]">
            Briar & Branch Co. helps homeowners handle removals, trimming, and
            storm damage with clear estimates, careful work, and a clean job
            site.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#quote"
              className="rounded-full bg-[#C9A45C] px-7 py-4 text-center font-semibold text-[#10251D] hover:bg-[#d7b86d]"
            >
              Get a Free Quote
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#F7F1E3]/30 px-7 py-4 text-center font-semibold text-[#F7F1E3] hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#F7F1E3]/15 bg-[#18392B] p-6 shadow-2xl">
          <div className="rounded-[1.5rem] bg-[#F7F1E3] p-6 text-[#10251D]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6B4F3A]">
              Emergency Ready
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Fallen limbs? Storm damage? We’ll help you make a plan.
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-[#E4DED0] p-4">
                Same-week estimates
              </div>
              <div className="rounded-2xl bg-[#E4DED0] p-4">
                Licensed & insured crews
              </div>
              <div className="rounded-2xl bg-[#E4DED0] p-4">
                Full cleanup included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
