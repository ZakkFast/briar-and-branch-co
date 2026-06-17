export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="bg-[#18392B] px-6 py-24 text-[#F7F1E3]">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
            Simple Process
          </p>
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
              className="flex items-center gap-4 rounded-2xl bg-[#10251D] p-5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#C9A45C] font-bold text-[#10251D]">
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
