import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { calendar } from "../data/calendar";
import { fetchRaceResults } from "../services/f1Api";
import type { LiveRaceResult } from "../types/f1";

export function Results() {
  const [liveResults, setLiveResults] = useState<LiveRaceResult[] | null>(null);
  const [status, setStatus] = useState<"loading" | "live" | "fallback">("loading");

  useEffect(() => {
    let ignore = false;

    async function loadResults() {
      try {
        const races = await fetchRaceResults();
        if (!ignore && races.length) {
          setLiveResults(races);
          setStatus("live");
        }
      } catch (error) {
        console.error(error);
        if (!ignore) setStatus("fallback");
      }
    }

    loadResults();
    return () => {
      ignore = true;
    };
  }, []);

  const fallbackCompleted = calendar.filter((race) => race.status === "completed" && race.podium);

  return (
    <section>
      <PageHeader
        eyebrow="Podiums"
        title="2026 Results"
        description="Completed races with podium finishers. This page tries to pull live race results from the Jolpica F1 API and falls back to the local project snapshot if needed."
      />

      <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/60">
        {status === "loading" && "Loading latest race results..."}
        {status === "live" && "Using live race results from the Jolpica F1 API."}
        {status === "fallback" && "Live API unavailable right now, so this page is showing the saved local snapshot."}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {liveResults
          ? liveResults.map((race) => (
              <article key={race.round} className="glass-card rounded-[2rem] p-6">
                <RaceHeader round={race.round} title={race.raceName} subtitle={race.circuit} />
                {race.podium.length >= 3 ? (
                  <div className="mt-8 grid grid-cols-3 items-end gap-3 text-center">
                    <PodiumBlock place="P2" name={race.podium[1]} height="h-28" />
                    <PodiumBlock place="P1" name={race.podium[0]} height="h-36" primary />
                    <PodiumBlock place="P3" name={race.podium[2]} height="h-24" />
                  </div>
                ) : (
                  <p className="mt-6 text-white/60">Results are not available yet for this round.</p>
                )}
              </article>
            ))
          : fallbackCompleted.map((race) => (
              <article key={race.round} className="glass-card rounded-[2rem] p-6">
                <RaceHeader round={race.round} title={race.grandPrix} subtitle={`${race.location}, ${race.country}`} />
                <div className="mt-8 grid grid-cols-3 items-end gap-3 text-center">
                  <PodiumBlock place="P2" name={race.podium!.second} height="h-28" />
                  <PodiumBlock place="P1" name={race.podium!.first} height="h-36" primary />
                  <PodiumBlock place="P3" name={race.podium!.third} height="h-24" />
                </div>
              </article>
            ))}
      </div>
    </section>
  );
}

function RaceHeader({ round, title, subtitle }: { round: number; title: string; subtitle: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/40">Round {round}</p>
        <h2 className="mt-2 text-2xl font-black">{title}</h2>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
      <Trophy className="text-[#E10600]" />
    </div>
  );
}

function PodiumBlock({ place, name, height, primary = false }: { place: string; name: string; height: string; primary?: boolean }) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-white/70">{name}</p>
      <div className={`${height} rounded-3xl border border-white/10 ${primary ? "bg-[#E10600]" : "bg-white/10"} p-4`}>
        <p className="text-2xl font-black">{place}</p>
      </div>
    </div>
  );
}
