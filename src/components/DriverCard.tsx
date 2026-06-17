import { Link } from "react-router-dom";
import { teams } from "../data/teams";
import type { Driver } from "../types/f1";

export function DriverCard({ driver }: { driver: Driver }) {
  const team = teams.find((item) => item.id === driver.teamId);

  return (
    <Link
      to={`/drivers/${driver.id}`}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
      style={{ boxShadow: `0 0 50px ${team?.colors.primary ?? "#E10600"}22` }}
    >
      <div className="absolute right-5 top-3 text-7xl font-black text-white/[0.04]">
        {driver.number ?? driver.code}
      </div>
      <div className="relative">
        <div className="mb-5 h-2 w-20 rounded-full" style={{ background: team?.colors.primary ?? "#E10600" }} />
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">{driver.code}</p>
        <h2 className="mt-2 text-3xl font-black">{driver.name}</h2>
        <p className="mt-1 text-sm text-white/45">{driver.nationality} · {team?.name}</p>
        <p className="mt-5 text-sm leading-6 text-white/65">{driver.bio}</p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">Start here</p>
          <p className="mt-2 text-sm leading-6 text-white/60">{driver.beginnerHook}</p>
        </div>
      </div>
    </Link>
  );
}
