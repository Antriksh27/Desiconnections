export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-40 opacity-[0.04] mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:3px_3px] motion-reduce:hidden"
    />
  );
}
