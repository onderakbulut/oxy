import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import HomePage from "@/pages/homepage";
import Detail from "@/pages/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App
