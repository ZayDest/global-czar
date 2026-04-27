type GlobalCzarLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
};

export default function GlobalCzarLogo({
  className = "",
  markClassName = "",
  textClassName = "",
}: GlobalCzarLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        className={`h-11 w-11 shrink-0 ${markClassName}`}
        viewBox="0 0 64 64"
        role="img"
        aria-label="GLOBAL CZAR logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="29" fill="currentColor" opacity="0.08" />
        <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" strokeWidth="3" />
        <path
          d="M17 34.5h21.5c4.4 0 8-3.6 8-8S42.9 18.5 38.5 18.5H28.2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M47 29.5H25.5c-4.4 0-8 3.6-8 8s3.6 8 8 8h10.3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path d="M25 25h13l-6.8 14H44" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <circle cx="48" cy="18" r="4" fill="currentColor" />
      </svg>
      <span className={`min-w-0 ${textClassName}`}>
        <span className="block truncate text-base font-black uppercase leading-none">GLOBAL CZAR</span>
        <span className="mt-1 block truncate text-[10px] font-bold uppercase leading-none tracking-[0.08em] opacity-70">
          Owner: Mohammad Rizwan Siddiqui
        </span>
      </span>
    </span>
  );
}
