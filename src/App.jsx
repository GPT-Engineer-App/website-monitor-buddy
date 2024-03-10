import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Auth from "./pages/Auth.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
