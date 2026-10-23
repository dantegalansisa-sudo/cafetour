export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`logo${light ? ' logo--light' : ''}`} aria-label="D Daniel Tours, inicio">
      <span className="logo__super">D Daniel</span>
      <span className="logo__buggies">Tours</span>
      <svg className="logo__peak" viewBox="0 0 60 22" aria-hidden="true">
        <path d="M2 12 C9 4 15 4 22 12 S35 20 42 12 S53 4 58 10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M8 19 C14 15 19 15 25 19 S36 23 42 19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
      </svg>
    </a>
  );
}
