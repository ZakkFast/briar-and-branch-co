import services from "../data/siteContent";
import { RevealOnScroll } from "./RevealOnScroll";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-shell">
      <div className="section-container">
        <RevealOnScroll className="max-w-2xl">
          <div>
            <p className="section-label text-bark">What We Do</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Tree care that keeps your property safe and clean.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnScroll
              key={service.title}
              className="h-full"
              delay={index * 120}
            >
              <article className="group h-full rounded-3xl border border-stone bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-forest/10 active:-translate-y-0.5 active:border-gold/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-leaf text-sm font-bold text-cream transition-all duration-200 group-hover:scale-105 group-hover:bg-gold group-hover:text-forest motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  {service.marker}
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-bark">
                  {service.description}
                </p>
                <p className="mt-6 text-sm font-semibold text-gold opacity-100 transition-opacity duration-200 motion-reduce:transition-none md:opacity-0 md:group-hover:opacity-100">
                  Reliable, careful, and cleaned up right.
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
