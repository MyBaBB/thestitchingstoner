import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CoverPage from "./Pages/CoverPageFolder/Cover.jsx";
import SpecialEvent from "./Pages/SpecialEventPageFolder/SpecialEvent.jsx";
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/coverpage" element={<CoverPage />} />
          <Route path="/specialevent" element={<SpecialEvent />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
