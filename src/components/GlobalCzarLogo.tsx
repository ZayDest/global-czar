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
        className={`h-12 w-12 shrink-0 ${markClassName}`}
        viewBox="0 0 96 96"
        role="img"
        aria-label="GLOBAL CZAR logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gcSteel" x1="11" y1="13" x2="76" y2="82" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7FAFC" />
            <stop offset="0.32" stopColor="#AEB8C2" />
            <stop offset="0.66" stopColor="#2B3745" />
            <stop offset="1" stopColor="#D6DEE7" />
          </linearGradient>
          <linearGradient id="gcGold" x1="31" y1="25" x2="67" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF0A8" />
            <stop offset="0.35" stopColor="#D6A22B" />
            <stop offset="0.72" stopColor="#9D6411" />
            <stop offset="1" stopColor="#F0C760" />
          </linearGradient>
          <linearGradient id="gcDark" x1="55" y1="37" x2="86" y2="61" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFC" />
            <stop offset="0.45" stopColor="#65717E" />
            <stop offset="1" stopColor="#111827" />
          </linearGradient>
        </defs>
        <path
          d="M70.5 20.5A35 35 0 1 0 75 71.5L65 61.5A21 21 0 1 1 61.5 31.8L70.5 20.5Z"
          fill="url(#gcSteel)"
          stroke="#0B1F35"
          strokeWidth="2"
        />
        <path
          d="M60 31.7A22.5 22.5 0 1 0 61 64.5L51.5 55A9.5 9.5 0 1 1 50.5 40.5L60 31.7Z"
          fill="url(#gcGold)"
          stroke="#7C4A08"
          strokeWidth="1.5"
        />
        <path d="M47 50h23v24L61 82V60H47V50Z" fill="url(#gcDark)" stroke="#0B1F35" strokeWidth="1.8" />
        <g stroke="#0B1F35" strokeWidth="1.2">
          <path d="M64 39 78 35l8 4-14 4-8-4Z" fill="url(#gcDark)" />
          <path d="M59 47 73 43l8 4-14 4-8-4Z" fill="url(#gcDark)" />
          <path d="M72 50 86 46l7 4-14 4-7-4Z" fill="url(#gcDark)" />
        </g>
      </svg>
      <span className={`min-w-0 ${textClassName}`}>
        <span className="block truncate text-base font-black uppercase leading-none">GLOBAL CZAR</span>
        <span className="mt-1 block truncate text-[10px] font-bold uppercase leading-none tracking-[0.08em] opacity-70">
          Global Metallurgy
        </span>
      </span>
    </span>
  );
}
