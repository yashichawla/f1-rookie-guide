import type { Driver } from "../types/f1";

export const drivers: Driver[] = [
  {
    id: "george-russell",
    name: "George Russell",
    code: "RUS",
    nationality: "United Kingdom",
    birthPlace: "King's Lynn, England",
    teamId: "mercedes",
    number: 63,
    bio: "A precise, analytical Mercedes driver known for qualifying speed, discipline, and turning difficult race weekends into points.",
    background: "Russell grew up in Norfolk, England and began karting as a child. His path is a classic British junior-racing climb: karting, Formula 4, GP3, Formula 2, then Formula 1. He became known early as a clean, technical driver who could explain exactly what the car was doing.",
    family: "His family supported his racing from a young age, with karting weekends becoming a major part of his childhood. Unlike drivers from giant racing dynasties, Russell's public story is more about steady family support, junior-team backing, and earning his way through results.",
    whyTheyMatter: "Russell is the modern Mercedes prototype: methodical, highly prepared, media-polished, and quick over one lap. For new fans, he is a good example of how F1 teams value both speed and technical feedback.",
    drivingStyle: "Measured, smooth, and qualifying-focused. Russell is often strongest when he can build rhythm and manage tires carefully rather than rely on chaos.",
    beginnerHook: "Watch Russell when conditions are mixed or when Mercedes is not the fastest car — he often finds results from imperfect weekends.",
    teamMoves: [
      { years: "2026", team: "Mercedes", note: "Continues as one of Mercedes' lead drivers." },
      { years: "2022–2025", team: "Mercedes", note: "Promoted to the works Mercedes team and became a regular front-running benchmark." },
      { years: "2019–2021", team: "Williams", note: "Debuted with Williams, where he built a reputation for outstanding qualifying laps in a slower car." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Mercedes", highlight: "Races as a central part of Mercedes' current lineup." },
      { year: "2022–2025", series: "Formula 1", team: "Mercedes", highlight: "Moved from promising Williams talent to race-winning Mercedes driver." },
      { year: "2019–2021", series: "Formula 1", team: "Williams", highlight: "Scored standout qualifying performances and earned the Mercedes seat." },
      { year: "2018", series: "Formula 2", highlight: "Won the F2 title, beating a strong field before graduation to F1." },
      { year: "2017", series: "GP3", highlight: "Won the GP3 title as a Mercedes junior." },
      { year: "Karting–2014", series: "Karting / junior single-seaters", highlight: "Built the foundation through British and European karting before entering cars." }
    ],
    records: [
      { label: "F2 Champion", value: "2018" },
      { label: "GP3 Champion", value: "2017" },
      { label: "Car Number", value: "63" }
    ]
  },
  {
    id: "kimi-antonelli",
    name: "Kimi Antonelli",
    code: "ANT",
    nationality: "Italy",
    birthPlace: "Bologna, Italy",
    teamId: "mercedes",
    number: 12,
    bio: "A high-potential Italian talent representing the next generation of Mercedes and one of the most watched young drivers on the grid.",
    background: "Antonelli came through karting with a reputation for exceptional speed and maturity. His climb was unusually fast: he skipped some traditional junior steps and was placed under major Mercedes expectations before most fans had seen him in an F1 car.",
    family: "He comes from a motorsport family environment; his father Marco Antonelli has been involved in racing and team ownership. That background gave Kimi early exposure to racing culture, but his junior results are what made him one of Mercedes' most prized prospects.",
    whyTheyMatter: "Antonelli is the 'future superstar' storyline. For new fans, he shows how F1 teams identify talent early and sometimes take bold risks on very young drivers.",
    drivingStyle: "Aggressive but polished for his age. His appeal is that he looks comfortable adapting quickly to faster machinery.",
    beginnerHook: "Watch how Mercedes manages pressure around him — young drivers are not only judged on speed, but also mistakes, media attention, and consistency.",
    teamMoves: [
      { years: "2026", team: "Mercedes", note: "Races in the Mercedes works team." },
      { years: "Mercedes junior years", team: "Mercedes programme", note: "Developed as one of Mercedes' highest-rated junior drivers." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Mercedes", highlight: "Competes at the top level with major expectations." },
      { year: "2024", series: "Formula 2", highlight: "Jumped into F2 as a Mercedes-backed prospect." },
      { year: "2023", series: "Formula Regional", highlight: "Won major Formula Regional titles and strengthened his reputation." },
      { year: "2022", series: "Formula 4", highlight: "Won in Italian and ADAC F4, becoming one of Europe's hottest prospects." },
      { year: "Karting", series: "Karting", highlight: "Built his name in elite European karting before moving to cars." }
    ],
    records: [
      { label: "Mercedes Junior", value: "Yes" },
      { label: "F4 Breakout", value: "2022" },
      { label: "Car Number", value: "12" }
    ]
  },
  {
    id: "charles-leclerc",
    name: "Charles Leclerc",
    code: "LEC",
    nationality: "Monaco",
    birthPlace: "Monte Carlo, Monaco",
    teamId: "ferrari",
    number: 16,
    bio: "Ferrari's Monegasque star, known for emotional intensity, elite qualifying laps, and carrying huge expectation from the Tifosi.",
    background: "Leclerc grew up in Monaco and raced karts from a young age. His career is marked by both extraordinary speed and personal loss, including the deaths of close friend Jules Bianchi and his father Hervé during his junior years.",
    family: "His father Hervé Leclerc was deeply involved in supporting his racing dream, while his brothers Arthur and Lorenzo are also closely connected to the motorsport world. Charles' story is often framed around family sacrifice, grief, and fulfilling a dream.",
    whyTheyMatter: "Leclerc is Ferrari romance in human form: fast, emotional, adored, and constantly under the pressure of ending Ferrari's title drought.",
    drivingStyle: "Explosive over one lap, brave on street circuits, and capable of producing pole-position laps that look beyond the car's expected pace.",
    beginnerHook: "Watch qualifying when Leclerc is in a Ferrari — he is one of the drivers most likely to create a 'where did that lap come from?' moment.",
    teamMoves: [
      { years: "2026", team: "Ferrari", note: "Continues as a central Ferrari figure." },
      { years: "2019–2025", team: "Ferrari", note: "Promoted to Ferrari after one rookie season and became a race winner." },
      { years: "2018", team: "Sauber", note: "Made his F1 debut and quickly earned the Ferrari promotion." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Ferrari", highlight: "Remains one of Ferrari's lead championship hopes." },
      { year: "2019–2025", series: "Formula 1", team: "Ferrari", highlight: "Won races and became one of F1's elite qualifiers." },
      { year: "2018", series: "Formula 1", team: "Sauber", highlight: "Impressed immediately as a rookie." },
      { year: "2017", series: "Formula 2", highlight: "Won the F2 title in dominant style." },
      { year: "2016", series: "GP3", highlight: "Won the GP3 title." },
      { year: "Karting", series: "Karting", highlight: "Raced through European karting alongside many future F1 peers." }
    ],
    records: [
      { label: "F2 Champion", value: "2017" },
      { label: "GP3 Champion", value: "2016" },
      { label: "Car Number", value: "16" }
    ]
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    code: "HAM",
    nationality: "United Kingdom",
    birthPlace: "Stevenage, England",
    teamId: "ferrari",
    number: 44,
    bio: "A seven-time world champion, cultural icon, and the first and only Black driver to race in Formula 1.",
    background: "Hamilton's story is one of the most important in modern F1. He grew up in Stevenage and came from a comparatively humble background for such an expensive sport. His father Anthony worked multiple jobs to support his karting, and Lewis' talent eventually earned support from McLaren and Mercedes when he was still a child.",
    family: "His father Anthony Hamilton managed and supported his early career, while his mother Carmen and wider family were also part of his upbringing. The Hamilton story is often told through sacrifice: long karting weekends, limited money compared with many rivals, and a family pushing into a sport where very few people looked like him.",
    whyTheyMatter: "Hamilton is not just an F1 champion; he changed the sport's cultural footprint. He tied Michael Schumacher's record of seven world championships, holds many major F1 records, and used his platform for diversity, fashion, music, environmental issues, and social justice.",
    drivingStyle: "Exceptionally adaptable: smooth on tires, brilliant in wet conditions, strong in wheel-to-wheel battles, and historically devastating when given a championship-level car.",
    beginnerHook: "Hamilton is the driver to study if you want to understand greatness across eras: rookie brilliance at McLaren, dominance at Mercedes, and a late-career Ferrari chapter.",
    teamMoves: [
      { years: "2026", team: "Ferrari", note: "Continues the blockbuster Ferrari chapter." },
      { years: "2025", team: "Ferrari", note: "Moved to Ferrari, one of the biggest driver switches in F1 history." },
      { years: "2013–2024", team: "Mercedes", note: "Won six of his seven world titles and became F1's most statistically successful driver." },
      { years: "2007–2012", team: "McLaren", note: "Debuted as a rookie title contender and won the 2008 world championship." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Ferrari", highlight: "Races in red as part of his late-career Ferrari era." },
      { year: "2025", series: "Formula 1", team: "Ferrari", highlight: "Joined Ferrari after more than a decade with Mercedes." },
      { year: "2013–2024", series: "Formula 1", team: "Mercedes", highlight: "Built the defining dynasty of the hybrid era and won six titles with Mercedes." },
      { year: "2007–2012", series: "Formula 1", team: "McLaren", highlight: "Made a sensational debut and became 2008 world champion." },
      { year: "2006", series: "GP2", highlight: "Won the GP2 title with standout racecraft." },
      { year: "Karting", series: "Karting", highlight: "Started karting as a child and was signed by McLaren's young driver programme." }
    ],
    records: [
      { label: "World Championships", value: "7" },
      { label: "Historic First", value: "First Black F1 driver" },
      { label: "Car Number", value: "44" }
    ]
  },
  {
    id: "lando-norris",
    name: "Lando Norris",
    code: "NOR",
    nationality: "United Kingdom",
    birthPlace: "Bristol, England",
    teamId: "mclaren",
    number: 4,
    bio: "A McLaren star with huge fan appeal, sharp race pace, and a modern social-media-era F1 personality.",
    background: "Norris started in karting and quickly became one of Britain's most successful junior talents. He won across multiple junior categories and arrived in F1 with McLaren as part of a new-generation wave of drivers who were comfortable both on track and online.",
    family: "Norris comes from a wealthy family; his father Adam Norris is a successful businessman. That financial stability helped support the early racing path, but Lando's junior results were strong enough to make him one of McLaren's long-term projects.",
    whyTheyMatter: "Norris is key to McLaren's modern rebuild and one of the best examples of how F1 drivers are now both athletes and global internet personalities.",
    drivingStyle: "Fast, instinctive, and especially strong when the car gives him confidence on corner entry. His race craft has matured significantly since his rookie years.",
    beginnerHook: "Norris is a good driver for new fans because his personality is accessible, but his on-track development is genuinely serious.",
    teamMoves: [
      { years: "2026", team: "McLaren", note: "Continues as a core McLaren driver." },
      { years: "2019–2025", team: "McLaren", note: "Made his debut with McLaren and stayed through the team's resurgence." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "McLaren", highlight: "Races as part of one of F1's strongest young pairings." },
      { year: "2019–2025", series: "Formula 1", team: "McLaren", highlight: "Went from rookie fan-favorite to established front-runner." },
      { year: "2018", series: "Formula 2", highlight: "Finished runner-up before graduating to F1." },
      { year: "2017", series: "FIA Formula 3 European Championship", highlight: "Won the championship." },
      { year: "Karting", series: "Karting", highlight: "Won major karting titles and became a highly rated British prospect." }
    ],
    records: [
      { label: "F3 Champion", value: "2017" },
      { label: "F2 Runner-up", value: "2018" },
      { label: "Car Number", value: "4" }
    ]
  },
  {
    id: "oscar-piastri",
    name: "Oscar Piastri",
    code: "PIA",
    nationality: "Australia",
    birthPlace: "Melbourne, Australia",
    teamId: "mclaren",
    number: 81,
    bio: "A calm, clinical McLaren driver with one of the strongest junior résumés of any modern F1 driver.",
    background: "Piastri moved from Australia into the European junior racing ladder and became famous for winning title after title. His rise was so strong that his path to F1 became a major contract saga before he joined McLaren.",
    family: "His family supported the expensive move from Australian motorsport into Europe. Publicly, Piastri's background is less celebrity-driven and more focused on discipline, education, and a very methodical racing climb.",
    whyTheyMatter: "Piastri is the quiet assassin archetype: fewer theatrics, very high execution. For new fans, he shows that F1 personalities can be calm and still ruthless on track.",
    drivingStyle: "Composed, precise, and unusually mature in wheel-to-wheel moments. He often looks calm even in high-pressure situations.",
    beginnerHook: "Watch Piastri's starts and close racing — his calm style makes difficult moves look simpler than they are.",
    teamMoves: [
      { years: "2026", team: "McLaren", note: "Continues as part of McLaren's young front-running lineup." },
      { years: "2023–2025", team: "McLaren", note: "Joined McLaren after a high-profile Alpine contract dispute." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "McLaren", highlight: "Builds on a rapidly rising F1 reputation." },
      { year: "2023–2025", series: "Formula 1", team: "McLaren", highlight: "Established himself as one of the strongest young drivers." },
      { year: "2021", series: "Formula 2", highlight: "Won the F2 title as a rookie." },
      { year: "2020", series: "Formula 3", highlight: "Won the FIA F3 title." },
      { year: "2019", series: "Formula Renault Eurocup", highlight: "Won the championship and accelerated his junior reputation." },
      { year: "Karting", series: "Karting", highlight: "Started in Australia before moving into the European ladder." }
    ],
    records: [
      { label: "F2 Champion", value: "2021" },
      { label: "F3 Champion", value: "2020" },
      { label: "Car Number", value: "81" }
    ]
  },
  {
    id: "max-verstappen",
    name: "Max Verstappen",
    code: "VER",
    nationality: "Netherlands",
    birthPlace: "Hasselt, Belgium",
    teamId: "red-bull",
    number: 1,
    bio: "A multiple world champion and one of the most dominant drivers of the modern era.",
    background: "Verstappen was built for racing almost from birth. He grew up around motorsport, moved through karting with extraordinary intensity, and entered F1 at 17, before he even had a regular road driving licence.",
    family: "His father Jos Verstappen was an F1 driver, and his mother Sophie Kumpen was a highly respected kart racer. Max's upbringing was famously intense, with racing treated less like a hobby and more like a full-time mission from childhood.",
    whyTheyMatter: "Verstappen defined the early-to-mid 2020s with relentless pace and consistency. For new fans, he is the benchmark for what an elite driver looks like when car, team, and driver are aligned.",
    drivingStyle: "Direct, aggressive, decisive. Verstappen is exceptional at controlling races from the front and ruthless in wheel-to-wheel positioning.",
    beginnerHook: "Watch how early he commits to overtakes and how rarely he wastes a chance. His style is about control and intimidation.",
    teamMoves: [
      { years: "2026", team: "Red Bull Racing", note: "Continues as Red Bull's headline driver." },
      { years: "2016–2025", team: "Red Bull Racing", note: "Promoted mid-2016 and won on debut for Red Bull, later becoming world champion." },
      { years: "2015–early 2016", team: "Toro Rosso", note: "Made his F1 debut as the youngest driver in the sport's history." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Red Bull Racing", highlight: "Remains one of the sport's defining drivers." },
      { year: "2021–2025", series: "Formula 1", team: "Red Bull Racing", highlight: "Won multiple world championships and dominated the field." },
      { year: "2016", series: "Formula 1", team: "Red Bull Racing", highlight: "Won his first Red Bull race at the Spanish Grand Prix." },
      { year: "2015", series: "Formula 1", team: "Toro Rosso", highlight: "Debuted as a teenager." },
      { year: "2014", series: "Formula 3", highlight: "Stunned the junior field after a rapid move from karting." },
      { year: "Karting", series: "Karting", highlight: "Dominated international karting under intense family guidance." }
    ],
    records: [
      { label: "World Champion", value: "Multiple" },
      { label: "F1 Debut", value: "Age 17" },
      { label: "Car Number", value: "1" }
    ]
  },
  {
    id: "isack-hadjar",
    name: "Isack Hadjar",
    code: "HAD",
    nationality: "France",
    birthPlace: "Paris, France",
    teamId: "red-bull",
    bio: "A Red Bull-backed driver known for intensity, emotion, and speed in the junior ladder.",
    background: "Hadjar rose through French karting and junior single-seaters before entering the Red Bull system. His junior career built a reputation for raw speed and visible passion on radio and in interviews.",
    family: "Publicly available information on his family is more limited than for some stars; what is clear is that he came through the French racing ladder before receiving Red Bull support, which is often decisive for reaching F1.",
    whyTheyMatter: "Hadjar is a classic Red Bull pressure story: young, fast, and placed in an environment where patience is limited.",
    drivingStyle: "Aggressive and emotionally charged, with strong one-lap potential.",
    beginnerHook: "Red Bull juniors are always under a microscope — Hadjar is the kind of driver whose story can change quickly with a few big weekends.",
    teamMoves: [
      { years: "2026", team: "Red Bull Racing", note: "Listed in this project as part of Red Bull's 2026 lineup." },
      { years: "Junior years", team: "Red Bull Junior Team", note: "Developed through the Red Bull programme." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Red Bull Racing", highlight: "Faces one of the sport's highest-pressure seats in this project dataset." },
      { year: "2023–2024", series: "Formula 2", highlight: "Built experience at the final junior step." },
      { year: "2022", series: "Formula 3", highlight: "Established himself as a Red Bull junior prospect." },
      { year: "Karting", series: "Karting", highlight: "Developed through French and European karting." }
    ],
    records: [
      { label: "Red Bull Junior", value: "Yes" },
      { label: "Nationality", value: "French" },
      { label: "Known For", value: "Intensity" }
    ]
  },
  {
    id: "pierre-gasly",
    name: "Pierre Gasly",
    code: "GAS",
    nationality: "France",
    birthPlace: "Rouen, France",
    teamId: "alpine",
    number: 10,
    bio: "A French race winner whose career is built around resilience, emotion, and one of F1's great redemption arcs.",
    background: "Gasly came from karting into the Red Bull junior ladder and won GP2 before entering F1. His career includes a difficult promotion to Red Bull, a demotion, and then a stunning comeback victory at Monza.",
    family: "Gasly comes from a family with motorsport connections; racing was part of his environment early. He has also spoken publicly about the emotional impact of losing close friend Anthoine Hubert, which shaped his 2020 Monza win story.",
    whyTheyMatter: "Gasly matters because his career shows F1 is not linear. A driver can be dropped, rebuild confidence, and still create iconic moments.",
    drivingStyle: "Sharp over one lap, emotional, and strong when confidence with the car is high.",
    beginnerHook: "His 2020 Italian GP win is essential F1 viewing — one of the best underdog victories of the modern era.",
    teamMoves: [
      { years: "2026", team: "Alpine", note: "Continues as a key French driver for Alpine." },
      { years: "2023–2025", team: "Alpine", note: "Moved to Alpine after years in the Red Bull family." },
      { years: "2017–2022", team: "Toro Rosso / AlphaTauri / Red Bull", note: "Rose, struggled at Red Bull, rebuilt at AlphaTauri, and won at Monza." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Alpine", highlight: "Leads Alpine with experience and French identity." },
      { year: "2023–2025", series: "Formula 1", team: "Alpine", highlight: "Started a new chapter outside the Red Bull system." },
      { year: "2020", series: "Formula 1", team: "AlphaTauri", highlight: "Won the Italian Grand Prix at Monza." },
      { year: "2019", series: "Formula 1", team: "Red Bull / Toro Rosso", highlight: "Promoted to Red Bull, demoted, then rebuilt his reputation." },
      { year: "2016", series: "GP2", highlight: "Won the GP2 title." },
      { year: "Karting", series: "Karting", highlight: "Started racing young in France before joining the Red Bull ladder." }
    ],
    records: [
      { label: "GP2 Champion", value: "2016" },
      { label: "F1 Win", value: "Monza 2020" },
      { label: "Car Number", value: "10" }
    ]
  },
  {
    id: "franco-colapinto",
    name: "Franco Colapinto",
    code: "COL",
    nationality: "Argentina",
    birthPlace: "Pilar, Argentina",
    teamId: "alpine",
    bio: "An Argentine driver whose rise brings huge South American energy and a passionate new-fan storyline.",
    background: "Colapinto began in karting in Argentina before moving into European junior racing. His path is important because getting from South America to the F1 ladder is expensive and logistically difficult, making international backing and results especially important.",
    family: "His family supported his early motorsport path in Argentina before the move into European competition. His story is often tied to national pride, because Argentina has a deep racing history but has had limited recent F1 representation.",
    whyTheyMatter: "Colapinto matters because national fanbases shape F1 culture. A successful Argentine driver can bring an entire region into a team storyline.",
    drivingStyle: "Confident, opportunistic, and energetic, with a reputation for adapting quickly when given chances.",
    beginnerHook: "Watch the fan reaction around him — F1 is global, and some drivers carry the emotional weight of a country.",
    teamMoves: [
      { years: "2026", team: "Alpine", note: "Listed in this project as part of Alpine's 2026 lineup." },
      { years: "Junior years", team: "Williams Academy / junior ladder", note: "Developed through junior categories with F1 academy attention." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Alpine", highlight: "Carries a major Argentine storyline in this project dataset." },
      { year: "2024", series: "Formula 2", highlight: "Moved into F2 and gained wider F1 attention." },
      { year: "2022–2023", series: "Formula 3", highlight: "Built his reputation in FIA F3." },
      { year: "2019", series: "Spanish Formula 4", highlight: "Won the championship." },
      { year: "Karting", series: "Karting", highlight: "Started in Argentina before moving to Europe." }
    ],
    records: [
      { label: "Spanish F4 Champion", value: "2019" },
      { label: "Nationality", value: "Argentine" },
      { label: "Fan Story", value: "Argentina" }
    ]
  },
  {
    id: "liam-lawson",
    name: "Liam Lawson",
    code: "LAW",
    nationality: "New Zealand",
    birthPlace: "Hastings, New Zealand",
    teamId: "racing-bulls",
    bio: "A New Zealand driver from the Red Bull system, known for being ready when suddenly thrown into F1 opportunities.",
    background: "Lawson came through karting and junior racing far from Europe's main motorsport base, then moved into international categories including F3, F2, DTM, and Super Formula. His substitute F1 appearances made fans view him as a serious prospect.",
    family: "Lawson's family supported his early racing from New Zealand, a country with rich motorsport history but a much harder geographic path to Europe. That makes his rise a persistence story as much as a talent story.",
    whyTheyMatter: "Lawson shows how reserve drivers can become famous before a full-time seat. In F1, being ready for one unexpected weekend can change everything.",
    drivingStyle: "Adaptable, race-ready, and comfortable jumping between different cars and series.",
    beginnerHook: "Follow Lawson when there is pressure or uncertainty — his career has been shaped by taking chances quickly.",
    teamMoves: [
      { years: "2026", team: "Racing Bulls", note: "Continues in the Red Bull family in this project dataset." },
      { years: "2023–2025", team: "AlphaTauri / Racing Bulls / Red Bull system", note: "Built his F1 case through substitute and race opportunities." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Racing Bulls", highlight: "Races as part of Red Bull's wider driver system." },
      { year: "2023–2025", series: "Formula 1", team: "AlphaTauri / Racing Bulls", highlight: "Impressed when called up into F1 machinery." },
      { year: "2023", series: "Super Formula", highlight: "Competed strongly in Japan while waiting for an F1 chance." },
      { year: "2021–2022", series: "Formula 2", highlight: "Raced in F2 as a Red Bull junior." },
      { year: "Karting", series: "Karting", highlight: "Started in New Zealand before moving into international racing." }
    ],
    records: [
      { label: "Red Bull Junior", value: "Yes" },
      { label: "Nationality", value: "New Zealand" },
      { label: "Known For", value: "Substitute impact" }
    ]
  },
  {
    id: "arvid-lindblad",
    name: "Arvid Lindblad",
    code: "LIN",
    nationality: "United Kingdom",
    birthPlace: "London, England",
    teamId: "racing-bulls",
    bio: "A highly rated Red Bull junior with a fast-rising junior career and major future-star attention.",
    background: "Lindblad built his reputation in karting before stepping into Formula 4 and Formula 3. He represents the extremely young, highly managed modern junior route where F1 teams monitor drivers from their mid-teens.",
    family: "His background is multicultural, and his family supported an early move into serious international karting. Public details are less extensive than for older F1 stars, but his junior career has been closely tied to Red Bull backing.",
    whyTheyMatter: "Lindblad is the next-generation academy story: if he succeeds, he validates Red Bull's aggressive youth pipeline.",
    drivingStyle: "Fast, attack-minded, and still developing the consistency expected at F1 level.",
    beginnerHook: "With very young drivers, watch progress rather than perfection — every race is part of their learning curve.",
    teamMoves: [
      { years: "2026", team: "Racing Bulls", note: "Listed in this project as part of Racing Bulls' 2026 lineup." },
      { years: "Junior years", team: "Red Bull Junior Team", note: "Developed under the Red Bull academy structure." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Racing Bulls", highlight: "Represents Red Bull's next wave in this project dataset." },
      { year: "2024", series: "Formula 3", highlight: "Moved into FIA F3 as a Red Bull junior." },
      { year: "2022–2023", series: "Formula 4", highlight: "Moved from karting into cars." },
      { year: "Karting", series: "Karting", highlight: "Built his name as a leading karting prospect." }
    ],
    records: [
      { label: "Red Bull Junior", value: "Yes" },
      { label: "Nationality", value: "British" },
      { label: "Profile", value: "Young prospect" }
    ]
  },
  {
    id: "esteban-ocon",
    name: "Esteban Ocon",
    code: "OCO",
    nationality: "France",
    birthPlace: "Évreux, France",
    teamId: "haas",
    number: 31,
    bio: "A French race winner known for defensive toughness, resilience, and one of the grid's most working-class origin stories.",
    background: "Ocon's family famously sold their house and lived in a caravan to support his karting career. He came through the Mercedes junior programme, beat major talents in junior categories, and fought his way into F1 without the comfort of a wealthy racing dynasty.",
    family: "His parents Laurent and Sabrina made enormous sacrifices for his racing. This is one of the strongest family-sacrifice stories on the grid and makes Ocon a useful contrast to drivers from richer backgrounds.",
    whyTheyMatter: "Ocon shows how difficult and expensive the path to F1 is. His story is about persistence, not glamour.",
    drivingStyle: "Very hard to pass, physically assertive, and comfortable in midfield fights where every point matters.",
    beginnerHook: "Watch Ocon in close battles — he rarely gives up space easily, which makes him polarizing but effective.",
    teamMoves: [
      { years: "2026", team: "Haas", note: "Continues a new chapter with Haas." },
      { years: "2025", team: "Haas", note: "Joined Haas after leaving Alpine." },
      { years: "2020–2024", team: "Renault / Alpine", note: "Won the 2021 Hungarian Grand Prix." },
      { years: "2017–2018", team: "Force India", note: "Built his reputation as a tough midfield racer." },
      { years: "2016", team: "Manor", note: "Made his F1 debut." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Haas", highlight: "Brings experience and toughness to Haas." },
      { year: "2021", series: "Formula 1", team: "Alpine", highlight: "Won the Hungarian Grand Prix." },
      { year: "2020–2024", series: "Formula 1", team: "Renault / Alpine", highlight: "Became an established race winner." },
      { year: "2016–2018", series: "Formula 1", team: "Manor / Force India", highlight: "Entered F1 and proved himself in midfield machinery." },
      { year: "2015", series: "GP3", highlight: "Won the GP3 title." },
      { year: "2014", series: "Formula 3", highlight: "Won the FIA F3 European title." },
      { year: "Karting", series: "Karting", highlight: "Family sacrifices powered his early career." }
    ],
    records: [
      { label: "F1 Win", value: "Hungary 2021" },
      { label: "GP3 Champion", value: "2015" },
      { label: "Car Number", value: "31" }
    ]
  },
  {
    id: "oliver-bearman",
    name: "Oliver Bearman",
    code: "BEA",
    nationality: "United Kingdom",
    birthPlace: "Chelmsford, England",
    teamId: "haas",
    number: 87,
    bio: "A British Ferrari-backed young driver who became famous quickly after impressive substitute F1 appearances.",
    background: "Bearman moved through karting, Formula 4, F3, and F2 with Ferrari Academy support. His sudden Ferrari substitute appearance made him a mainstream F1 talking point before a full-time F1 career was fully established.",
    family: "Bearman's family supported his racing from a young age, and his brother Thomas also raced. He is part of the modern academy-driver system where a top team can shape a teenager's path toward F1.",
    whyTheyMatter: "Bearman is the 'called up and delivered' storyline. One great weekend can make a young driver feel instantly important to fans.",
    drivingStyle: "Composed for his age, confident in traffic, and comfortable with high-pressure machinery.",
    beginnerHook: "Watch how young drivers handle substitute drives — they often reveal who can adapt quickly under pressure.",
    teamMoves: [
      { years: "2026", team: "Haas", note: "Continues as a full-time Haas driver." },
      { years: "2025", team: "Haas", note: "Joined Haas full-time with Ferrari links." },
      { years: "2024", team: "Ferrari / Haas reserve opportunities", note: "Impressed during substitute appearances." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Haas", highlight: "Builds his full-time F1 reputation." },
      { year: "2025", series: "Formula 1", team: "Haas", highlight: "Graduated to a full-time F1 seat." },
      { year: "2024", series: "Formula 1", team: "Ferrari / Haas", highlight: "Earned attention through substitute appearances." },
      { year: "2023–2024", series: "Formula 2", highlight: "Competed in F2 as a Ferrari junior." },
      { year: "2022", series: "Formula 3", highlight: "Graduated to FIA F3." },
      { year: "2021", series: "Formula 4", highlight: "Won major F4 titles." }
    ],
    records: [
      { label: "Ferrari Academy", value: "Yes" },
      { label: "F4 Titles", value: "2021" },
      { label: "Car Number", value: "87" }
    ]
  },
  {
    id: "carlos-sainz",
    name: "Carlos Sainz",
    code: "SAI",
    nationality: "Spain",
    birthPlace: "Madrid, Spain",
    teamId: "williams",
    number: 55,
    bio: "A Spanish race winner known for intelligence, adaptability, and being one of F1's most complete team-builders.",
    background: "Sainz grew up in a legendary motorsport family and came through the Red Bull junior programme. He has raced for several teams and built a reputation for improving wherever he goes.",
    family: "His father Carlos Sainz Sr. is a two-time World Rally Champion and Dakar Rally legend. That gave Carlos Jr. a deep motorsport upbringing, but also the pressure of a famous racing name.",
    whyTheyMatter: "Sainz is the professional operator: smart, strategic, and often underestimated. He is valuable because teams trust him to develop a project.",
    drivingStyle: "Smooth, calculated, and excellent at race management. He is especially good at maximizing imperfect strategy windows.",
    beginnerHook: "Sainz is the driver to watch when a team is rebuilding — he often makes teams look more organized.",
    teamMoves: [
      { years: "2026", team: "Williams", note: "Continues as a major signing for Williams' rebuild." },
      { years: "2025", team: "Williams", note: "Joined Williams after leaving Ferrari." },
      { years: "2021–2024", team: "Ferrari", note: "Became a Ferrari race winner." },
      { years: "2019–2020", team: "McLaren", note: "Helped McLaren's revival and rebuilt his own reputation." },
      { years: "2015–2018", team: "Toro Rosso / Renault", note: "Started in the Red Bull system before moving to Renault." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Williams", highlight: "Leads Williams with front-running experience." },
      { year: "2021–2024", series: "Formula 1", team: "Ferrari", highlight: "Won races and became a top-team driver." },
      { year: "2019–2020", series: "Formula 1", team: "McLaren", highlight: "Played a key role in McLaren's recovery." },
      { year: "2015–2018", series: "Formula 1", team: "Toro Rosso / Renault", highlight: "Built his early F1 reputation." },
      { year: "2014", series: "Formula Renault 3.5", highlight: "Won the championship." },
      { year: "Karting", series: "Karting", highlight: "Started young in a motorsport family." }
    ],
    records: [
      { label: "F1 Race Winner", value: "Yes" },
      { label: "Famous Family", value: "Carlos Sainz Sr." },
      { label: "Car Number", value: "55" }
    ]
  },
  {
    id: "alexander-albon",
    name: "Alexander Albon",
    code: "ALB",
    nationality: "Thailand",
    birthPlace: "London, England",
    teamId: "williams",
    number: 23,
    bio: "A Thai-British Williams driver known for tire management, calmness, and extracting points from difficult cars.",
    background: "Albon came through karting alongside elite peers, lost Red Bull backing at one stage, rebuilt, reached F1, was promoted to Red Bull, then had to rebuild again after losing that seat. His career is a repeated comeback story.",
    family: "Albon races under the Thai flag through his mother Kankamol's heritage. His family story has had public challenges, including his mother's legal troubles during his youth, which adds complexity to his background and resilience narrative.",
    whyTheyMatter: "Albon is one of the best examples of reputation recovery. He went from losing a top seat to becoming central to Williams' rebuild.",
    drivingStyle: "Excellent tire management, calm defensive driving, and strong execution in cars that require patience.",
    beginnerHook: "Watch Albon when Williams is not expected to score — he specializes in opportunistic points days.",
    teamMoves: [
      { years: "2026", team: "Williams", note: "Continues as a key Williams leader." },
      { years: "2022–2025", team: "Williams", note: "Returned to F1 and rebuilt his reputation." },
      { years: "2019–2020", team: "Toro Rosso / Red Bull", note: "Debuted, then was promoted to Red Bull mid-season." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Williams", highlight: "Remains central to Williams' rebuild." },
      { year: "2022–2025", series: "Formula 1", team: "Williams", highlight: "Returned to the grid and became Williams' lead performer." },
      { year: "2019–2020", series: "Formula 1", team: "Toro Rosso / Red Bull", highlight: "Rapidly moved from rookie to Red Bull driver." },
      { year: "2018", series: "Formula 2", highlight: "Finished third in F2." },
      { year: "2016", series: "GP3", highlight: "Finished runner-up." },
      { year: "Karting", series: "Karting", highlight: "Competed in a strong karting generation with future F1 names." }
    ],
    records: [
      { label: "F1 Podiums", value: "Yes" },
      { label: "Races For", value: "Thailand" },
      { label: "Car Number", value: "23" }
    ]
  },
  {
    id: "nico-hulkenberg",
    name: "Nico Hülkenberg",
    code: "HUL",
    nationality: "Germany",
    birthPlace: "Emmerich am Rhein, Germany",
    teamId: "audi",
    number: 27,
    bio: "A hugely experienced German driver known for qualifying pace, technical feedback, and one of F1's longest-running podium drought storylines.",
    background: "Hülkenberg had a superb junior career, winning GP2, and entered F1 with Williams. He became known as a driver teams trusted, even if the long-awaited podium never seemed to arrive.",
    family: "His family background is less publicly central than some drivers; his story is more about professional longevity, reputation, and being repeatedly called back because teams trust his feedback and consistency.",
    whyTheyMatter: "Hülkenberg is a reminder that F1 success is not only championships and wins. Longevity, reliability, and technical value can keep a driver relevant for years.",
    drivingStyle: "Clean, experienced, strong in qualifying, and valuable in car development.",
    beginnerHook: "Hülkenberg is the driver to watch when a new or rebuilding team needs a reliable benchmark.",
    teamMoves: [
      { years: "2026", team: "Audi", note: "Part of Audi's works-team identity in this project dataset." },
      { years: "2025", team: "Sauber / Audi project", note: "Joined the project ahead of Audi's full works identity." },
      { years: "2023–2024", team: "Haas", note: "Returned to full-time F1 with strong qualifying performances." },
      { years: "2010–2019", team: "Williams / Force India / Sauber / Renault", note: "Built a long midfield career." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Audi", highlight: "Provides experience for Audi's F1 build." },
      { year: "2023–2025", series: "Formula 1", team: "Haas / Sauber-Audi", highlight: "Returned from reserve status to full-time racing." },
      { year: "2010–2019", series: "Formula 1", team: "Williams / Force India / Renault", highlight: "Built a reputation as a reliable midfield performer." },
      { year: "2010", series: "Formula 1", team: "Williams", highlight: "Took a shock pole position in Brazil as a rookie." },
      { year: "2009", series: "GP2", highlight: "Won the GP2 title." },
      { year: "Karting", series: "Karting", highlight: "Progressed through German and European racing routes." }
    ],
    records: [
      { label: "GP2 Champion", value: "2009" },
      { label: "F1 Pole", value: "Brazil 2010" },
      { label: "Car Number", value: "27" }
    ]
  },
  {
    id: "gabriel-bortoleto",
    name: "Gabriel Bortoleto",
    code: "BOR",
    nationality: "Brazil",
    birthPlace: "São Paulo, Brazil",
    teamId: "audi",
    bio: "A Brazilian talent with a title-winning junior record and the pressure of representing a legendary F1 nation.",
    background: "Bortoleto rose through karting into the European junior ladder and became FIA Formula 3 champion. His profile grew as Brazil searched for its next major F1 figure after a long gap since its championship glory years.",
    family: "His family supported the demanding move from Brazil into European racing. For Brazilian fans, any new F1 driver carries echoes of a huge national legacy shaped by Senna, Piquet, Fittipaldi, Barrichello, and Massa.",
    whyTheyMatter: "Bortoleto matters because Brazil is one of F1's emotional heartlands. A competitive Brazilian driver immediately changes the fan energy around the grid.",
    drivingStyle: "Calculated, technically tidy, and strong across championship campaigns rather than just single highlight races.",
    beginnerHook: "Watch him as a long-term project — young drivers at new teams are judged by development as much as raw results.",
    teamMoves: [
      { years: "2026", team: "Audi", note: "Part of Audi's future-facing lineup in this project dataset." },
      { years: "Junior years", team: "McLaren development / junior ladder", note: "Built his name through junior success and F1 development links." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Audi", highlight: "Represents Brazil in Audi's new era." },
      { year: "2025", series: "Formula 1", team: "Sauber / Audi project", highlight: "Part of the Audi-transition storyline in this project dataset." },
      { year: "2024", series: "Formula 2", highlight: "Continued his climb after an F3 title." },
      { year: "2023", series: "Formula 3", highlight: "Won the FIA F3 title." },
      { year: "Karting", series: "Karting", highlight: "Started in Brazil before moving to Europe." }
    ],
    records: [
      { label: "F3 Champion", value: "2023" },
      { label: "Nationality", value: "Brazilian" },
      { label: "Storyline", value: "Brazil's next hope" }
    ]
  },
  {
    id: "fernando-alonso",
    name: "Fernando Alonso",
    code: "ALO",
    nationality: "Spain",
    birthPlace: "Oviedo, Spain",
    teamId: "aston-martin",
    number: 14,
    bio: "A two-time world champion, endurance-racing winner, and one of the smartest race operators F1 has ever had.",
    background: "Alonso started karting in Spain after his father built a kart originally intended for his sister. He became F1's youngest champion at the time and ended Michael Schumacher's Ferrari title run with Renault.",
    family: "His father José Luis played a key role by building and supporting his first karting steps, while his family helped him pursue racing from Asturias to the world stage. Alonso's story is very much a self-made Spanish motorsport rise.",
    whyTheyMatter: "Alonso is the veteran genius: race craft, politics, team switches, comebacks, and relentless competitiveness across decades.",
    drivingStyle: "Strategic, opportunistic, brilliant defensively, and famous for extracting more from a car than expected.",
    beginnerHook: "Listen to Alonso's radios and watch his positioning — he often thinks several laps ahead.",
    teamMoves: [
      { years: "2026", team: "Aston Martin", note: "Continues as Aston Martin's veteran benchmark." },
      { years: "2023–2025", team: "Aston Martin", note: "Joined Aston Martin and immediately delivered podium-level performances." },
      { years: "2021–2022", team: "Alpine", note: "Returned to F1 after racing outside the series." },
      { years: "2007–2018", team: "McLaren / Renault / Ferrari / McLaren", note: "Moved through several major teams and title fights." },
      { years: "2003–2006", team: "Renault", note: "Won back-to-back world championships." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Aston Martin", highlight: "Still racing at elite level deep into his career." },
      { year: "2023–2025", series: "Formula 1", team: "Aston Martin", highlight: "Became Aston Martin's veteran leader." },
      { year: "2021–2022", series: "Formula 1", team: "Alpine", highlight: "Returned after time away from F1." },
      { year: "2005–2006", series: "Formula 1", team: "Renault", highlight: "Won two world championships." },
      { year: "2001", series: "Formula 1", team: "Minardi", highlight: "Made his F1 debut." },
      { year: "Karting", series: "Karting", highlight: "Started in a homemade kart in Spain." }
    ],
    records: [
      { label: "World Championships", value: "2" },
      { label: "F1 Longevity", value: "Decades" },
      { label: "Car Number", value: "14" }
    ]
  },
  {
    id: "lance-stroll",
    name: "Lance Stroll",
    code: "STR",
    nationality: "Canada",
    birthPlace: "Montreal, Canada",
    teamId: "aston-martin",
    number: 18,
    bio: "A Canadian driver with podiums, strong wet-weather moments, and a career closely tied to the Aston Martin project.",
    background: "Stroll came through karting and junior single-seaters, winning the FIA F3 European Championship before entering F1 with Williams. His career is often discussed through both his results and his family backing.",
    family: "His father Lawrence Stroll is a billionaire investor and key figure behind Racing Point's transformation into Aston Martin. That creates one of F1's most debated narratives: privilege, investment, and performance all in one story.",
    whyTheyMatter: "Stroll is useful for new fans because he shows how money, ownership, opportunity, and talent intersect in F1.",
    drivingStyle: "Can be very strong in wet or chaotic conditions, with notable first-lap and mixed-weather performances.",
    beginnerHook: "Watch Stroll when conditions are messy — some of his best F1 moments came when the race became unpredictable.",
    teamMoves: [
      { years: "2026", team: "Aston Martin", note: "Continues with Aston Martin." },
      { years: "2019–2025", team: "Racing Point / Aston Martin", note: "Moved with the project backed by his father Lawrence Stroll." },
      { years: "2017–2018", team: "Williams", note: "Made his F1 debut and scored a rookie podium." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Aston Martin", highlight: "Continues as part of Aston Martin's long-term identity." },
      { year: "2019–2025", series: "Formula 1", team: "Racing Point / Aston Martin", highlight: "Became tied to the Aston Martin project." },
      { year: "2017", series: "Formula 1", team: "Williams", highlight: "Scored a podium as a rookie in Azerbaijan." },
      { year: "2016", series: "Formula 3", highlight: "Won the FIA Formula 3 European Championship." },
      { year: "Karting", series: "Karting", highlight: "Built early experience before moving into European junior racing." }
    ],
    records: [
      { label: "F3 Champion", value: "2016" },
      { label: "F1 Podiums", value: "Yes" },
      { label: "Car Number", value: "18" }
    ]
  },
  {
    id: "sergio-perez",
    name: "Sergio Pérez",
    code: "PER",
    nationality: "Mexico",
    birthPlace: "Guadalajara, Mexico",
    teamId: "cadillac",
    number: 11,
    bio: "A Mexican race winner known for tire management, street-circuit skill, and one of the largest fanbases in F1.",
    background: "Pérez left Mexico for Europe as a teenager, an enormous step culturally and financially. He built his way through junior categories, became a Sauber standout, then developed into one of F1's best midfield operators before joining Red Bull.",
    family: "His family, including his father Antonio Pérez Garibay, supported his early racing ambitions. Checo's Mexican identity is central to his fanbase, especially at the Mexican Grand Prix, where the atmosphere around him is massive.",
    whyTheyMatter: "Pérez matters because he represents both elite tire craft and the power of national fandom. He also shows how a driver can build a long career before finally getting a top-team chance.",
    drivingStyle: "Smooth on tires, excellent at defensive race management, and historically strong on street circuits.",
    beginnerHook: "Watch Pérez in races with tire degradation — his best skill is making tires last while staying competitive.",
    teamMoves: [
      { years: "2026", team: "Cadillac", note: "Listed as part of Cadillac's experienced launch lineup in this project dataset." },
      { years: "2021–2024", team: "Red Bull Racing", note: "Won races and helped Red Bull title campaigns." },
      { years: "2014–2020", team: "Force India / Racing Point", note: "Became a midfield specialist and race winner." },
      { years: "2013", team: "McLaren", note: "Had a difficult single season at McLaren." },
      { years: "2011–2012", team: "Sauber", note: "Made his F1 debut and impressed with tire management." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Cadillac", highlight: "Brings race-winning experience to a new American project." },
      { year: "2021–2024", series: "Formula 1", team: "Red Bull Racing", highlight: "Won multiple races and supported championship campaigns." },
      { year: "2020", series: "Formula 1", team: "Racing Point", highlight: "Won his first F1 race at Sakhir after years of near-misses." },
      { year: "2011–2019", series: "Formula 1", team: "Sauber / McLaren / Force India", highlight: "Built a long career as a tire-management expert." },
      { year: "2010", series: "GP2", highlight: "Finished runner-up before moving to F1." },
      { year: "Karting", series: "Karting", highlight: "Started in Mexico before moving to Europe as a teenager." }
    ],
    records: [
      { label: "F1 Race Winner", value: "Yes" },
      { label: "Known For", value: "Tire management" },
      { label: "Car Number", value: "11" }
    ]
  },
  {
    id: "valtteri-bottas",
    name: "Valtteri Bottas",
    code: "BOT",
    nationality: "Finland",
    birthPlace: "Nastola, Finland",
    teamId: "cadillac",
    number: 77,
    bio: "A Finnish race winner known for calmness, qualifying speed, and years as a key Mercedes team player.",
    background: "Bottas came through Finnish karting and junior single-seaters before becoming a Williams driver and later joining Mercedes. At Mercedes, he had the difficult job of racing alongside Lewis Hamilton during a dominant era.",
    family: "Bottas' background is relatively low-drama publicly compared with some drivers. His story is often about Finnish composure, disciplined preparation, and a personality that became more expressive later in his career.",
    whyTheyMatter: "Bottas shows the complexity of being an elite teammate. He won races, helped Mercedes win constructors' titles, and had to perform next to one of the greatest drivers ever.",
    drivingStyle: "Clean, fast over one lap, technically useful, and calm under routine pressure.",
    beginnerHook: "Watch Bottas in qualifying and team-building contexts — he is valuable beyond headline wins.",
    teamMoves: [
      { years: "2026", team: "Cadillac", note: "Listed as part of Cadillac's experienced launch lineup in this project dataset." },
      { years: "2022–2024", team: "Alfa Romeo / Sauber", note: "Moved into a team-leader role after Mercedes." },
      { years: "2017–2021", team: "Mercedes", note: "Won races and helped Mercedes constructors' championships." },
      { years: "2013–2016", team: "Williams", note: "Made his F1 debut and earned the Mercedes move." }
    ],
    careerPath: [
      { year: "2026", series: "Formula 1", team: "Cadillac", highlight: "Provides race-winning experience to a new team." },
      { year: "2022–2024", series: "Formula 1", team: "Alfa Romeo / Sauber", highlight: "Led a midfield team after leaving Mercedes." },
      { year: "2017–2021", series: "Formula 1", team: "Mercedes", highlight: "Won races as Hamilton's teammate and helped constructors' success." },
      { year: "2013–2016", series: "Formula 1", team: "Williams", highlight: "Established himself as a future Mercedes driver." },
      { year: "2011", series: "GP3", highlight: "Won the GP3 title." },
      { year: "Karting", series: "Karting", highlight: "Started in Finland before progressing through European racing." }
    ],
    records: [
      { label: "F1 Race Winner", value: "Yes" },
      { label: "GP3 Champion", value: "2011" },
      { label: "Car Number", value: "77" }
    ]
  }
];
