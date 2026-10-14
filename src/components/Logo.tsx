export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`logo${light ? ' logo--light' : ''}`} aria-label="Café Tours Samaná, inicio">
      <span className="logo__super">Café</span>
      <span className="logo__buggies">Tours</span>
      <span className="logo__sub">Samaná</span>
    </a>
  );
}
