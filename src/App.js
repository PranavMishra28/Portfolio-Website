import "./App.css";
import { Analytics } from "@vercel/analytics/react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Index from "./components";
import Aviation from "./Pages/Aviation/index"
import Schedule from "./Pages/Schedule/Schedule";
import Resume from "./Pages/ResumePage/Resume";


function App() {
  return (
    <Router className="container mx-auto">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
