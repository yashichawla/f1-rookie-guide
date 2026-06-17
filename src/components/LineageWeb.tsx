import { useMemo, useState } from "react";
import {
  lineageDrivers,
  lineageTeams,
  lineageYears,
  type LineageDriver,
  type LineageSeat,
} from "../data/lineageData";

type Point = {
  x: number;
  y: number;
  year: number;
  teamId: string;
  seat: LineageSeat;
};

const LEFT_LABEL_WIDTH = 180;
const YEAR_WIDTH = 160;
const ROW_HEIGHT = 92;
const TOP_HEIGHT = 72;
const SEAT_HEIGHT = 28;
const SEAT_WIDTH = 112;

const seatOffsetY: Record<LineageSeat, number> = {
  D1: -18,
  D2: 18,
  R: 0,
  SUB: 0,
};

const seatLabel: Record<LineageSeat, string> = {
  D1: "D1",
  D2: "D2",
  R: "R",
  SUB: "SUB",
};

function getTeamIndex(teamId: string) {
  return lineageTeams.findIndex((team) => team.id === teamId);
}

function getTeamColor(teamId: string) {
  return lineageTeams.find((team) => team.id === teamId)?.color ?? "#FFFFFF";
}

function getDriverPoints(driver: LineageDriver): Point[] {
  return driver.seasons
    .filter((season) => lineageYears.includes(season.year))
    .map((season) => {
      const yearIndex = lineageYears.indexOf(season.year);
      const teamIndex = getTeamIndex(season.teamId);

      return {
        x: LEFT_LABEL_WIDTH + yearIndex * YEAR_WIDTH + YEAR_WIDTH / 2,
        y:
          TOP_HEIGHT +
          teamIndex * ROW_HEIGHT +
          ROW_HEIGHT / 2 +
          seatOffsetY[season.seat],
        year: season.year,
        teamId: season.teamId,
        seat: season.seat,
      };
    })
    .sort((a, b) => a.x - b.x);
}

function getPath(points: Point[]) {
  if (points.length < 2) return "";

  return points
    .map((point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;

      const previous = points[index - 1];
      const midX = (previous.x + point.x) / 2;

      return `C ${midX} ${previous.y}, ${midX} ${point.y}, ${point.x} ${point.y}`;
    })
    .join(" ");
}

export default function LineageWeb() {
  const [activeDriverId, setActiveDriverId] = useState<string | null>(null);
  const [activeTeamId, setActiveTeamId] = useState<string | null>(null);

  const width = LEFT_LABEL_WIDTH + lineageYears.length * YEAR_WIDTH;
  const height = TOP_HEIGHT + lineageTeams.length * ROW_HEIGHT + 40;

  const driverPoints = useMemo(() => {
    return lineageDrivers.map((driver) => {
      const points = getDriverPoints(driver);

      return {
        driver,
        points,
        path: getPath(points),
      };
    });
  }, []);

  const activeDriver = activeDriverId
    ? lineageDrivers.find((driver) => driver.id === activeDriverId)
    : null;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/40 p-4 shadow-[0_0_60px_rgba(225,6,0,0.12)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black">Current-grid driver lineage</h2>
          <p className="mt-1 text-sm text-white/50">
            Track D1/D2 seats and driver movement across recent F1 seasons.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-white/50">
          <span className="rounded-full border border-white/10 px-3 py-1">
            D1 = first listed seat
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            D2 = second listed seat
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            SUB = substitute
          </span>
        </div>
      </div>

      {/* Fixed-height panel prevents layout shift while hovering */}
      <div className="mb-4 min-h-[104px] rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        {activeDriver ? (
          <>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Highlighting
            </p>
            <p className="mt-1 text-xl font-black">
              #{activeDriver.number} {activeDriver.name}
            </p>
            <p className="text-sm text-white/55">
              {activeDriver.nationality} · {activeDriver.code}
            </p>
          </>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">
              Hover guide
            </p>
            <p className="mt-1 text-xl font-black text-white/70">
              Hover over a driver code or line
            </p>
            <p className="text-sm text-white/45">
              The driver’s full team path will light up without shifting the
              chart.
            </p>
          </>
        )}
      </div>

      <div className="overflow-x-auto rounded-[1.5rem] border border-white/10 bg-[#050505]">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="min-w-[1200px]"
          onMouseLeave={() => {
            setActiveDriverId(null);
            setActiveTeamId(null);
          }}
        >
          <defs>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect x="0" y="0" width={width} height={height} fill="#050505" />

          {/* Year headers */}
          {lineageYears.map((year, index) => {
            const x = LEFT_LABEL_WIDTH + index * YEAR_WIDTH;

            return (
              <g key={year} style={{ pointerEvents: "none" }}>
                <line
                  x1={x}
                  y1={0}
                  x2={x}
                  y2={height}
                  stroke="rgba(255,255,255,0.07)"
                />
                <text
                  x={x + YEAR_WIDTH / 2}
                  y={34}
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="900"
                >
                  {year}
                </text>
              </g>
            );
          })}

          {/* Team rows */}
          {lineageTeams.map((team, teamIndex) => {
            const y = TOP_HEIGHT + teamIndex * ROW_HEIGHT;
            const isActiveTeam = activeTeamId === team.id;

            return (
              <g key={team.id}>
                <rect
                  x={0}
                  y={y}
                  width={width}
                  height={ROW_HEIGHT}
                  fill={isActiveTeam ? "rgba(255,255,255,0.055)" : "transparent"}
                  onMouseEnter={() => setActiveTeamId(team.id)}
                />

                <line
                  x1={0}
                  y1={y}
                  x2={width}
                  y2={y}
                  stroke="rgba(255,255,255,0.08)"
                  style={{ pointerEvents: "none" }}
                />

                <rect
                  x={18}
                  y={y + 20}
                  width={8}
                  height={ROW_HEIGHT - 40}
                  rx={4}
                  fill={team.color}
                  style={{ pointerEvents: "none" }}
                />

                <text
                  x={38}
                  y={y + 42}
                  fill="white"
                  fontSize="15"
                  fontWeight="900"
                  style={{ pointerEvents: "none" }}
                >
                  {team.shortName}
                </text>

                <text
                  x={38}
                  y={y + 63}
                  fill="rgba(255,255,255,0.45)"
                  fontSize="11"
                  style={{ pointerEvents: "none" }}
                >
                  {team.name}
                </text>

                {lineageYears.map((year, yearIndex) => {
                  const cellX = LEFT_LABEL_WIDTH + yearIndex * YEAR_WIDTH + 12;

                  return (
                    <rect
                      key={`${team.id}-${year}`}
                      x={cellX}
                      y={y + 12}
                      width={YEAR_WIDTH - 24}
                      height={ROW_HEIGHT - 24}
                      rx={16}
                      fill="rgba(255,255,255,0.025)"
                      stroke="rgba(255,255,255,0.055)"
                      style={{ pointerEvents: "none" }}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Visible movement paths */}
          {driverPoints.map(({ driver, path }) => {
            const isActive = activeDriverId === driver.id;
            const isDimmed =
              Boolean(activeDriverId && !isActive) ||
              Boolean(activeTeamId && driver.currentTeamId !== activeTeamId);

            if (!path) return null;

            return (
              <path
                key={`${driver.id}-visible-path`}
                d={path}
                fill="none"
                stroke={getTeamColor(driver.currentTeamId)}
                strokeWidth={isActive ? 5 : 2.3}
                strokeOpacity={isDimmed ? 0.08 : isActive ? 0.95 : 0.34}
                filter={isActive ? "url(#softGlow)" : undefined}
                strokeLinecap="round"
                style={{ pointerEvents: "none" }}
              />
            );
          })}

          {/* Large invisible hover paths */}
          {driverPoints.map(({ driver, path }) => {
            if (!path) return null;

            return (
              <path
                key={`${driver.id}-hover-path`}
                d={path}
                fill="none"
                stroke="transparent"
                strokeWidth={26}
                strokeLinecap="round"
                onMouseEnter={() => {
                  setActiveDriverId(driver.id);
                  setActiveTeamId(driver.currentTeamId);
                }}
                style={{ pointerEvents: "stroke" }}
              />
            );
          })}

          {/* Seat blocks */}
          {driverPoints.map(({ driver, points }) => {
            const isActive = activeDriverId === driver.id;
            const isDimmed =
              Boolean(activeDriverId && !isActive) ||
              Boolean(activeTeamId && driver.currentTeamId !== activeTeamId);

            return (
              <g key={driver.id}>
                {points.map((point) => {
                  const team = lineageTeams.find((item) => item.id === point.teamId);
                  const color = team?.color ?? "#FFFFFF";
                  const textColor = team?.textColor ?? "#FFFFFF";

                  return (
                    <g
                      key={`${driver.id}-${point.year}-${point.teamId}-${point.seat}`}
                      onMouseEnter={() => {
                        setActiveDriverId(driver.id);
                        setActiveTeamId(driver.currentTeamId);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <rect
                        x={point.x - SEAT_WIDTH / 2}
                        y={point.y - SEAT_HEIGHT / 2}
                        width={SEAT_WIDTH}
                        height={SEAT_HEIGHT}
                        rx={10}
                        fill={color}
                        fillOpacity={isDimmed ? 0.16 : isActive ? 1 : 0.72}
                        stroke={isActive ? "white" : "rgba(255,255,255,0.18)"}
                        strokeWidth={isActive ? 2 : 1}
                      />

                      <text
                        x={point.x - 46}
                        y={point.y + 4}
                        fill={textColor}
                        fontSize="9"
                        fontWeight="900"
                        opacity={isDimmed ? 0.2 : 1}
                        style={{ pointerEvents: "none" }}
                      >
                        {seatLabel[point.seat]}
                      </text>

                      <text
                        x={point.x}
                        y={point.y + 4}
                        textAnchor="middle"
                        fill={textColor}
                        fontSize="11"
                        fontWeight="900"
                        opacity={isDimmed ? 0.2 : 1}
                        style={{ pointerEvents: "none" }}
                      >
                        {driver.code}
                      </text>

                      <text
                        x={point.x + 45}
                        y={point.y + 4}
                        textAnchor="end"
                        fill={textColor}
                        fontSize="9"
                        fontWeight="900"
                        opacity={isDimmed ? 0.2 : 1}
                        style={{ pointerEvents: "none" }}
                      >
                        #{driver.number}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}