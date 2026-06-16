// Ambient background effect — faint grid + a slow-drifting gold glow.
// 21st.dev-style animated background, rebuilt on the site's design tokens.
// Drop inside any `relative overflow-hidden` dark section. Animation is
// disabled automatically under prefers-reduced-motion (see globals.css).

interface BackgroundFXProps {
  /** Tailwind classes to size/place the glow blob. */
  glowClassName?: string;
}

export function BackgroundFX({
  glowClassName = "left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2",
}: BackgroundFXProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="fx-grid absolute inset-0" />
      <div className={`fx-glow absolute ${glowClassName}`} />
    </div>
  );
}
