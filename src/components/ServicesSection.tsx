import services from "../data/siteContent";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-shell">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="section-label text-bark">What We Do</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Tree care that keeps your property safe and clean.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-stone bg-white p-8 shadow-sm"
            >
              <div className="mb-8 h-12 w-12 rounded-full bg-leaf" />
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-bark">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
