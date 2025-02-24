import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { track } from '@vercel/analytics'
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
  const handleButtonClick = () => {
    track('button_clicked', { buttonName: 'example' })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <button onClick={handleButtonClick}>Track Click</button>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
