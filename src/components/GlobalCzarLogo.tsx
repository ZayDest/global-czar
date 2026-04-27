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
        <rect x="8" y="8" width="48" height="48" rx="11" fill="currentColor" opacity="0.08" />
        <rect x="8" y="8" width="48" height="48" rx="11" fill="none" stroke="currentColor" strokeWidth="3" />
        <path
          d="M39.5 23.5H29c-6 0-10.5 3.6-10.5 8.5S23 40.5 29 40.5h7.8v-7h-7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.5"
        />
        <path
          d="M45.5 23.5H36c-4.8 0-8 3.3-8 8.5s3.2 8.5 8 8.5h9.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.5"
          opacity="0.72"
        />
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
