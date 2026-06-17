import services from "../data/siteContent";

export const ServicesSections: React.FC = () => {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B4F3A]">
            What We Do
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Tree care that keeps your property safe and clean.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-[#E4DED0] bg-white p-8 shadow-sm"
            >
              <div className="mb-8 h-12 w-12 rounded-full bg-[#18392B]" />
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#6B4F3A]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
