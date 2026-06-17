import type { Standing } from "../types/f1";

export function StandingsTable({ title, rows }: { title: string; rows: Standing[] }) {
  const maxPoints = Math.max(...rows.map((row) => row.points), 1);

  return (
    <div className="glass-card overflow-hidden rounded-[2rem]">
      <div className="border-b border-white/10 p-6">
        <h2 className="text-2xl font-black">{title}</h2>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div key={`${title}-${row.position}-${row.name}`} className="grid gap-4 p-5 md:grid-cols-[48px_1fr_90px] md:items-center">
            <div className="text-2xl font-black text-white/35">#{row.position}</div>
            <div>
              <p className="font-bold text-white">{row.name}</p>
              {row.team && <p className="mt-1 text-sm text-white/45">{row.team}</p>}
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#E10600]" style={{ width: `${(row.points / maxPoints) * 100}%` }} />
              </div>
            </div>
            <p className="text-right text-xl font-black">{row.points}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
