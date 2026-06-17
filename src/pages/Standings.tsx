import { useEffect, useState } from "react";
import { StandingsTable } from "../components/StandingsTable";
import { PageHeader } from "../components/PageHeader";
import { constructorStandings, driverStandings } from "../data/standings";
import { fetchConstructorStandings, fetchDriverStandings } from "../services/f1Api";
import type { Standing } from "../types/f1";

export function Standings() {
  const [liveDrivers, setLiveDrivers] = useState<Standing[] | null>(null);
  const [liveConstructors, setLiveConstructors] = useState<Standing[] | null>(null);
  const [status, setStatus] = useState<"loading" | "live" | "fallback">("loading");

  useEffect(() => {
    let ignore = false;

    async function loadStandings() {
      try {
        const [drivers, constructors] = await Promise.all([
          fetchDriverStandings(),
          fetchConstructorStandings(),
        ]);

        if (!ignore && drivers.length && constructors.length) {
          setLiveDrivers(drivers);
          setLiveConstructors(constructors);
          setStatus("live");
        }
      } catch (error) {
        console.error(error);
        if (!ignore) setStatus("fallback");
      }
    }

    loadStandings();
    return () => {
      ignore = true;
    };
  }, []);

  const drivers = liveDrivers ?? driverStandings;
  const constructors = liveConstructors ?? constructorStandings;

  return (
    <section>
      <PageHeader
        eyebrow="Championship fight"
        title="2026 Standings"
        description="Driver and constructor points. The page tries to load live data from the Jolpica F1 API and falls back to the local project snapshot if the API is unavailable."
      />

      <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/60">
        {status === "loading" && "Loading latest standings..."}
        {status === "live" && "Using live standings from the Jolpica F1 API."}
        {status === "fallback" && "Live API unavailable right now, so this page is showing the saved local snapshot."}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <StandingsTable title="Driver Standings" rows={drivers} />
        <StandingsTable title="Constructor Standings" rows={constructors} />
      </div>
    </section>
  );
}
