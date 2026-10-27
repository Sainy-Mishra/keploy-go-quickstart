/**
 * Small diagram of what Keploy sits between during `record` and `test`.
 * Built with plain divs so it follows the light/dark theme.
 */
function Box({ label, sub, accent = false }: { label: string; sub?: string; accent?: boolean }) {
  return (
    <div
      className={`flex min-w-[7.5rem] flex-1 flex-col items-center justify-center rounded-lg border px-3 py-3 text-center ${
        accent
          ? "border-[var(--accent)] bg-[var(--accent-soft)]"
          : "border-[var(--border)] bg-[var(--card)]"
      }`}
    >
      <span className="text-sm font-semibold">{label}</span>
      {sub && <span className="mt-0.5 text-xs text-[var(--muted)]">{sub}</span>}
    </div>
  );
}

function Arrow({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-1 text-xs text-[var(--muted)]">
      {text && <span className="mb-0.5">{text}</span>}
      <span aria-hidden className="text-lg leading-none">→</span>
    </div>
  );
}

export function FlowDiagram() {
  return (
    <div className="my-8 space-y-5">
      <div>
        <p className="!mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          keploy record
        </p>
        <div className="flex flex-wrap items-stretch gap-1 sm:flex-nowrap">
          <Box label="curl / client" sub="you send requests" />
          <Arrow />
          <Box label="Echo app" sub="your Go code" />
          <Arrow />
          <Box label="PostgreSQL" sub="real database" />
        </div>
        <div className="mt-2 rounded-lg border border-dashed border-[var(--accent)] bg-[var(--accent-soft)] px-3 py-2 text-center text-sm">
          Keploy watches the traffic in both directions and writes it to{" "}
          <code>keploy/</code> as <b>test cases</b> (HTTP) and <b>mocks</b> (database calls)
        </div>
      </div>

      <div>
        <p className="!mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          keploy test
        </p>
        <div className="flex flex-wrap items-stretch gap-1 sm:flex-nowrap">
          <Box label="Keploy" sub="replays saved requests" accent />
          <Arrow />
          <Box label="Echo app" sub="your Go code" />
          <Arrow text="queries" />
          <Box label="Keploy mocks" sub="saved DB answers" accent />
        </div>
        <div className="mt-2 rounded-lg border border-dashed border-[var(--border)] px-3 py-2 text-center text-sm text-[var(--muted)]">
          No Postgres needed. Keploy compares each response with the one it recorded.
        </div>
      </div>
    </div>
  );
}
