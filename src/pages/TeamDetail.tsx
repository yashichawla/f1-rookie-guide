import { Link, useParams } from "react-router-dom";
import { drivers } from "../data/drivers";
import { teams } from "../data/teams";

export function TeamDetail() {
  const { teamId } = useParams();
  const team = teams.find((item) => item.id === teamId);

  if (!team) return <p>Team not found.</p>;

  const teamDrivers = drivers.filter((driver) => team.drivers.includes(driver.id));

  return (
    <section>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 p-8 md:p-12" style={{ background: `linear-gradient(135deg, ${team.colors.primary}3f, ${team.colors.accent} 72%)` }}>
        <p className="text-sm uppercase tracking-[0.35em] text-white/70">Team profile</p>
        <h1 className="mt-4 text-5xl font-black md:text-7xl">{team.name}</h1>
        <p className="mt-3 text-xl text-white/70">{team.fullName}</p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{team.intro}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Info label="Base" value={team.base} />
          <Info label="Power Unit" value={team.powerUnit ?? "TBA"} />
          <Info label="Vibe" value={team.vibe} />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-black">Driver pairing</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {teamDrivers.map((driver) => (
            <Link key={driver.id} to={`/drivers/${driver.id}`} className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-1 hover:bg-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">{driver.code}</p>
              <h3 className="mt-2 text-3xl font-black">{driver.name}</h3>
              <p className="mt-2 text-sm text-white/45">{driver.nationality}</p>
              <p className="mt-5 text-white/60">{driver.bio}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-black/30 p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-white/45">{label}</p>
      <p className="mt-2 font-bold">{value}</p>
    </div>
  );
}
