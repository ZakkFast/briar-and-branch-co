export const Hero: React.FC = () => {
  return (
    <section className="bg-forest px-6 pb-24 pt-36 text-cream">
      <div className="section-container grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="section-label mb-5 tracking-[0.35em] text-gold">
            Tree Care & Storm Cleanup
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Reliable tree work without the runaround.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone">
            Briar & Branch Co. helps homeowners handle removals, trimming, and
            storm damage with clear estimates, careful work, and a clean job
            site.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#quote"
              className="btn-primary px-7 py-4 text-center"
            >
              Get a Free Quote
            </a>

            <a
              href="#services"
              className="btn-secondary px-7 py-4"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-cream/15 bg-leaf p-6 shadow-2xl">
          <div className="rounded-[1.5rem] bg-cream p-6 text-forest">
            <p className="section-label tracking-[0.25em] text-bark">
              Emergency Ready
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Fallen limbs? Storm damage? We’ll help you make a plan.
            </h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-stone p-4">Same-week estimates</div>
              <div className="rounded-2xl bg-stone p-4">
                Licensed & insured crews
              </div>
              <div className="rounded-2xl bg-stone p-4">Full cleanup included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
