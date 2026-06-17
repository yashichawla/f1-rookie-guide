import LineageWeb from "../components/LineageWeb";

export function Lineage() {
  return (
    <section>
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#E10600]">
          Driver movement map
        </p>

        <h1 className="mt-3 text-5xl font-black md:text-7xl">
          F1 Lineage Web
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          A visual map of how the current 2026 grid connects to previous F1
          seasons. Each row is a team lineage, each column is a season, and each
          block shows the D1/D2 seat for that year.
        </p>
      </div>

      <LineageWeb />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-black text-white">How to read it</p>
          <p className="mt-2 text-sm text-white/55">
            Follow a driver code from year to year. Curved lines show how they
            moved between teams.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-black text-white">D1 / D2</p>
          <p className="mt-2 text-sm text-white/55">
            D1 and D2 represent the two primary race seats for each team that
            season. Substitute appearances are marked as SUB.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-black text-white">Current-grid focus</p>
          <p className="mt-2 text-sm text-white/55">
            This version focuses on the 2026 drivers and where they were in
            recent F1 seasons.
          </p>
        </div>
      </div>
    </section>
  );
}