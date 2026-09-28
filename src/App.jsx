import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CoverPage from "./Pages/CoverPageFolder/Cover.jsx";
import SpecialEvent from "./Pages/SpecialEventPageFolder/SpecialEvent.jsx";
import SpecialEvent2 from "./Pages/SpecialEventPageFolder2/SpecialEvent2.jsx";
import SpecialEvent3 from "./Pages/SpecialEventPageFolder3/SpecialEvent3.jsx";
import Gorilla from "./Pages/GorillaPageFolder/GorillaPage.jsx"

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
          <Route path="/specialevent2" element={<SpecialEvent2 />} />
          <Route path="/specialevent3" element={<SpecialEvent3 />} />
          <Route path="/gorilla" element={< Gorilla />} />
         
          <Route path="*" element={<Zenith />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
