
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/home";
import HowItWorks from "./pages/HowItWorks";
import AIEngine from "./pages/AIEngine";
import UseCases from "./pages/UseCases";
import Compliance from "./pages/Compliance";
import ViewDemo from "./pages/ViewDemo";
import RequestPilot from "./pages/RequestPilot";

function App() {
  return (
    <Routes>
      {/* Pages that share Navbar and Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/ai-engine" element={<AIEngine />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/Requestpilot" element={<RequestPilot />} />
      </Route>

      {/* Standalone page without Navbar and Footer */}
      <Route path="/demo" element={<ViewDemo />} />
    </Routes>
  );
}

export default App;