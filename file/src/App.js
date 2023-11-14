import { Route, Routes } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import ProteinBar from "./ProteinBar";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="soda" element={<Soda />} />
      <Route path="chips" element={<Chips />} />
      <Route path="proteinBar" element={<ProteinBar />} />
    </Routes>
  );
}

export default App;
