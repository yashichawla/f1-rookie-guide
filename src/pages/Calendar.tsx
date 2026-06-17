import { PageHeader } from "../components/PageHeader";
import { calendar } from "../data/calendar";
import { formatDateRange } from "../utils/format";

export function Calendar() {
  return (
    <section>
      <PageHeader eyebrow="Race weekends" title="2026 Calendar" description="A clean race-weekend view with dates, locations, sprint markers, and completed vs upcoming status." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {calendar.map((race) => (
          <article key={race.round} className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/60">Round {race.round}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${race.status === "completed" ? "bg-emerald-400/15 text-emerald-200" : "bg-white/10 text-white/60"}`}>
                {race.status}
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-black">{race.grandPrix}</h2>
            <p className="mt-2 text-white/55">{race.location}, {race.country}</p>
            <p className="mt-1 text-sm text-white/40">{race.circuit}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/65">{formatDateRange(race.startDate, race.endDate)}</span>
              {race.sprint && <span className="rounded-full bg-[#E10600]/20 px-3 py-1 text-sm font-bold text-red-100">Sprint</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
