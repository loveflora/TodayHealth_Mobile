import "./App.css";
import { Router, Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Router/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
