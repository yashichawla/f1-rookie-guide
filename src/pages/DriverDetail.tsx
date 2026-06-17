import { ArrowLeft, Flag, Gauge, Home, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { drivers } from "../data/drivers";
import { teams } from "../data/teams";

export function DriverDetail() {
  const { driverId } = useParams();
  const driver = drivers.find((item) => item.id === driverId);

  if (!driver) return <p>Driver not found.</p>;

  const team = teams.find((item) => item.id === driver.teamId);

  return (
    <section>
      <Link to="/drivers" className="mb-6 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white">
        <ArrowLeft size={16} /> Back to drivers
      </Link>

      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/10 p-8 md:p-12"
        style={{ background: `linear-gradient(135deg, ${team?.colors.primary ?? "#E10600"}44, #050505 72%)` }}
      >
        <div className="absolute right-6 top-2 text-[9rem] font-black leading-none text-white/[0.04] md:text-[14rem]">
          {driver.number ?? driver.code}
        </div>
        <div className="relative max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">{team?.name} · {driver.code}</p>
          <h1 className="mt-4 text-5xl font-black md:text-7xl">{driver.name}</h1>
          <p className="mt-3 text-xl text-white/65">{driver.nationality}{driver.birthPlace ? ` · ${driver.birthPlace}` : ""}</p>
          <p className="mt-6 text-lg leading-8 text-white/75">{driver.bio}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {driver.records.map((record) => (
          <div key={record.label} className="glass-card rounded-3xl p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">{record.label}</p>
            <p className="mt-3 text-2xl font-black">{record.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <InfoBlock icon={<Home size={20} />} title="Background" text={driver.background} />
        <InfoBlock icon={<Users size={20} />} title="Family / upbringing" text={driver.family} />
        <InfoBlock icon={<Gauge size={20} />} title="Driving style" text={driver.drivingStyle} />
      </div>

      <div className="mt-8 glass-card rounded-[2rem] p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-[#E10600]">Why new fans should care</p>
        <p className="mt-4 text-lg leading-8 text-white/75">{driver.whyTheyMatter}</p>
        <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">What to watch</p>
          <p className="mt-2 text-white/70">{driver.beginnerHook}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-card rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <Flag className="text-[#E10600]" size={20} />
            <h2 className="text-3xl font-black">Team switches</h2>
          </div>
          <div className="mt-6 space-y-4">
            {driver.teamMoves.map((move) => (
              <div key={`${move.years}-${move.team}`} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-bold text-white/45">{move.years}</p>
                <h3 className="mt-1 text-xl font-black">{move.team}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{move.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#E10600]">Reverse timeline</p>
              <h2 className="mt-2 text-3xl font-black">Career ladder</h2>
            </div>
            <p className="max-w-sm text-sm text-white/45">Current season is shown first, then the story goes backward to karting.</p>
          </div>

          <div className="mt-8 space-y-6">
            {driver.careerPath.map((step, index) => (
              <div key={`${step.year}-${step.series}`} className="grid grid-cols-[28px_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span className="h-4 w-4 rounded-full bg-[#E10600]" />
                  {index < driver.careerPath.length - 1 && <span className="mt-2 h-full min-h-14 w-px bg-white/15" />}
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-bold text-white/45">{step.year}</p>
                  <h3 className="mt-1 text-xl font-black">{step.series}</h3>
                  {step.team && <p className="mt-1 text-sm text-white/45">{step.team}</p>}
                  <p className="mt-3 leading-7 text-white/65">{step.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="glass-card rounded-[2rem] p-6">
      <div className="text-[#E10600]">{icon}</div>
      <h2 className="mt-4 text-2xl font-black">{title}</h2>
      <p className="mt-4 leading-7 text-white/70">{text}</p>
    </div>
  );
}
