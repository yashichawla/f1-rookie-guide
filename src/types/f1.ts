export type Team = {
  id: string;
  name: string;
  fullName: string;
  base: string;
  teamPrincipal?: string;
  powerUnit?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  drivers: string[];
  intro: string;
  vibe: string;
};

export type Driver = {
  id: string;
  name: string;
  code: string;
  nationality: string;
  birthPlace?: string;
  teamId: string;
  number?: number;
  bio: string;
  background: string;
  family: string;
  whyTheyMatter: string;
  drivingStyle: string;
  beginnerHook: string;
  teamMoves: TeamMove[];
  careerPath: CareerStep[];
  records: DriverRecord[];
};

export type TeamMove = {
  years: string;
  team: string;
  note: string;
};

export type CareerStep = {
  year: string;
  series: string;
  team?: string;
  highlight: string;
};

export type DriverRecord = {
  label: string;
  value: string;
};

export type Race = {
  round: number;
  country: string;
  grandPrix: string;
  circuit: string;
  location: string;
  startDate: string;
  endDate: string;
  sprint?: boolean;
  status: "completed" | "upcoming";
  podium?: {
    first: string;
    second: string;
    third: string;
  };
};

export type Standing = {
  position: number;
  name: string;
  team?: string;
  points: number;
};

export type LiveRaceResult = {
  round: number;
  raceName: string;
  circuit: string;
  date: string;
  winner?: string;
  podium: string[];
  results: {
    position: string;
    driver: string;
    constructor: string;
    points: string;
    status: string;
  }[];
};
