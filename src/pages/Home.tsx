import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="racing-grid grid min-h-[75vh] items-center gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <p className="mb-4 inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70">
          2026 Formula 1 beginner guide
        </p>
        <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Learn F1 through the teams, drivers, races, and rivalries.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
          Explore team identities, driver journeys, race weekends, podiums, and championship standings in one polished interactive guide.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/teams" className="inline-flex items-center gap-2 rounded-full bg-[#E10600] px-6 py-3 font-bold text-white shadow-[0_0_40px_rgba(225,6,0,0.35)] transition hover:scale-105">
            Explore teams <ArrowRight size={18} />
          </Link>
          <Link to="/drivers" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white/80 transition hover:bg-white/10">
            Meet drivers
          </Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75 }} className="glass-card rounded-[2rem] p-6">
        <div className="grid gap-4">
          <Feature icon={<Users />} title="11 teams" text="Explore every constructor with team-colored pages." />
          <Feature icon={<Trophy />} title="22 drivers" text="Follow each driver’s path from junior racing to F1." />
          <Feature icon={<CalendarDays />} title="Race calendar" text="Track completed and upcoming Grand Prix weekends." />
        </div>
      </motion.div>
    </section>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-4 text-[#E10600]">{icon}</div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{text}</p>
    </div>
  );
}
