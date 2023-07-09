import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "./components/pages/Home";
import Communication from "./components/pages/Communication";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Blog from "./components/pages/Blog";
function App() {
  return (
    <div className="" style={{ direction: "rtl" }}  >
      <style >{`
        ::-webkit-scrollbar {
          width: 5px;
          background-color: #060023;
        }

        ::-webkit-scrollbar-thumb {
          background-color:  rgb(2,0,36);
          border-radius: 10px;
          background:;
          background: linear-gradient(90deg, #060023 0%, #0f61AD 100%);
        }
        
      `}</style>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
