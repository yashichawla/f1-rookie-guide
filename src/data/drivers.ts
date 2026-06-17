import type { Driver } from "../types/f1";

type DriverWithAge = Driver & {
  age: number;
  dateOfBirth: string;
  profileTag: string;
  heroStatline: string;
};

export const drivers: DriverWithAge[] = [
  {
    id: "george-russell",
    name: "George Russell",
    code: "RUS",
    nationality: "United Kingdom",
    birthPlace: "King's Lynn, England",
    dateOfBirth: "1998-02-15",
    age: 28,
    teamId: "mercedes",
    number: 63,
    profileTag: "The analytical Mercedes benchmark",
    heroStatline: "F2 Champion • GP3 Champion • Mercedes race winner",
    bio: "George Russell is a precise, highly analytical British driver known for qualifying speed, discipline, and turning complicated race weekends into points.",
    background:
      "Russell grew up in Norfolk and started karting as a child. His route to F1 is a classic British junior ladder story: karting, Formula 4, GP3, Formula 2, Williams, and then Mercedes. He became known early for being technically sharp and unusually polished in how he explained car behaviour.",
    family:
      "Russell was not from a famous racing dynasty. His family supported his karting years heavily, and his rise is usually framed around consistent junior results, Mercedes academy backing, and a very professional approach from a young age.",
    whyTheyMatter:
      "Russell shows new fans how F1 teams value more than just raw speed. He is quick, media-ready, technically detailed, and able to lead development conversations with engineers.",
    drivingStyle:
      "Smooth, calculated, and especially strong over one lap. Russell is often at his best when he can build rhythm, manage tires, and extract pace from a car that is not always the fastest.",
    beginnerHook:
      "Watch Russell in qualifying or in mixed-condition races. He often finds results from weekends that look messy on paper.",
    teamMoves: [
      { years: "2026", team: "Mercedes", note: "Continues as one of Mercedes' lead drivers." },
      { years: "2022–2025", team: "Mercedes", note: "Promoted to the works Mercedes team after three seasons at Williams." },
      { years: "2019–2021", team: "Williams", note: "Made his F1 debut and built his reputation with standout qualifying laps in a slower car." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Mercedes", highlight: "Races as a central figure in Mercedes' current lineup." },
      { year: "2022–2025", series: "Formula 1", team: "Mercedes", highlight: "Became a race-winning Mercedes driver and regular podium contender." },
      { year: "2019–2021", series: "Formula 1", team: "Williams", highlight: "Earned the Mercedes promotion through strong qualifying and disciplined race craft." },
      { year: "2018", series: "Formula 2", highlight: "Won the F2 Championship before graduating to F1." },
      { year: "2017", series: "GP3", highlight: "Won the GP3 Championship as a Mercedes junior." },
      { year: "Karting–2014", series: "Karting / junior single-seaters", highlight: "Built his early racing foundation through British and European karting." }
    ],
    records: [
      { label: "Age", value: "28" },
      { label: "Car Number", value: "63" },
      { label: "F2 Champion", value: "2018" },
      { label: "GP3 Champion", value: "2017" },
      { label: "Known For", value: "Qualifying pace" }
    ]
  },
  {
    id: "kimi-antonelli",
    name: "Kimi Antonelli",
    code: "ANT",
    nationality: "Italy",
    birthPlace: "Bologna, Italy",
    dateOfBirth: "2006-08-25",
    age: 19,
    teamId: "mercedes",
    number: 12,
    profileTag: "The Mercedes wonderkid",
    heroStatline: "F4 champion • Formula Regional champion • Mercedes prodigy",
    bio: "Kimi Antonelli is one of the most hyped young drivers of his generation, carrying huge Mercedes expectations at a very young age.",
    background:
      "Antonelli came through elite European karting and quickly became one of the most watched junior drivers in the world. His climb was unusually fast, with Mercedes backing him early and moving him aggressively through the single-seater ladder.",
    family:
      "He comes from a motorsport environment. His father, Marco Antonelli, has been involved in racing and team ownership, so Kimi grew up around circuits and racing culture. Even with that access, his junior results are what made him a serious Mercedes prospect.",
    whyTheyMatter:
      "Antonelli represents the modern F1 talent pipeline: teams identify exceptional drivers in karting, place them into junior programmes, and prepare them for F1 before they are even in their twenties.",
    drivingStyle:
      "Fast, brave, and adaptive. His biggest strength is how quickly he looks comfortable in faster machinery, though young-driver consistency is always part of the storyline.",
    beginnerHook:
      "Watch how Mercedes manages him. Young F1 drivers are judged on speed, mistakes, pressure, media handling, and how quickly they learn.",
    teamMoves: [
      { years: "2026", team: "Mercedes", note: "Continues with Mercedes as one of the team's key future-focused drivers." },
      { years: "Mercedes junior years", team: "Mercedes programme", note: "Developed as one of Mercedes' highest-rated academy drivers." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Mercedes", highlight: "Races in F1 with major championship-level expectations." },
      { year: "2024", series: "Formula 2", highlight: "Jumped to F2 as a Mercedes-backed prospect." },
      { year: "2023", series: "Formula Regional", highlight: "Won major Formula Regional titles and strengthened his reputation as a future F1 driver." },
      { year: "2022", series: "Formula 4", highlight: "Won in Italian F4 and ADAC F4, becoming one of Europe's hottest prospects." },
      { year: "Karting", series: "Karting", highlight: "Built his name in elite karting before moving into single-seaters." }
    ],
    records: [
      { label: "Age", value: "19" },
      { label: "Car Number", value: "12" },
      { label: "Italian F4 Champion", value: "2022" },
      { label: "ADAC F4 Champion", value: "2022" },
      { label: "Known For", value: "Huge junior hype" }
    ]
  },
  {
    id: "charles-leclerc",
    name: "Charles Leclerc",
    code: "LEC",
    nationality: "Monaco",
    birthPlace: "Monte Carlo, Monaco",
    dateOfBirth: "1997-10-16",
    age: 28,
    teamId: "ferrari",
    number: 16,
    profileTag: "Ferrari's emotional pole-lap artist",
    heroStatline: "F2 Champion • GP3 Champion • Ferrari race winner",
    bio: "Charles Leclerc is Ferrari's Monegasque star, known for emotional intensity, elite qualifying laps, and carrying massive expectation from the Tifosi.",
    background:
      "Leclerc grew up in Monaco and raced karts from a young age. His career is deeply tied to Ferrari romance and personal loss, including the deaths of close friend Jules Bianchi and his father Hervé during his rise through the junior categories.",
    family:
      "His father Hervé supported his racing dream, while his brother Arthur also raced professionally. Charles' story is often framed around family sacrifice, grief, and trying to fulfil a dream that feels bigger than just racing.",
    whyTheyMatter:
      "Leclerc is one of the most emotionally compelling drivers on the grid. For new fans, he represents both the magic and pressure of driving for Ferrari.",
    drivingStyle:
      "Explosive over one lap, especially on street circuits. He can produce qualifying laps that look faster than the car's expected level.",
    beginnerHook:
      "Watch Ferrari qualifying sessions. Leclerc is one of the drivers most likely to create a dramatic pole-position moment.",
    teamMoves: [
      { years: "2026", team: "Ferrari", note: "Continues as a central Ferrari figure." },
      { years: "2019–2025", team: "Ferrari", note: "Promoted after one rookie season and became a Ferrari race winner." },
      { years: "2018", team: "Sauber", note: "Made his F1 debut and quickly earned the Ferrari promotion." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Ferrari", highlight: "Remains one of Ferrari's main championship hopes." },
      { year: "2019–2025", series: "Formula 1", team: "Ferrari", highlight: "Won races, took poles, and became one of F1's elite qualifiers." },
      { year: "2018", series: "Formula 1", team: "Sauber", highlight: "Impressed immediately as a rookie." },
      { year: "2017", series: "Formula 2", highlight: "Won the F2 Championship in dominant style." },
      { year: "2016", series: "GP3", highlight: "Won the GP3 Championship." },
      { year: "Karting", series: "Karting", highlight: "Raced through European karting with several future F1 rivals." }
    ],
    records: [
      { label: "Age", value: "28" },
      { label: "Car Number", value: "16" },
      { label: "F2 Champion", value: "2017" },
      { label: "GP3 Champion", value: "2016" },
      { label: "Known For", value: "Pole laps" }
    ]
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    code: "HAM",
    nationality: "United Kingdom",
    birthPlace: "Stevenage, England",
    dateOfBirth: "1985-01-07",
    age: 41,
    teamId: "ferrari",
    number: 44,
    profileTag: "The record-breaking icon",
    heroStatline: "7 World Championships • 100+ wins • First Black F1 driver",
    bio: "Lewis Hamilton is a seven-time world champion, cultural icon, and the first and only Black driver to race in Formula 1.",
    background:
      "Hamilton grew up in Stevenage and came from a comparatively humble background for a sport as expensive as motorsport. His father Anthony worked multiple jobs to support his karting. Hamilton's talent eventually earned backing from McLaren and Mercedes when he was still a child.",
    family:
      "His father Anthony was central to his early career, managing, supporting, and funding his karting years. His story is often told through sacrifice: long karting weekends, limited money compared with many rivals, and a family pushing into a sport where very few people looked like him.",
    whyTheyMatter:
      "Hamilton is one of the most important figures in F1 history. He tied Michael Schumacher's record of seven world titles, broke major statistical records, and expanded the sport's cultural reach through activism, fashion, music, diversity work, and Mission 44.",
    drivingStyle:
      "Exceptionally adaptable: smooth on tires, elite in wet conditions, strong in wheel-to-wheel battles, and historically devastating when given a championship-level car.",
    beginnerHook:
      "Hamilton is the driver to study if you want to understand greatness across eras: rookie brilliance at McLaren, dominance at Mercedes, and a late-career Ferrari chapter.",
    teamMoves: [
      { years: "2026", team: "Ferrari", note: "Continues the blockbuster Ferrari chapter." },
      { years: "2025", team: "Ferrari", note: "Moved to Ferrari in one of the biggest driver switches in F1 history." },
      { years: "2013–2024", team: "Mercedes", note: "Won six of his seven world titles and became F1's most statistically successful driver." },
      { years: "2007–2012", team: "McLaren", note: "Debuted as a rookie title contender and won the 2008 World Championship." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Ferrari", highlight: "Races for Ferrari as a seven-time world champion chasing another chapter of history." },
      { year: "2025", series: "Formula 1", team: "Ferrari", highlight: "Started his Ferrari era after more than a decade with Mercedes." },
      { year: "2014–2020", series: "Formula 1", team: "Mercedes", highlight: "Won six world championships with Mercedes during one of F1's most dominant eras." },
      { year: "2013", series: "Formula 1", team: "Mercedes", highlight: "Made the bold move from McLaren to Mercedes before the hybrid-era dominance began." },
      { year: "2008", series: "Formula 1", team: "McLaren", highlight: "Won his first World Championship." },
      { year: "2007", series: "Formula 1", team: "McLaren", highlight: "Made a sensational rookie debut and finished one point from the title." },
      { year: "2006", series: "GP2", highlight: "Won the GP2 title before entering F1." },
      { year: "2005", series: "Formula 3 Euro Series", highlight: "Won the F3 Euro Series title." },
      { year: "Karting", series: "Karting", highlight: "Started karting as a child and became a McLaren-backed prodigy." }
    ],
    records: [
      { label: "Age", value: "41" },
      { label: "Car Number", value: "44" },
      { label: "World Championships", value: "7" },
      { label: "First Black F1 Driver", value: "Yes" },
      { label: "Known For", value: "Records + legacy" }
    ]
  },
  {
    id: "lando-norris",
    name: "Lando Norris",
    code: "NOR",
    nationality: "United Kingdom",
    birthPlace: "Bristol, England",
    dateOfBirth: "1999-11-13",
    age: 26,
    teamId: "mclaren",
    number: 1,
    profileTag: "The reigning champion with papaya energy",
    heroStatline: "2025 World Champion • McLaren star • Former #4, now #1",
    bio: "Lando Norris is McLaren's British star, known for speed, humour, fan popularity, and now the pressure of racing as a world champion.",
    background:
      "Norris was born in Bristol and started racing through karting before becoming one of the most successful junior drivers of his generation. He had strong financial backing compared with many drivers, but his junior record was also genuinely elite.",
    family:
      "His father Adam Norris is a successful businessman, and Lando had access to strong support during his junior career. That background gave him opportunity, while his karting and junior formula results proved he belonged at the top level.",
    whyTheyMatter:
      "Norris is one of the best examples of modern F1 popularity: fast on track, extremely marketable, funny online, and closely tied to McLaren's resurgence.",
    drivingStyle:
      "Sharp, confident, and very strong in medium/high-speed corners. He has grown from promising qualifier into a complete race-winning and title-level driver.",
    beginnerHook:
      "Watch how the mood around Norris changes now that he is no longer only the likeable underdog — he is the driver everyone wants to beat.",
    teamMoves: [
      { years: "2026", team: "McLaren", note: "Races with number 1 as reigning World Champion." },
      { years: "2019–2025", team: "McLaren", note: "Grew from rookie to race winner and then world champion with McLaren." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "McLaren", highlight: "Starts the season as reigning World Champion and switches from #4 to #1." },
      { year: "2025", series: "Formula 1", team: "McLaren", highlight: "Won the World Championship and completed McLaren's comeback story." },
      { year: "2019–2024", series: "Formula 1", team: "McLaren", highlight: "Developed from rookie into McLaren's leading race-winning driver." },
      { year: "2018", series: "Formula 2", highlight: "Finished runner-up before graduating to F1." },
      { year: "2017", series: "FIA Formula 3 European Championship", highlight: "Won the championship." },
      { year: "2015–2016", series: "Formula 4 / Formula Renault", highlight: "Won multiple junior titles and became a major McLaren prospect." },
      { year: "Karting", series: "Karting", highlight: "Became a standout karting talent before moving into cars." }
    ],
    records: [
      { label: "Age", value: "26" },
      { label: "Car Number", value: "1" },
      { label: "World Champion", value: "2025" },
      { label: "Former Number", value: "4" },
      { label: "Known For", value: "McLaren revival" }
    ]
  },
  {
    id: "oscar-piastri",
    name: "Oscar Piastri",
    code: "PIA",
    nationality: "Australia",
    birthPlace: "Melbourne, Australia",
    dateOfBirth: "2001-04-06",
    age: 25,
    teamId: "mclaren",
    number: 81,
    profileTag: "The calm champion-in-waiting",
    heroStatline: "F3 Champion • F2 Champion • McLaren race winner",
    bio: "Oscar Piastri is McLaren's Australian star, known for calm pressure handling, junior-category dominance, and a very composed racing personality.",
    background:
      "Piastri grew up in Melbourne and moved into European racing as a teenager, which is a common but difficult step for non-European drivers. His junior record is exceptional: he won Formula Renault Eurocup, FIA F3, and FIA F2 in consecutive years.",
    family:
      "His family supported the major move from Australia to Europe, a huge commitment in cost, distance, and lifestyle. His rise is often framed as talent plus a very structured, disciplined career path.",
    whyTheyMatter:
      "Piastri is a perfect driver for new fans to follow because his calm personality contrasts with his ruthless junior record. He looks quiet, but his results are extremely loud.",
    drivingStyle:
      "Calm, clinical, and very clean in wheel-to-wheel moments. He tends not to look dramatic, which makes his speed feel even more controlled.",
    beginnerHook:
      "Watch Piastri during pressure moments. He rarely looks panicked, which is exactly why people rate him so highly.",
    teamMoves: [
      { years: "2026", team: "McLaren", note: "Continues in one of the strongest driver pairings on the grid." },
      { years: "2023–2025", team: "McLaren", note: "Joined McLaren after a high-profile contract dispute and quickly proved his level." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "McLaren", highlight: "Races as a core part of McLaren's title-contending lineup." },
      { year: "2023–2025", series: "Formula 1", team: "McLaren", highlight: "Developed into a race-winning, high-pressure McLaren driver." },
      { year: "2022", series: "Reserve year", team: "Alpine", highlight: "Spent a year out of a race seat after winning F2." },
      { year: "2021", series: "Formula 2", highlight: "Won the F2 Championship as a rookie." },
      { year: "2020", series: "Formula 3", highlight: "Won the FIA F3 Championship." },
      { year: "2019", series: "Formula Renault Eurocup", highlight: "Won the title before moving up the ladder." },
      { year: "Karting", series: "Karting", highlight: "Started in Australia before moving to Europe for junior racing." }
    ],
    records: [
      { label: "Age", value: "25" },
      { label: "Car Number", value: "81" },
      { label: "F2 Champion", value: "2021" },
      { label: "F3 Champion", value: "2020" },
      { label: "Known For", value: "Calm precision" }
    ]
  },
  {
    id: "max-verstappen",
    name: "Max Verstappen",
    code: "VER",
    nationality: "Netherlands",
    birthPlace: "Hasselt, Belgium",
    dateOfBirth: "1997-09-30",
    age: 28,
    teamId: "red-bull",
    number: 3,
    profileTag: "The ruthless four-time champion",
    heroStatline: "4 World Championships • Youngest F1 winner • Red Bull icon",
    bio: "Max Verstappen is a four-time world champion and one of the most dominant, aggressive, and technically complete drivers of the modern era.",
    background:
      "Verstappen was raised inside motorsport. His father Jos Verstappen raced in F1, and his mother Sophie Kumpen was a highly rated kart racer. Max's childhood was intensely focused on racing, with karting treated almost like a full-time career from a young age.",
    family:
      "His family background is one of the strongest racing environments on the grid. Jos played a demanding and central role in Max's development, while Sophie also brought serious karting pedigree.",
    whyTheyMatter:
      "Verstappen matters because he changed what people thought was possible at a young age. He debuted in F1 at 17, won on his Red Bull debut at 18, and then became the defining champion of the early 2020s.",
    drivingStyle:
      "Direct, aggressive, and extremely confident on the brakes. He is famous for hard racing, fast adaptation, and extracting maximum performance from a car over a full race stint.",
    beginnerHook:
      "Watch Verstappen in wheel-to-wheel battles. He rarely gives space easily, which is why he is both feared and controversial.",
    teamMoves: [
      { years: "2026", team: "Red Bull Racing", note: "Continues with Red Bull, now racing #3 according to the 2026 number list." },
      { years: "2016–2025", team: "Red Bull Racing", note: "Won on his Red Bull debut and later captured four consecutive world titles." },
      { years: "2015–early 2016", team: "Toro Rosso", note: "Became the youngest driver to start an F1 race." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Red Bull Racing", highlight: "Races as Red Bull's established champion and benchmark driver." },
      { year: "2021–2024", series: "Formula 1", team: "Red Bull Racing", highlight: "Won four consecutive World Championships." },
      { year: "2016", series: "Formula 1", team: "Red Bull Racing", highlight: "Won the Spanish Grand Prix on his Red Bull debut, becoming F1's youngest race winner." },
      { year: "2015", series: "Formula 1", team: "Toro Rosso", highlight: "Made his F1 debut at 17." },
      { year: "2014", series: "FIA Formula 3 European Championship", highlight: "Jumped from karting into F3 and immediately looked F1-ready." },
      { year: "Karting", series: "Karting", highlight: "Built an elite karting record under intense family guidance." }
    ],
    records: [
      { label: "Age", value: "28" },
      { label: "Car Number", value: "3" },
      { label: "World Championships", value: "4" },
      { label: "Youngest F1 Winner", value: "18" },
      { label: "Known For", value: "Relentless race pace" }
    ]
  },
  {
    id: "isack-hadjar",
    name: "Isack Hadjar",
    code: "HAD",
    nationality: "France",
    birthPlace: "Paris, France",
    dateOfBirth: "2004-09-28",
    age: 21,
    teamId: "red-bull",
    number: 6,
    profileTag: "The promoted Red Bull junior",
    heroStatline: "Red Bull junior • F2 front-runner • Red Bull promotion",
    bio: "Isack Hadjar is a French Red Bull-backed driver who climbed through the junior ladder and earned a move into the senior Red Bull team.",
    background:
      "Hadjar developed through karting and the European junior single-seater ladder before becoming part of the Red Bull junior system. His career is associated with intensity, speed, and the high-pressure Red Bull pathway.",
    family:
      "His public story is less about a famous racing family and more about the Red Bull talent pipeline. Like many drivers, karting required early family support before professional backing became decisive.",
    whyTheyMatter:
      "Hadjar shows new fans how ruthless the Red Bull system can be: if a young driver is fast enough, they can be promoted quickly, but the pressure rises immediately.",
    drivingStyle:
      "Fiery, aggressive, and emotional. He has shown strong speed in junior categories and tends to bring visible intensity to race weekends.",
    beginnerHook:
      "Watch how Hadjar compares to Verstappen. Being Max's teammate is one of the hardest jobs in modern F1.",
    teamMoves: [
      { years: "2026", team: "Red Bull Racing", note: "Promoted to the senior Red Bull team alongside Max Verstappen." },
      { years: "2025", team: "Racing Bulls", note: "Used the Red Bull sister-team pathway to earn a bigger opportunity." },
      { years: "Red Bull junior years", team: "Red Bull Junior Team", note: "Developed inside one of F1's most demanding driver programmes." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Red Bull Racing", highlight: "Steps into one of the most pressured seats in F1." },
      { year: "2025", series: "Formula 1", team: "Racing Bulls", highlight: "Built enough momentum to earn a Red Bull promotion." },
      { year: "2024", series: "Formula 2", highlight: "Competed at the front of F2 and strengthened his F1 case." },
      { year: "2023", series: "Formula 2", highlight: "Moved into F2 as part of the Red Bull junior pipeline." },
      { year: "2022", series: "Formula 3", highlight: "Scored wins and became one of the more visible Red Bull juniors." },
      { year: "Karting", series: "Karting", highlight: "Started in karting before moving through French and European single-seaters." }
    ],
    records: [
      { label: "Age", value: "21" },
      { label: "Car Number", value: "6" },
      { label: "Red Bull Junior", value: "Yes" },
      { label: "F1 Promotion", value: "2026" },
      { label: "Known For", value: "Intensity" }
    ]
  },
  {
    id: "pierre-gasly",
    name: "Pierre Gasly",
    code: "GAS",
    nationality: "France",
    birthPlace: "Rouen, France",
    dateOfBirth: "1996-02-07",
    age: 30,
    teamId: "alpine",
    number: 10,
    profileTag: "The emotional Monza winner",
    heroStatline: "2020 Italian GP winner • GP2 Champion • Alpine leader",
    bio: "Pierre Gasly is a French Grand Prix winner known for resilience, emotional highs, and rebuilding himself after a difficult Red Bull chapter.",
    background:
      "Gasly came from karting into the Red Bull junior structure and won the GP2 title before reaching F1. His career has had sharp highs and lows, including a tough spell at Red Bull followed by a major comeback at AlphaTauri.",
    family:
      "Gasly grew up in a sporting family environment and was close friends with Anthoine Hubert, whose death in 2019 became a deeply emotional part of Gasly's story.",
    whyTheyMatter:
      "Gasly is one of F1's best comeback stories. His 2020 Italian Grand Prix win with AlphaTauri remains one of the sport's most emotional modern victories.",
    drivingStyle:
      "Confident, tidy, and strong when the car gives him front-end feel. He is especially good at seizing chaotic race opportunities.",
    beginnerHook:
      "Watch Gasly when a race gets messy. He is one of those drivers who can suddenly appear in the fight for big points.",
    teamMoves: [
      { years: "2026", team: "Alpine", note: "Continues as Alpine's experienced French leader." },
      { years: "2023–2025", team: "Alpine", note: "Joined Alpine after leaving the Red Bull family." },
      { years: "2019–2022", team: "Toro Rosso / AlphaTauri", note: "Returned after Red Bull demotion and won the 2020 Italian Grand Prix." },
      { years: "2019", team: "Red Bull Racing", note: "Promoted to Red Bull but moved back mid-season." },
      { years: "2017–2018", team: "Toro Rosso", note: "Made his F1 debut through the Red Bull system." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Alpine", highlight: "Races as one of Alpine's senior figures." },
      { year: "2023–2025", series: "Formula 1", team: "Alpine", highlight: "Became Alpine's experienced points scorer." },
      { year: "2020", series: "Formula 1", team: "AlphaTauri", highlight: "Won the Italian Grand Prix at Monza." },
      { year: "2019", series: "Formula 1", team: "Red Bull / Toro Rosso", highlight: "Endured a difficult Red Bull promotion and rebuilt his career." },
      { year: "2016", series: "GP2", highlight: "Won the GP2 Championship." },
      { year: "Karting", series: "Karting", highlight: "Started in French karting before entering the Red Bull pathway." }
    ],
    records: [
      { label: "Age", value: "30" },
      { label: "Car Number", value: "10" },
      { label: "Grand Prix Win", value: "Italy 2020" },
      { label: "GP2 Champion", value: "2016" },
      { label: "Known For", value: "Comeback story" }
    ]
  },
  {
    id: "franco-colapinto",
    name: "Franco Colapinto",
    code: "COL",
    nationality: "Argentina",
    birthPlace: "Pilar, Argentina",
    dateOfBirth: "2003-05-27",
    age: 23,
    teamId: "alpine",
    number: 43,
    profileTag: "Argentina's modern F1 hope",
    heroStatline: "Argentine F1 driver • F2 graduate • Fan favourite",
    bio: "Franco Colapinto is an Argentine driver whose rise brought huge attention from South American fans and added a fresh national storyline to the grid.",
    background:
      "Colapinto started in karting in Argentina before moving to Europe, which is a major step for young South American drivers because funding, travel, and visibility are all difficult barriers.",
    family:
      "His career required strong family and sponsor support to make the jump from Argentina to European junior racing. His story is often tied to national pride and the challenge of reaching F1 from outside the traditional European racing base.",
    whyTheyMatter:
      "Colapinto matters because he gives Argentina a visible modern F1 storyline. For new fans, he shows how geography and funding can make the road to F1 much harder.",
    drivingStyle:
      "Bold, opportunistic, and confident in traffic. He has built a reputation for adapting quickly when given a chance.",
    beginnerHook:
      "Watch the fan reaction around him. Colapinto brings one of the most passionate national fanbases on the grid.",
    teamMoves: [
      { years: "2026", team: "Alpine", note: "Races with Alpine as part of the team's 2026 lineup." },
      { years: "Williams junior years", team: "Williams programme", note: "Built visibility through the Williams academy and junior categories." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Alpine", highlight: "Represents Argentina on the F1 grid." },
      { year: "2024–2025", series: "Formula 2 / F1 opportunities", highlight: "Built his reputation through F2 performances and F1 opportunities." },
      { year: "2023", series: "Formula 3", highlight: "Scored wins and became a serious F2 prospect." },
      { year: "2020–2022", series: "Formula Renault / endurance / F3 ladder", highlight: "Built European experience across several competitive series." },
      { year: "Karting", series: "Karting", highlight: "Started in Argentina before moving into the European racing ladder." }
    ],
    records: [
      { label: "Age", value: "23" },
      { label: "Car Number", value: "43" },
      { label: "Nationality", value: "Argentina" },
      { label: "Known For", value: "Fan momentum" },
      { label: "Career Theme", value: "Europe jump" }
    ]
  },
  {
    id: "liam-lawson",
    name: "Liam Lawson",
    code: "LAW",
    nationality: "New Zealand",
    birthPlace: "Hastings, New Zealand",
    dateOfBirth: "2002-02-11",
    age: 24,
    teamId: "racing-bulls",
    number: 30,
    profileTag: "The Red Bull fighter",
    heroStatline: "Super Formula runner-up • DTM runner-up • Racing Bulls driver",
    bio: "Liam Lawson is a New Zealand driver known for toughness, adaptability, and fighting for his place inside the Red Bull system.",
    background:
      "Lawson started in karting in New Zealand before moving into single-seaters and then international junior racing. Coming from New Zealand meant he had to travel far from home to chase the F1 ladder.",
    family:
      "His family supported his early career before junior programmes and sponsorship became important. His route is not a traditional European one, which makes his rise more difficult and distinctive.",
    whyTheyMatter:
      "Lawson shows how hard the Red Bull system can be. He has had to prove himself through substitute appearances, junior categories, and pressure-heavy opportunities.",
    drivingStyle:
      "Aggressive, race-ready, and physically tough. He is comfortable jumping into unfamiliar situations and making himself hard to ignore.",
    beginnerHook:
      "Watch Lawson's starts and first laps. He often drives like someone who knows every opportunity could matter.",
    teamMoves: [
      { years: "2026", team: "Racing Bulls", note: "Continues in the Red Bull sister-team structure." },
      { years: "Red Bull reserve / Racing Bulls", team: "Red Bull family", note: "Earned chances through substitute drives and academy backing." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Racing Bulls", highlight: "Races as part of Red Bull's junior-team lineup." },
      { year: "2023–2025", series: "Formula 1 opportunities", team: "Red Bull family", highlight: "Used reserve and race opportunities to keep himself in F1 contention." },
      { year: "2023", series: "Super Formula", highlight: "Finished runner-up in Japan's highly competitive Super Formula championship." },
      { year: "2021", series: "DTM", highlight: "Finished runner-up in a dramatic DTM title fight." },
      { year: "2020–2022", series: "Formula 3 / Formula 2", highlight: "Built his Red Bull junior credentials in the F1 support paddock." },
      { year: "Karting", series: "Karting", highlight: "Started racing in New Zealand before moving internationally." }
    ],
    records: [
      { label: "Age", value: "24" },
      { label: "Car Number", value: "30" },
      { label: "Super Formula", value: "Runner-up 2023" },
      { label: "DTM", value: "Runner-up 2021" },
      { label: "Known For", value: "Hard racing" }
    ]
  },
  {
    id: "arvid-lindblad",
    name: "Arvid Lindblad",
    code: "LIN",
    nationality: "United Kingdom",
    birthPlace: "London, England",
    dateOfBirth: "2007-08-08",
    age: 18,
    teamId: "racing-bulls",
    number: 41,
    profileTag: "The rookie from the Red Bull pipeline",
    heroStatline: "2026 rookie • Red Bull junior • Started racing at five",
    bio: "Arvid Lindblad is the sole rookie on the 2026 grid and the latest Red Bull junior to get a shot in Formula 1.",
    background:
      "Lindblad was born in London and started his racing journey extremely young. He came through karting and the Red Bull junior programme, becoming one of the most closely watched teenage prospects in the sport.",
    family:
      "His route required early family commitment before Red Bull backing became central. Publicly, his story is framed around starting the journey at five years old and building toward F1 from childhood.",
    whyTheyMatter:
      "Lindblad matters because he is the pure rookie storyline of 2026. For new fans, he shows what it looks like when an academy driver reaches F1 before turning 20.",
    drivingStyle:
      "Young, fast, and assertive. His biggest story is development: how quickly he can learn, avoid errors, and handle F1 pressure.",
    beginnerHook:
      "Watch Lindblad's rookie mistakes and rookie breakthroughs. Both are part of seeing a new F1 driver grow in real time.",
    teamMoves: [
      { years: "2026", team: "Racing Bulls", note: "Makes his F1 debut as the rookie on the grid." },
      { years: "Red Bull junior years", team: "Red Bull Junior Team", note: "Developed inside Red Bull's high-pressure academy system." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Racing Bulls", highlight: "Debuts in F1 as the grid's rookie." },
      { year: "2025", series: "Formula 2 / junior ladder", highlight: "Prepared for the F1 step through the final junior categories." },
      { year: "2024", series: "Formula 3", highlight: "Took wins and became one of Red Bull's most visible young prospects." },
      { year: "2023", series: "Formula 4", highlight: "Built momentum in single-seaters after karting." },
      { year: "Karting", series: "Karting", highlight: "Started racing at five and developed through elite karting." }
    ],
    records: [
      { label: "Age", value: "18" },
      { label: "Car Number", value: "41" },
      { label: "2026 Status", value: "Rookie" },
      { label: "Red Bull Junior", value: "Yes" },
      { label: "Known For", value: "Young prospect" }
    ]
  },
  {
    id: "esteban-ocon",
    name: "Esteban Ocon",
    code: "OCO",
    nationality: "France",
    birthPlace: "Évreux, France",
    dateOfBirth: "1996-09-17",
    age: 29,
    teamId: "haas",
    number: 31,
    profileTag: "The working-class Grand Prix winner",
    heroStatline: "2021 Hungarian GP winner • GP3 Champion • European F3 Champion",
    bio: "Esteban Ocon is a French Grand Prix winner known for resilience, physical racing, and one of the most grounded background stories on the grid.",
    background:
      "Ocon's early career is famous for being financially difficult compared with many F1 drivers. His family made major sacrifices to support his karting, including living a very mobile racing lifestyle while chasing the junior ladder.",
    family:
      "His parents are central to his story. Ocon often speaks about the sacrifices his family made so he could race, making him one of the strongest examples of a non-glamorous route into F1.",
    whyTheyMatter:
      "Ocon matters because he reminds new fans that not every F1 driver comes from major wealth. He is also proof that a midfield driver can still have a career-defining win if the right race comes together.",
    drivingStyle:
      "Tough, defensive, and difficult to pass. He is known for hard racing, sometimes controversially so, but also for making himself very hard to beat in direct fights.",
    beginnerHook:
      "Watch Ocon when he is defending position. He is one of the drivers who can turn one track position into a long, stubborn battle.",
    teamMoves: [
      { years: "2026", team: "Haas F1 Team", note: "Continues with Haas as an experienced race winner." },
      { years: "2025", team: "Haas F1 Team", note: "Joined Haas after leaving Alpine." },
      { years: "2020–2024", team: "Renault / Alpine", note: "Won the 2021 Hungarian Grand Prix." },
      { years: "2017–2018", team: "Force India / Racing Point", note: "Established himself as a combative midfield driver." },
      { years: "2016", team: "Manor", note: "Made his F1 debut." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Haas F1 Team", highlight: "Races as Haas' experienced Grand Prix winner." },
      { year: "2021", series: "Formula 1", team: "Alpine", highlight: "Won the Hungarian Grand Prix." },
      { year: "2020–2024", series: "Formula 1", team: "Renault / Alpine", highlight: "Rebuilt his career after a year out of a race seat." },
      { year: "2016–2018", series: "Formula 1", team: "Manor / Force India", highlight: "Made his F1 debut and became a serious midfield racer." },
      { year: "2015", series: "GP3", highlight: "Won the GP3 Championship." },
      { year: "2014", series: "FIA Formula 3 European Championship", highlight: "Won the F3 title ahead of highly rated rivals." },
      { year: "Karting", series: "Karting", highlight: "Started racing with major family sacrifice behind the scenes." }
    ],
    records: [
      { label: "Age", value: "29" },
      { label: "Car Number", value: "31" },
      { label: "Grand Prix Win", value: "Hungary 2021" },
      { label: "GP3 Champion", value: "2015" },
      { label: "Known For", value: "Defensive racing" }
    ]
  },
  {
    id: "oliver-bearman",
    name: "Oliver Bearman",
    code: "BEA",
    nationality: "United Kingdom",
    birthPlace: "Chelmsford, England",
    dateOfBirth: "2005-05-08",
    age: 21,
    teamId: "haas",
    number: 87,
    profileTag: "The Ferrari-backed young gun",
    heroStatline: "Ferrari junior • F1 points on debut • F4 champion",
    bio: "Oliver Bearman is a British Ferrari-backed talent who became widely known after scoring points on his sudden F1 debut.",
    background:
      "Bearman came through karting and then became a major junior single-seater prospect. His breakout junior season came in 2021, when he won both the Italian F4 and ADAC F4 championships.",
    family:
      "His family supported his early move through karting and junior racing before Ferrari academy backing became central to his path. His rise became much more visible once he joined the Ferrari Driver Academy.",
    whyTheyMatter:
      "Bearman is important for new fans because he shows how reserve drivers and junior drivers can suddenly become F1 names overnight when a substitute opportunity appears.",
    drivingStyle:
      "Composed for his age, clean, and confident in traffic. His F1 debut showed that he could handle pressure quickly.",
    beginnerHook:
      "Watch Bearman as a young driver trying to prove he belongs full-time. Every strong weekend helps his long-term Ferrari/Haas story.",
    teamMoves: [
      { years: "2026", team: "Haas F1 Team", note: "Continues with Haas while remaining closely associated with Ferrari's talent pipeline." },
      { years: "2025", team: "Haas F1 Team", note: "Moved into a full-time Haas seat." },
      { years: "Ferrari junior years", team: "Ferrari Driver Academy", note: "Developed as one of Ferrari's leading young prospects." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Haas F1 Team", highlight: "Races as one of the youngest full-time drivers on the grid." },
      { year: "2025", series: "Formula 1", team: "Haas F1 Team", highlight: "Began full-time F1 racing." },
      { year: "2024", series: "Formula 1 substitute / Formula 2", highlight: "Scored points on a surprise F1 debut while also racing in F2." },
      { year: "2022–2023", series: "Formula 3 / Formula 2", highlight: "Climbed quickly through the F1 support categories." },
      { year: "2021", series: "Formula 4", highlight: "Won both Italian F4 and ADAC F4 titles." },
      { year: "Karting", series: "Karting", highlight: "Built his foundation in British and European karting." }
    ],
    records: [
      { label: "Age", value: "21" },
      { label: "Car Number", value: "87" },
      { label: "Italian F4 Champion", value: "2021" },
      { label: "ADAC F4 Champion", value: "2021" },
      { label: "Known For", value: "F1 debut points" }
    ]
  },
  {
    id: "carlos-sainz",
    name: "Carlos Sainz",
    code: "SAI",
    nationality: "Spain",
    birthPlace: "Madrid, Spain",
    dateOfBirth: "1994-09-01",
    age: 31,
    teamId: "williams",
    number: 55,
    profileTag: "The smooth operator",
    heroStatline: "Grand Prix winner • Ferrari winner • Williams rebuild leader",
    bio: "Carlos Sainz is a Spanish Grand Prix winner known for intelligence, race craft, and building strong reputations at multiple teams.",
    background:
      "Sainz grew up in a famous motorsport family. His father, Carlos Sainz Sr., is a rally legend, so Carlos Jr. grew up around elite racing but had to establish himself separately in circuit racing.",
    family:
      "His family name opened attention, but it also created pressure. He had to prove he was not simply the son of a legend, eventually doing so through Red Bull juniors, Renault, McLaren, Ferrari, and Williams.",
    whyTheyMatter:
      "Sainz is one of F1's best examples of career-building. He has repeatedly joined teams in transition and left with his reputation stronger.",
    drivingStyle:
      "Intelligent, smooth, and strategic. He is good at reading races and tends to be strong when tire management and decision-making matter.",
    beginnerHook:
      "Watch Sainz in strategic races. He often sounds like he is racing and thinking like a strategist at the same time.",
    teamMoves: [
      { years: "2026", team: "Williams", note: "Continues as a senior figure in Williams' rebuild." },
      { years: "2025", team: "Williams", note: "Joined Williams after leaving Ferrari." },
      { years: "2021–2024", team: "Ferrari", note: "Won races and proved he could handle Ferrari pressure." },
      { years: "2019–2020", team: "McLaren", note: "Helped McLaren's recovery and earned the Ferrari move." },
      { years: "2017–2018", team: "Renault", note: "Moved out of the Red Bull path and reset his career." },
      { years: "2015–2017", team: "Toro Rosso", note: "Made his F1 debut alongside Max Verstappen." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Williams", highlight: "Leads Williams' rebuild with experience and race-winning credibility." },
      { year: "2025", series: "Formula 1", team: "Williams", highlight: "Started a new chapter after Ferrari." },
      { year: "2021–2024", series: "Formula 1", team: "Ferrari", highlight: "Won Grands Prix and became a proven front-running driver." },
      { year: "2019–2020", series: "Formula 1", team: "McLaren", highlight: "Helped revive McLaren's competitiveness." },
      { year: "2015–2018", series: "Formula 1", team: "Toro Rosso / Renault", highlight: "Established himself as a reliable, intelligent racer." },
      { year: "2014", series: "Formula Renault 3.5", highlight: "Won the championship before F1." },
      { year: "Karting", series: "Karting", highlight: "Started in karting while carrying a famous racing surname." }
    ],
    records: [
      { label: "Age", value: "31" },
      { label: "Car Number", value: "55" },
      { label: "Grand Prix Winner", value: "Yes" },
      { label: "Formula Renault 3.5 Champion", value: "2014" },
      { label: "Known For", value: "Race IQ" }
    ]
  },
  {
    id: "alexander-albon",
    name: "Alexander Albon",
    code: "ALB",
    nationality: "Thailand",
    birthPlace: "London, England",
    dateOfBirth: "1996-03-23",
    age: 30,
    teamId: "williams",
    number: 23,
    profileTag: "The rebuild specialist",
    heroStatline: "Red Bull podium finisher • Williams leader • Thai F1 star",
    bio: "Alex Albon is a Thai-British driver known for resilience, calmness, and helping Williams rebuild from the back of the grid.",
    background:
      "Albon came through karting alongside future F1 stars, then climbed through junior categories with several career setbacks. He lost Red Bull backing earlier in his junior career but fought his way back to F1.",
    family:
      "Albon's family story has included difficult public challenges, but he has generally presented himself as calm and grounded. His comeback path is one of the more resilient stories on the grid.",
    whyTheyMatter:
      "Albon matters because he shows that an F1 career does not always move in a straight line. He lost a Red Bull seat, rebuilt himself, and became central to Williams.",
    drivingStyle:
      "Smooth, patient, and excellent at making a difficult car look better than expected. He is strong at defensive tire management and opportunistic points finishes.",
    beginnerHook:
      "Watch Albon when Williams is not expected to score. If points are available, he is often the driver who steals them.",
    teamMoves: [
      { years: "2026", team: "Williams", note: "Continues as a key Williams leader." },
      { years: "2022–2025", team: "Williams", note: "Rebuilt his F1 career and became the team's benchmark." },
      { years: "2019–2020", team: "Toro Rosso / Red Bull", note: "Made his F1 debut and was promoted to Red Bull mid-season." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Williams", highlight: "Races as a senior figure in Williams' comeback project." },
      { year: "2022–2025", series: "Formula 1", team: "Williams", highlight: "Rebuilt his reputation as a strong midfield leader." },
      { year: "2021", series: "DTM / Red Bull reserve", highlight: "Spent a year away from a full-time F1 race seat." },
      { year: "2019–2020", series: "Formula 1", team: "Toro Rosso / Red Bull", highlight: "Reached Red Bull quickly and scored podiums." },
      { year: "2018", series: "Formula 2", highlight: "Finished third in F2 before entering F1." },
      { year: "Karting", series: "Karting", highlight: "Raced against several future F1 stars in elite karting." }
    ],
    records: [
      { label: "Age", value: "30" },
      { label: "Car Number", value: "23" },
      { label: "F1 Podiums", value: "Yes" },
      { label: "Nationality", value: "Thailand" },
      { label: "Known For", value: "Williams rebuild" }
    ]
  },
  {
    id: "nico-hulkenberg",
    name: "Nico Hulkenberg",
    code: "HUL",
    nationality: "Germany",
    birthPlace: "Emmerich am Rhein, Germany",
    dateOfBirth: "1987-08-19",
    age: 38,
    teamId: "audi",
    number: 27,
    profileTag: "The experienced German anchor",
    heroStatline: "Le Mans winner • GP2 Champion • Audi leader",
    bio: "Nico Hulkenberg is a highly experienced German driver known for qualifying pace, technical feedback, and longevity across the midfield.",
    background:
      "Hulkenberg came through karting and junior single-seaters with a very strong record. He won major junior titles and was long regarded as one of the best drivers never to land a consistently front-running F1 seat.",
    family:
      "His path is not associated with a famous racing dynasty. His career is more about junior success, professional backing, and repeatedly earning F1 opportunities through reliability and speed.",
    whyTheyMatter:
      "Hulkenberg matters because he is the veteran benchmark type: teams value him for experience, feedback, and consistency, especially when building a new project like Audi.",
    drivingStyle:
      "Clean, experienced, and strong in qualifying. He is often able to put a car higher than expected over one lap.",
    beginnerHook:
      "Watch Hulkenberg on Saturdays. Qualifying has often been where he reminds people how quick he still is.",
    teamMoves: [
      { years: "2026", team: "Audi", note: "Becomes one of Audi's experienced anchors for their F1 project." },
      { years: "2023–2025", team: "Haas / Sauber transition", note: "Returned to full-time F1 and rebuilt his value." },
      { years: "2017–2019", team: "Renault", note: "Served as a highly rated midfield leader." },
      { years: "2012–2016", team: "Force India / Sauber", note: "Established himself as one of F1's strongest midfield drivers." },
      { years: "2010", team: "Williams", note: "Made his F1 debut and took a shock pole position in Brazil." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Audi", highlight: "Races as Audi's experienced German driver." },
      { year: "2023–2025", series: "Formula 1", team: "Haas / Sauber path", highlight: "Returned to full-time F1 and proved his pace remained strong." },
      { year: "2015", series: "Le Mans", highlight: "Won the 24 Hours of Le Mans with Porsche." },
      { year: "2010–2019", series: "Formula 1", team: "Williams / Force India / Sauber / Renault", highlight: "Built a long career as a respected midfield performer." },
      { year: "2009", series: "GP2", highlight: "Won the GP2 Championship." },
      { year: "2008", series: "Formula 3 Euro Series", highlight: "Won the F3 Euro Series title." },
      { year: "Karting", series: "Karting", highlight: "Started in German karting before moving into single-seaters." }
    ],
    records: [
      { label: "Age", value: "38" },
      { label: "Car Number", value: "27" },
      { label: "GP2 Champion", value: "2009" },
      { label: "Le Mans Winner", value: "2015" },
      { label: "Known For", value: "Veteran pace" }
    ]
  },
  {
    id: "gabriel-bortoleto",
    name: "Gabriel Bortoleto",
    code: "BOR",
    nationality: "Brazil",
    birthPlace: "São Paulo, Brazil",
    dateOfBirth: "2004-10-14",
    age: 21,
    teamId: "audi",
    number: 5,
    profileTag: "Brazil's new-generation champion",
    heroStatline: "F3 Champion • F2 Champion • Audi young talent",
    bio: "Gabriel Bortoleto is a Brazilian driver who reached F1 after a standout junior career and became a major new hope for Brazilian fans.",
    background:
      "Bortoleto came from Brazil through karting and then into European single-seaters. He made himself impossible to ignore by winning FIA F3 and then continuing strongly in F2.",
    family:
      "His journey required the familiar South American leap to Europe, meaning major commitment from family, sponsors, and management. His rise became especially important because Brazil has such a deep F1 history.",
    whyTheyMatter:
      "Bortoleto matters because Brazil has been waiting for a new top F1 storyline. He gives new fans a chance to follow a young driver from a country with legendary F1 heritage.",
    drivingStyle:
      "Composed, efficient, and intelligent. His junior titles came from consistency as much as outright speed.",
    beginnerHook:
      "Watch how Bortoleto handles Audi's growth curve. Young drivers in new projects have to learn while the team is also learning.",
    teamMoves: [
      { years: "2026", team: "Audi", note: "Races as Audi's young Brazilian talent." },
      { years: "McLaren junior / junior years", team: "Junior programmes", note: "Built his reputation through F3 and F2 success." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Audi", highlight: "Races in F1 as Brazil's leading new-generation driver." },
      { year: "2025", series: "Formula 1 / transition", highlight: "Prepared for a long-term F1 opportunity." },
      { year: "2024", series: "Formula 2", highlight: "Won the F2 Championship and confirmed his F1 credentials." },
      { year: "2023", series: "Formula 3", highlight: "Won the FIA F3 Championship as a rookie." },
      { year: "2020–2022", series: "Formula 4 / Formula Regional", highlight: "Built European single-seater experience." },
      { year: "Karting", series: "Karting", highlight: "Started in Brazil before moving into the European ladder." }
    ],
    records: [
      { label: "Age", value: "21" },
      { label: "Car Number", value: "5" },
      { label: "F2 Champion", value: "2024" },
      { label: "F3 Champion", value: "2023" },
      { label: "Known For", value: "Brazilian hope" }
    ]
  },
  {
    id: "fernando-alonso",
    name: "Fernando Alonso",
    code: "ALO",
    nationality: "Spain",
    birthPlace: "Oviedo, Spain",
    dateOfBirth: "1981-07-29",
    age: 44,
    teamId: "aston-martin",
    number: 14,
    profileTag: "The timeless racing genius",
    heroStatline: "2 World Championships • Le Mans winner • F1 legend",
    bio: "Fernando Alonso is a two-time world champion and one of the most complete racing drivers of all time, still competing deep into his forties.",
    background:
      "Alonso grew up in Oviedo, Spain, and started karting very young. His father built a kart originally intended for Fernando's sister, but Fernando took to racing and quickly showed unusual talent.",
    family:
      "His father José Luis played a major role in his karting beginnings, while his family supported a career that eventually made Alonso Spain's first F1 World Champion.",
    whyTheyMatter:
      "Alonso matters because he is racing intelligence personified. He connects multiple eras of F1 and remains competitive against drivers young enough to have grown up watching him.",
    drivingStyle:
      "Relentless, strategic, and extremely race-aware. Alonso is famous for positioning, tire management, defensive skill, and extracting results from imperfect cars.",
    beginnerHook:
      "Watch Alonso's race craft. Even when he is not in the fastest car, he often controls the race around him like a chessboard.",
    teamMoves: [
      { years: "2026", team: "Aston Martin", note: "Continues as Aston Martin's veteran superstar." },
      { years: "2023–2025", team: "Aston Martin", note: "Joined Aston Martin and returned to regular podium contention." },
      { years: "2021–2022", team: "Alpine", note: "Returned to F1 after time away from the series." },
      { years: "2015–2018", team: "McLaren", note: "Endured a difficult McLaren-Honda period." },
      { years: "2010–2014", team: "Ferrari", note: "Fought for titles and produced some of his greatest seasons." },
      { years: "2003–2006", team: "Renault", note: "Won the 2005 and 2006 World Championships." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Aston Martin", highlight: "Races as one of the oldest and most experienced drivers on the grid." },
      { year: "2023–2025", series: "Formula 1", team: "Aston Martin", highlight: "Returned to podium form with Aston Martin." },
      { year: "2018–2020", series: "Endurance / Indy / Dakar period", highlight: "Won Le Mans and explored racing outside F1." },
      { year: "2010–2014", series: "Formula 1", team: "Ferrari", highlight: "Delivered several near-title campaigns." },
      { year: "2005–2006", series: "Formula 1", team: "Renault", highlight: "Won back-to-back World Championships." },
      { year: "2001", series: "Formula 1", team: "Minardi", highlight: "Made his F1 debut." },
      { year: "Karting", series: "Karting", highlight: "Started as a child in Spain and became a karting prodigy." }
    ],
    records: [
      { label: "Age", value: "44" },
      { label: "Car Number", value: "14" },
      { label: "World Championships", value: "2" },
      { label: "Le Mans Winner", value: "Yes" },
      { label: "Known For", value: "Race craft" }
    ]
  },
  {
    id: "lance-stroll",
    name: "Lance Stroll",
    code: "STR",
    nationality: "Canada",
    birthPlace: "Montreal, Canada",
    dateOfBirth: "1998-10-29",
    age: 27,
    teamId: "aston-martin",
    number: 18,
    profileTag: "The Canadian with pressure attached",
    heroStatline: "F3 Champion • F1 podium finisher • Aston Martin driver",
    bio: "Lance Stroll is a Canadian driver known for strong wet-weather moments, early junior success, and constant scrutiny because of his family connection to Aston Martin.",
    background:
      "Stroll had one of the most well-funded paths to F1, but he also won serious junior titles, including the FIA Formula 3 European Championship. His career has always mixed results with debate about privilege.",
    family:
      "His father Lawrence Stroll is a billionaire businessman and a major figure behind Aston Martin's F1 project. This gives Lance a level of security few drivers have, but also means he faces constant criticism and pressure.",
    whyTheyMatter:
      "Stroll is useful for new fans because he opens the conversation about money, access, talent, and fairness in motorsport. F1 is expensive, and his career makes that impossible to ignore.",
    drivingStyle:
      "Often strongest in wet or chaotic conditions. He can produce surprise podium-level results when grip is low and races become unpredictable.",
    beginnerHook:
      "Watch Stroll in rain or mixed conditions. Some of his best F1 moments have come when the race gets messy.",
    teamMoves: [
      { years: "2026", team: "Aston Martin", note: "Continues with Aston Martin." },
      { years: "2021–2025", team: "Aston Martin", note: "Stayed with the team through its Racing Point to Aston Martin transformation." },
      { years: "2019–2020", team: "Racing Point", note: "Scored podiums and grew with the team." },
      { years: "2017–2018", team: "Williams", note: "Made his F1 debut and scored a podium as a teenager." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Aston Martin", highlight: "Races as part of Aston Martin's long-term project." },
      { year: "2021–2025", series: "Formula 1", team: "Aston Martin", highlight: "Remained with the team through its major investment era." },
      { year: "2019–2020", series: "Formula 1", team: "Racing Point", highlight: "Scored podiums and delivered strong wet-weather drives." },
      { year: "2017–2018", series: "Formula 1", team: "Williams", highlight: "Made his F1 debut and became one of the youngest podium finishers." },
      { year: "2016", series: "FIA Formula 3 European Championship", highlight: "Won the championship." },
      { year: "Karting", series: "Karting", highlight: "Started in karting before moving into a heavily supported junior programme." }
    ],
    records: [
      { label: "Age", value: "27" },
      { label: "Car Number", value: "18" },
      { label: "F3 Champion", value: "2016" },
      { label: "F1 Podiums", value: "Yes" },
      { label: "Known For", value: "Wet races" }
    ]
  },
  {
    id: "sergio-perez",
    name: "Sergio Perez",
    code: "PER",
    nationality: "Mexico",
    birthPlace: "Guadalajara, Mexico",
    dateOfBirth: "1990-01-26",
    age: 36,
    teamId: "cadillac",
    number: 11,
    profileTag: "Mexico's tire whisperer",
    heroStatline: "Grand Prix winner • Red Bull race winner • Cadillac veteran",
    bio: "Sergio Perez is a Mexican Grand Prix winner known for tire management, street-circuit confidence, and bringing huge Latin American support to the grid.",
    background:
      "Perez started in karting in Mexico and moved to Europe as a teenager, a major cultural and financial leap. His career included support from Mexican backers, but also years of proving himself in midfield machinery.",
    family:
      "His family supported his early racing, and his Mexican identity has always been central to his fanbase. He became one of the most important Latin American drivers of the modern F1 era.",
    whyTheyMatter:
      "Perez matters because he built a long F1 career through tire management, consistency, and survival across very different teams. His move to Cadillac adds experience to a new project.",
    drivingStyle:
      "Excellent at tire management, especially in long stints. He is also historically strong on street circuits and in races where strategy opens opportunities.",
    beginnerHook:
      "Watch Perez when strategy matters. He can make tires last longer than expected and turn that into track position.",
    teamMoves: [
      { years: "2026", team: "Cadillac", note: "Joins Cadillac as an experienced race-winning veteran." },
      { years: "2021–2025", team: "Red Bull Racing", note: "Won races and supported Red Bull title campaigns." },
      { years: "2014–2020", team: "Force India / Racing Point", note: "Became one of the strongest midfield drivers and won the 2020 Sakhir Grand Prix." },
      { years: "2013", team: "McLaren", note: "Had a difficult single season at McLaren." },
      { years: "2011–2012", team: "Sauber", note: "Made his F1 debut and took early podiums." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Cadillac", highlight: "Helps launch Cadillac's F1 entry with race-winning experience." },
      { year: "2021–2025", series: "Formula 1", team: "Red Bull Racing", highlight: "Won Grands Prix and played a major role in Red Bull's team success." },
      { year: "2020", series: "Formula 1", team: "Racing Point", highlight: "Won the Sakhir Grand Prix, his first F1 victory." },
      { year: "2011–2019", series: "Formula 1", team: "Sauber / McLaren / Force India", highlight: "Built a reputation as a tire-management specialist." },
      { year: "2010", series: "GP2", highlight: "Finished runner-up before entering F1." },
      { year: "Karting", series: "Karting", highlight: "Started in Mexico before moving to Europe to chase F1." }
    ],
    records: [
      { label: "Age", value: "36" },
      { label: "Car Number", value: "11" },
      { label: "Grand Prix Winner", value: "Yes" },
      { label: "First F1 Win", value: "Sakhir 2020" },
      { label: "Known For", value: "Tire management" }
    ]
  },
  {
    id: "valtteri-bottas",
    name: "Valtteri Bottas",
    code: "BOT",
    nationality: "Finland",
    birthPlace: "Nastola, Finland",
    dateOfBirth: "1989-08-28",
    age: 36,
    teamId: "cadillac",
    number: 77,
    profileTag: "The Finnish veteran reset",
    heroStatline: "10-time Grand Prix winner • Mercedes winner • Cadillac veteran",
    bio: "Valtteri Bottas is a Finnish Grand Prix winner known for calmness, qualifying speed, and years spent as a key Mercedes title-era driver.",
    background:
      "Bottas came through Finnish karting and European junior categories before reaching F1 with Williams. He became a Mercedes driver during the team's dominant era and won multiple Grands Prix.",
    family:
      "His background is not tied to a famous racing dynasty. Bottas' rise is usually framed around Finnish motorsport discipline, junior results, and a calm professional personality.",
    whyTheyMatter:
      "Bottas matters because he shows the value of the elite second-driver role. At Mercedes, he had to support a dominant team while trying to beat Lewis Hamilton, one of the hardest teammate tests in history.",
    drivingStyle:
      "Very strong over one lap when comfortable, smooth, and low-drama. He is often at his best in clean races with a stable car balance.",
    beginnerHook:
      "Watch Bottas in qualifying. His best days show why Mercedes trusted him during championship years.",
    teamMoves: [
      { years: "2026", team: "Cadillac", note: "Joins Cadillac as a highly experienced race winner." },
      { years: "2022–2025", team: "Alfa Romeo / Sauber path", note: "Moved into a senior role after leaving Mercedes." },
      { years: "2017–2021", team: "Mercedes", note: "Won races and helped Mercedes win constructors' titles." },
      { years: "2013–2016", team: "Williams", note: "Made his F1 debut and became one of Williams' strongest modern drivers." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Cadillac", highlight: "Brings race-winning experience to a new American F1 project." },
      { year: "2022–2025", series: "Formula 1", team: "Alfa Romeo / Sauber path", highlight: "Took on a senior development role after Mercedes." },
      { year: "2017–2021", series: "Formula 1", team: "Mercedes", highlight: "Won 10 Grands Prix and helped Mercedes dominate the constructors' championship." },
      { year: "2013–2016", series: "Formula 1", team: "Williams", highlight: "Established himself as a fast and reliable F1 driver." },
      { year: "2011", series: "GP3", highlight: "Won the GP3 Championship." },
      { year: "Karting", series: "Karting", highlight: "Started in Finland before moving through European junior racing." }
    ],
    records: [
      { label: "Age", value: "36" },
      { label: "Car Number", value: "77" },
      { label: "Grand Prix Wins", value: "10" },
      { label: "GP3 Champion", value: "2011" },
      { label: "Known For", value: "Qualifying speed" }
    ]
  }
];