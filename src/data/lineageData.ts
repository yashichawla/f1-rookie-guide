export type LineageSeat = "D1" | "D2" | "R" | "SUB";

export type LineageTeam = {
  id: string;
  name: string;
  shortName: string;
  color: string;
  textColor?: string;
};

export type LineageDriverSeason = {
  year: number;
  teamId: string;
  seat: LineageSeat;
};

export type LineageDriver = {
  id: string;
  name: string;
  code: string;
  number: number;
  nationality: string;
  currentTeamId: string;
  seasons: LineageDriverSeason[];
};

export const lineageYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020];

export const lineageTeams: LineageTeam[] = [
  {
    id: "mercedes",
    name: "Mercedes",
    shortName: "Mercedes",
    color: "#00A19C",
  },
  {
    id: "ferrari",
    name: "Ferrari",
    shortName: "Ferrari",
    color: "#DC0000",
  },
  {
    id: "mclaren",
    name: "McLaren",
    shortName: "McLaren",
    color: "#FF8000",
    textColor: "#111111",
  },
  {
    id: "red-bull",
    name: "Red Bull Racing",
    shortName: "Red Bull",
    color: "#1E41FF",
  },
  {
    id: "alpine",
    name: "Alpine / Renault",
    shortName: "Alpine",
    color: "#2293D1",
  },
  {
    id: "racing-bulls",
    name: "Racing Bulls / RB / AlphaTauri",
    shortName: "Racing Bulls",
    color: "#1534CB",
  },
  {
    id: "haas",
    name: "Haas F1 Team",
    shortName: "Haas",
    color: "#B6BABD",
    textColor: "#111111",
  },
  {
    id: "williams",
    name: "Williams",
    shortName: "Williams",
    color: "#00A3E0",
  },
  {
    id: "audi",
    name: "Audi / Sauber / Alfa Romeo",
    shortName: "Audi/Sauber",
    color: "#BB0A30",
  },
  {
    id: "aston-martin",
    name: "Aston Martin / Racing Point",
    shortName: "Aston Martin",
    color: "#006F62",
  },
  {
    id: "cadillac",
    name: "Cadillac",
    shortName: "Cadillac",
    color: "#D4AF37",
    textColor: "#111111",
  },
];

export const lineageDrivers: LineageDriver[] = [
  {
    id: "george-russell",
    name: "George Russell",
    code: "RUS",
    number: 63,
    nationality: "United Kingdom",
    currentTeamId: "mercedes",
    seasons: [
      { year: 2026, teamId: "mercedes", seat: "D1" },
      { year: 2025, teamId: "mercedes", seat: "D1" },
      { year: 2024, teamId: "mercedes", seat: "D2" },
      { year: 2023, teamId: "mercedes", seat: "D2" },
      { year: 2022, teamId: "mercedes", seat: "D2" },
      { year: 2021, teamId: "williams", seat: "D1" },
      { year: 2020, teamId: "williams", seat: "D1" },
    ],
  },
  {
    id: "kimi-antonelli",
    name: "Kimi Antonelli",
    code: "ANT",
    number: 12,
    nationality: "Italy",
    currentTeamId: "mercedes",
    seasons: [
      { year: 2026, teamId: "mercedes", seat: "D2" },
      { year: 2025, teamId: "mercedes", seat: "D2" },
    ],
  },
  {
    id: "charles-leclerc",
    name: "Charles Leclerc",
    code: "LEC",
    number: 16,
    nationality: "Monaco",
    currentTeamId: "ferrari",
    seasons: [
      { year: 2026, teamId: "ferrari", seat: "D1" },
      { year: 2025, teamId: "ferrari", seat: "D1" },
      { year: 2024, teamId: "ferrari", seat: "D1" },
      { year: 2023, teamId: "ferrari", seat: "D1" },
      { year: 2022, teamId: "ferrari", seat: "D1" },
      { year: 2021, teamId: "ferrari", seat: "D1" },
      { year: 2020, teamId: "ferrari", seat: "D1" },
    ],
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    code: "HAM",
    number: 44,
    nationality: "United Kingdom",
    currentTeamId: "ferrari",
    seasons: [
      { year: 2026, teamId: "ferrari", seat: "D2" },
      { year: 2025, teamId: "ferrari", seat: "D2" },
      { year: 2024, teamId: "mercedes", seat: "D1" },
      { year: 2023, teamId: "mercedes", seat: "D1" },
      { year: 2022, teamId: "mercedes", seat: "D1" },
      { year: 2021, teamId: "mercedes", seat: "D1" },
      { year: 2020, teamId: "mercedes", seat: "D1" },
    ],
  },
  {
    id: "lando-norris",
    name: "Lando Norris",
    code: "NOR",
    number: 1,
    nationality: "United Kingdom",
    currentTeamId: "mclaren",
    seasons: [
      { year: 2026, teamId: "mclaren", seat: "D1" },
      { year: 2025, teamId: "mclaren", seat: "D1" },
      { year: 2024, teamId: "mclaren", seat: "D1" },
      { year: 2023, teamId: "mclaren", seat: "D1" },
      { year: 2022, teamId: "mclaren", seat: "D1" },
      { year: 2021, teamId: "mclaren", seat: "D1" },
      { year: 2020, teamId: "mclaren", seat: "D1" },
    ],
  },
  {
    id: "oscar-piastri",
    name: "Oscar Piastri",
    code: "PIA",
    number: 81,
    nationality: "Australia",
    currentTeamId: "mclaren",
    seasons: [
      { year: 2026, teamId: "mclaren", seat: "D2" },
      { year: 2025, teamId: "mclaren", seat: "D2" },
      { year: 2024, teamId: "mclaren", seat: "D2" },
      { year: 2023, teamId: "mclaren", seat: "D2" },
    ],
  },
  {
    id: "max-verstappen",
    name: "Max Verstappen",
    code: "VER",
    number: 3,
    nationality: "Netherlands",
    currentTeamId: "red-bull",
    seasons: [
      { year: 2026, teamId: "red-bull", seat: "D1" },
      { year: 2025, teamId: "red-bull", seat: "D1" },
      { year: 2024, teamId: "red-bull", seat: "D1" },
      { year: 2023, teamId: "red-bull", seat: "D1" },
      { year: 2022, teamId: "red-bull", seat: "D1" },
      { year: 2021, teamId: "red-bull", seat: "D1" },
      { year: 2020, teamId: "red-bull", seat: "D1" },
    ],
  },
  {
    id: "isack-hadjar",
    name: "Isack Hadjar",
    code: "HAD",
    number: 6,
    nationality: "France",
    currentTeamId: "red-bull",
    seasons: [
      { year: 2026, teamId: "red-bull", seat: "D2" },
      { year: 2025, teamId: "racing-bulls", seat: "D2" },
    ],
  },
  {
    id: "pierre-gasly",
    name: "Pierre Gasly",
    code: "GAS",
    number: 10,
    nationality: "France",
    currentTeamId: "alpine",
    seasons: [
      { year: 2026, teamId: "alpine", seat: "D1" },
      { year: 2025, teamId: "alpine", seat: "D1" },
      { year: 2024, teamId: "alpine", seat: "D2" },
      { year: 2023, teamId: "alpine", seat: "D2" },
      { year: 2022, teamId: "racing-bulls", seat: "D1" },
      { year: 2021, teamId: "racing-bulls", seat: "D1" },
      { year: 2020, teamId: "racing-bulls", seat: "D1" },
    ],
  },
  {
    id: "franco-colapinto",
    name: "Franco Colapinto",
    code: "COL",
    number: 43,
    nationality: "Argentina",
    currentTeamId: "alpine",
    seasons: [
      { year: 2026, teamId: "alpine", seat: "D2" },
      { year: 2024, teamId: "williams", seat: "SUB" },
    ],
  },
  {
    id: "liam-lawson",
    name: "Liam Lawson",
    code: "LAW",
    number: 30,
    nationality: "New Zealand",
    currentTeamId: "racing-bulls",
    seasons: [
      { year: 2026, teamId: "racing-bulls", seat: "D1" },
      { year: 2025, teamId: "red-bull", seat: "D2" },
      { year: 2024, teamId: "racing-bulls", seat: "SUB" },
      { year: 2023, teamId: "racing-bulls", seat: "SUB" },
    ],
  },
  {
    id: "arvid-lindblad",
    name: "Arvid Lindblad",
    code: "LIN",
    number: 41,
    nationality: "United Kingdom",
    currentTeamId: "racing-bulls",
    seasons: [
      { year: 2026, teamId: "racing-bulls", seat: "D2" },
    ],
  },
  {
    id: "esteban-ocon",
    name: "Esteban Ocon",
    code: "OCO",
    number: 31,
    nationality: "France",
    currentTeamId: "haas",
    seasons: [
      { year: 2026, teamId: "haas", seat: "D1" },
      { year: 2025, teamId: "haas", seat: "D1" },
      { year: 2024, teamId: "alpine", seat: "D1" },
      { year: 2023, teamId: "alpine", seat: "D1" },
      { year: 2022, teamId: "alpine", seat: "D1" },
      { year: 2021, teamId: "alpine", seat: "D1" },
      { year: 2020, teamId: "alpine", seat: "D1" },
    ],
  },
  {
    id: "oliver-bearman",
    name: "Oliver Bearman",
    code: "BEA",
    number: 87,
    nationality: "United Kingdom",
    currentTeamId: "haas",
    seasons: [
      { year: 2026, teamId: "haas", seat: "D2" },
      { year: 2025, teamId: "haas", seat: "D2" },
      { year: 2024, teamId: "ferrari", seat: "SUB" },
      { year: 2024, teamId: "haas", seat: "SUB" },
    ],
  },
  {
    id: "carlos-sainz",
    name: "Carlos Sainz",
    code: "SAI",
    number: 55,
    nationality: "Spain",
    currentTeamId: "williams",
    seasons: [
      { year: 2026, teamId: "williams", seat: "D1" },
      { year: 2025, teamId: "williams", seat: "D1" },
      { year: 2024, teamId: "ferrari", seat: "D2" },
      { year: 2023, teamId: "ferrari", seat: "D2" },
      { year: 2022, teamId: "ferrari", seat: "D2" },
      { year: 2021, teamId: "ferrari", seat: "D2" },
      { year: 2020, teamId: "mclaren", seat: "D2" },
    ],
  },
  {
    id: "alexander-albon",
    name: "Alexander Albon",
    code: "ALB",
    number: 23,
    nationality: "Thailand",
    currentTeamId: "williams",
    seasons: [
      { year: 2026, teamId: "williams", seat: "D2" },
      { year: 2025, teamId: "williams", seat: "D2" },
      { year: 2024, teamId: "williams", seat: "D1" },
      { year: 2023, teamId: "williams", seat: "D1" },
      { year: 2022, teamId: "williams", seat: "D1" },
      { year: 2020, teamId: "red-bull", seat: "D2" },
    ],
  },
  {
    id: "nico-hulkenberg",
    name: "Nico Hulkenberg",
    code: "HUL",
    number: 27,
    nationality: "Germany",
    currentTeamId: "audi",
    seasons: [
      { year: 2026, teamId: "audi", seat: "D1" },
      { year: 2025, teamId: "audi", seat: "D1" },
      { year: 2024, teamId: "haas", seat: "D2" },
      { year: 2023, teamId: "haas", seat: "D2" },
      { year: 2022, teamId: "aston-martin", seat: "SUB" },
      { year: 2020, teamId: "aston-martin", seat: "SUB" },
    ],
  },
  {
    id: "gabriel-bortoleto",
    name: "Gabriel Bortoleto",
    code: "BOR",
    number: 5,
    nationality: "Brazil",
    currentTeamId: "audi",
    seasons: [
      { year: 2026, teamId: "audi", seat: "D2" },
      { year: 2025, teamId: "audi", seat: "D2" },
    ],
  },
  {
    id: "fernando-alonso",
    name: "Fernando Alonso",
    code: "ALO",
    number: 14,
    nationality: "Spain",
    currentTeamId: "aston-martin",
    seasons: [
      { year: 2026, teamId: "aston-martin", seat: "D1" },
      { year: 2025, teamId: "aston-martin", seat: "D1" },
      { year: 2024, teamId: "aston-martin", seat: "D1" },
      { year: 2023, teamId: "aston-martin", seat: "D2" },
      { year: 2022, teamId: "alpine", seat: "D2" },
      { year: 2021, teamId: "alpine", seat: "D2" },
    ],
  },
  {
    id: "lance-stroll",
    name: "Lance Stroll",
    code: "STR",
    number: 18,
    nationality: "Canada",
    currentTeamId: "aston-martin",
    seasons: [
      { year: 2026, teamId: "aston-martin", seat: "D2" },
      { year: 2025, teamId: "aston-martin", seat: "D2" },
      { year: 2024, teamId: "aston-martin", seat: "D2" },
      { year: 2023, teamId: "aston-martin", seat: "D1" },
      { year: 2022, teamId: "aston-martin", seat: "D1" },
      { year: 2021, teamId: "aston-martin", seat: "D1" },
      { year: 2020, teamId: "aston-martin", seat: "D1" },
    ],
  },
  {
    id: "sergio-perez",
    name: "Sergio Perez",
    code: "PER",
    number: 11,
    nationality: "Mexico",
    currentTeamId: "cadillac",
    seasons: [
      { year: 2026, teamId: "cadillac", seat: "D1" },
      { year: 2024, teamId: "red-bull", seat: "D2" },
      { year: 2023, teamId: "red-bull", seat: "D2" },
      { year: 2022, teamId: "red-bull", seat: "D2" },
      { year: 2021, teamId: "red-bull", seat: "D2" },
      { year: 2020, teamId: "aston-martin", seat: "D2" },
    ],
  },
  {
    id: "valtteri-bottas",
    name: "Valtteri Bottas",
    code: "BOT",
    number: 77,
    nationality: "Finland",
    currentTeamId: "cadillac",
    seasons: [
      { year: 2026, teamId: "cadillac", seat: "D2" },
      { year: 2024, teamId: "audi", seat: "D1" },
      { year: 2023, teamId: "audi", seat: "D1" },
      { year: 2022, teamId: "audi", seat: "D1" },
      { year: 2021, teamId: "mercedes", seat: "D2" },
      { year: 2020, teamId: "mercedes", seat: "D2" },
    ],
  },
];