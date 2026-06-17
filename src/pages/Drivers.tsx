import { DriverCard } from "../components/DriverCard";
import { PageHeader } from "../components/PageHeader";
import { drivers } from "../data/drivers";

export function Drivers() {
  return (
    <section>
      <PageHeader
        eyebrow="The grid"
        title="2026 Drivers"
        description="Tap into each driver for a deeper beginner-friendly profile: background, family/upbringing, team moves, major records, driving style, and a reverse timeline from the current season back to karting."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
    </section>
  );
}
