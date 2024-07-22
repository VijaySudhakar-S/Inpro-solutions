import "./App.css";
import { Index } from "./Index.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GetInTouch } from "./Components/GetInTouch/GetInTouch";

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<GetInTouch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
