import type { Standing } from "../types/f1";

export const driverStandings: Standing[] = [
  { position: 1, name: "Kimi Antonelli", team: "Mercedes", points: 156 },
  { position: 2, name: "Lewis Hamilton", team: "Ferrari", points: 115 },
  { position: 3, name: "George Russell", team: "Mercedes", points: 106 },
  { position: 4, name: "Charles Leclerc", team: "Ferrari", points: 75 },
  { position: 5, name: "Lando Norris", team: "McLaren", points: 73 },
  { position: 6, name: "Oscar Piastri", team: "McLaren", points: 68 },
  { position: 7, name: "Max Verstappen", team: "Red Bull Racing", points: 55 },
  { position: 8, name: "Fernando Alonso", team: "Aston Martin", points: 37 },
  { position: 9, name: "Pierre Gasly", team: "Alpine", points: 33 },
  { position: 10, name: "Carlos Sainz", team: "Williams", points: 28 }
];

export const constructorStandings: Standing[] = [
  { position: 1, name: "Mercedes", points: 262 },
  { position: 2, name: "Ferrari", points: 190 },
  { position: 3, name: "McLaren", points: 141 },
  { position: 4, name: "Red Bull Racing", points: 89 },
  { position: 5, name: "Alpine", points: 57 },
  { position: 6, name: "Racing Bulls", points: 41 },
  { position: 7, name: "Haas F1 Team", points: 21 },
  { position: 8, name: "Williams", points: 11 },
  { position: 9, name: "Audi", points: 2 },
  { position: 10, name: "Aston Martin", points: 1 },
  { position: 11, name: "Cadillac", points: 0 }
];
