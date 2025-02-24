import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ResumePage from "./components/ResumePage";
import Footer from "./components/Footer";

const MainContent = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <div className="relative z-0">
      <Works />
      <StarsCanvas />
    </div>
    <Contact />
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
