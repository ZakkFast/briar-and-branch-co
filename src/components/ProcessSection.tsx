export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="section-shell bg-leaf text-cream">
      <div className="section-container grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="section-label text-gold">Simple Process</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Send photos, get a clear next step.
          </h2>
        </div>

        <div className="space-y-4">
          {[
            "Tell us what happened",
            "We review the job",
            "You get a clear estimate",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4 rounded-2xl bg-forest p-5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold font-bold text-forest">
                {index + 1}
              </div>
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
