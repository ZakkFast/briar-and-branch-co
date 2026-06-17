export const BrandMark: React.FC = () => {
  return (
    <svg
      className="h-9 w-9 shrink-0"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="18" className="fill-gold" />
      <path
        d="M20 45c11.5-12.4 19.7-22.2 24-29"
        className="stroke-forest"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M36.5 18.5c7.9-1 13.1 1.5 15.5 7.5-7.5 1.9-12.7-.6-15.5-7.5Z"
        className="fill-cream"
      />
      <path
        d="M27.5 30.5c-7.8.9-12.9-1.8-15.5-8 7.5-1.7 12.7.9 15.5 8Z"
        className="fill-forest"
      />
      <path
        d="M26 41c7.2-.8 12.1 1.5 14.5 7-7 1.5-11.9-.8-14.5-7Z"
        className="fill-cream"
      />
    </svg>
  );
};
