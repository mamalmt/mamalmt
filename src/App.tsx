import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbor from "./components/layout/Navbor";
function App() {
  return (
    <div style={{ direction: "rtl" }}>
      <Router>
        <Navbor />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
