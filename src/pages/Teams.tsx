import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { teams } from "../data/teams";

export function Teams() {
  return (
    <section>
      <PageHeader eyebrow="Constructors" title="2026 Teams" description="Every F1 team has its own identity, color language, history, driver pairing, and personality. Start here." />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((team, index) => (
          <motion.div key={team.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.035 }}>
            <Link
              to={`/teams/${team.id}`}
              className="group block min-h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              style={{ boxShadow: `0 0 60px ${team.colors.primary}22` }}
            >
              <div className="mb-6 h-2 w-28 rounded-full" style={{ background: team.colors.primary }} />
              <h2 className="text-3xl font-black">{team.name}</h2>
              <p className="mt-2 text-sm text-white/50">{team.fullName}</p>
              <p className="mt-6 text-white/65">{team.intro}</p>
              <p className="mt-4 text-sm italic text-white/45">{team.vibe}</p>
              <div className="mt-8 flex gap-2">
                {[team.colors.primary, team.colors.secondary, team.colors.accent].map((color) => (
                  <span key={color} className="h-8 w-8 rounded-full border border-white/20" style={{ background: color }} />
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
