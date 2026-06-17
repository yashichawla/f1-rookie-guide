import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Teams } from "./pages/Teams";
import { TeamDetail } from "./pages/TeamDetail";
import { Drivers } from "./pages/Drivers";
import { DriverDetail } from "./pages/DriverDetail";
import { Calendar } from "./pages/Calendar";
import { Results } from "./pages/Results";
import { Standings } from "./pages/Standings";
import { Glossary } from "./pages/Glossary";

function App() {
  const basename = import.meta.env.PROD ? "/f1-rookie-guide" : "/";

  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:teamId" element={<TeamDetail />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/:driverId" element={<DriverDetail />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/results" element={<Results />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/glossary" element={<Glossary />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
