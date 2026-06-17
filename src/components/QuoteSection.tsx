import { useEffect, useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

const initialForm = {
  name: "",
  email: "",
  workType: "",
  customWork: "",
};

const workTypeOptions = [
  "Tree removal",
  "Storm cleanup",
  "Trimming & pruning",
  "Emergency tree damage",
  "Something else",
];

const initialErrors = {
  name: "",
  email: "",
  workType: "",
  customWork: "",
};

export const QuoteSection: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [showToast, setShowToast] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const needsCustomWork = form.workType === "Something else";

  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timeout = window.setTimeout(() => setShowToast(false), 3500);

    return () => window.clearTimeout(timeout);
  }, [showToast]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = { ...initialErrors };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.workType) {
      nextErrors.workType = "Please choose the type of work you need.";
    }

    if (needsCustomWork && !form.customWork.trim()) {
      nextErrors.customWork = "Please tell us what you need.";
    }

    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }

    setErrors(initialErrors);
    setSubmittedName(form.name.trim());
    setForm(initialForm);
    setShowToast(true);
  };

  return (
    <section id="quote" className="section-shell">
      <div
        className={`pointer-events-none fixed bottom-6 left-6 right-6 z-50 max-w-sm rounded-2xl border border-gold/30 bg-cream px-5 py-4 text-sm font-semibold text-forest shadow-xl shadow-forest/20 transition-all duration-300 sm:left-auto ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        Thanks{submittedName ? `, ${submittedName}` : ""}. We'll be in touch
        soon!
      </div>

      <RevealOnScroll className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] bg-forest p-8 text-cream md:p-12">
          <p className="section-label text-gold">Request a Quote</p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Need tree work? Start here.
          </h2>

          <form
            className="mt-10 grid gap-4 md:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="sr-only" htmlFor="quote-name">
                Name
              </label>
              <input
                id="quote-name"
                aria-describedby={errors.name ? "quote-name-error" : undefined}
                aria-invalid={errors.name ? "true" : "false"}
                className="form-input"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={(event) => {
                  setErrors((current) => ({ ...current, name: "" }));
                  setForm((current) => ({
                    ...current,
                    name: event.target.value,
                  }));
                }}
              />
              {errors.name ? (
                <p id="quote-name-error" className="mt-2 text-sm text-gold">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label className="sr-only" htmlFor="quote-email">
                Email
              </label>
              <input
                id="quote-email"
                aria-describedby={
                  errors.email ? "quote-email-error" : undefined
                }
                aria-invalid={errors.email ? "true" : "false"}
                className="form-input w-full"
                name="email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(event) => {
                  setErrors((current) => ({ ...current, email: "" }));
                  setForm((current) => ({
                    ...current,
                    email: event.target.value,
                  }));
                }}
              />
              {errors.email ? (
                <p id="quote-email-error" className="mt-2 text-sm text-gold">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <label className="sr-only" htmlFor="quote-work-type">
              What kind of work do you need?
            </label>
            <select
              id="quote-work-type"
              aria-describedby={
                errors.workType ? "quote-work-type-error" : undefined
              }
              aria-invalid={errors.workType ? "true" : "false"}
              className="form-input md:col-span-2"
              name="workType"
              value={form.workType}
              onChange={(event) => {
                setErrors((current) => ({
                  ...current,
                  workType: "",
                  customWork: "",
                }));
                setForm((current) => ({
                  ...current,
                  workType: event.target.value,
                  customWork: "",
                }));
              }}
            >
              <option value="" className="text-forest">
                What kind of work do you need?
              </option>
              {workTypeOptions.map((option) => (
                <option key={option} value={option} className="text-forest">
                  {option}
                </option>
              ))}
            </select>
            {errors.workType ? (
              <p
                id="quote-work-type-error"
                className="text-sm text-gold md:col-span-2"
              >
                {errors.workType}
              </p>
            ) : null}
            {needsCustomWork ? (
              <>
                <label className="sr-only" htmlFor="quote-custom-work">
                  Tell us what you need
                </label>
                <input
                  id="quote-custom-work"
                  aria-describedby={
                    errors.customWork ? "quote-custom-work-error" : undefined
                  }
                  aria-invalid={errors.customWork ? "true" : "false"}
                  className="form-input md:col-span-2"
                  name="customWork"
                  placeholder="Tell us what you need"
                  value={form.customWork}
                  onChange={(event) => {
                    setErrors((current) => ({ ...current, customWork: "" }));
                    setForm((current) => ({
                      ...current,
                      customWork: event.target.value,
                    }));
                  }}
                />
                {errors.customWork ? (
                  <p
                    id="quote-custom-work-error"
                    className="text-sm text-gold md:col-span-2"
                  >
                    {errors.customWork}
                  </p>
                ) : null}
              </>
            ) : null}
            <button
              type="submit"
              className="btn-primary px-6 py-4 md:col-span-2 md:justify-self-end"
            >
              Submit Request
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
