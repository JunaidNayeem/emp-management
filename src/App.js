// import logo from './logo.svg';
import "./App.css";
import Dashboard from "./components/layout/dashboard";
import Login from "./components/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/index" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
