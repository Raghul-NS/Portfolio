import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';
import TechStack from './Pages/TechStack';
import LetsTalk from "./Pages/Let'sTalk";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/lets-talk" element={<LetsTalk />} />
      </Routes>
    </Router>
  );
}

export default App;
