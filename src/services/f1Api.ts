import type { LiveRaceResult, Standing } from "../types/f1";

const BASE_URL = "https://api.jolpi.ca/ergast/f1";
const SEASON = "2026";

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`F1 API request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

type JolpicaDriverStanding = {
  position: string;
  points: string;
  Driver: {
    givenName: string;
    familyName: string;
    code?: string;
  };
  Constructors: { name: string }[];
};

type JolpicaConstructorStanding = {
  position: string;
  points: string;
  Constructor: { name: string };
};

type JolpicaRaceResult = {
  position: string;
  points: string;
  status: string;
  Driver: { givenName: string; familyName: string; code?: string };
  Constructor: { name: string };
};

type JolpicaRace = {
  season: string;
  round: string;
  raceName: string;
  date: string;
  Circuit: {
    circuitName: string;
    Location: {
      locality: string;
      country: string;
    };
  };
  Results?: JolpicaRaceResult[];
};

type DriverStandingsResponse = {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        DriverStandings: JolpicaDriverStanding[];
      }[];
    };
  };
};

type ConstructorStandingsResponse = {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        ConstructorStandings: JolpicaConstructorStanding[];
      }[];
    };
  };
};

type RaceResultsResponse = {
  MRData: {
    RaceTable: {
      Races: JolpicaRace[];
    };
  };
};

const driverName = (driver: { givenName: string; familyName: string }) =>
  `${driver.givenName} ${driver.familyName}`;

export async function fetchDriverStandings(): Promise<Standing[]> {
  const data = await getJson<DriverStandingsResponse>(`/${SEASON}/driverstandings.json?limit=100`);
  const list = data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings ?? [];

  return list.map((item) => ({
    position: Number(item.position),
    name: driverName(item.Driver),
    team: item.Constructors[0]?.name ?? "",
    points: Number(item.points),
  }));
}

export async function fetchConstructorStandings(): Promise<Standing[]> {
  const data = await getJson<ConstructorStandingsResponse>(`/${SEASON}/constructorstandings.json?limit=100`);
  const list = data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings ?? [];

  return list.map((item) => ({
    position: Number(item.position),
    name: item.Constructor.name,
    points: Number(item.points),
  }));
}

export async function fetchRaceResults(): Promise<LiveRaceResult[]> {
  const data = await getJson<RaceResultsResponse>(`/${SEASON}/results.json?limit=1000`);
  const races = data.MRData.RaceTable.Races ?? [];

  return races.map((race) => {
    const results = race.Results ?? [];
    const podium = results.slice(0, 3).map((result) => driverName(result.Driver));

    return {
      round: Number(race.round),
      raceName: race.raceName,
      circuit: `${race.Circuit.circuitName}, ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`,
      date: race.date,
      winner: podium[0],
      podium,
      results: results.map((result) => ({
        position: result.position,
        driver: driverName(result.Driver),
        constructor: result.Constructor.name,
        points: result.points,
        status: result.status,
      })),
    };
  });
}
