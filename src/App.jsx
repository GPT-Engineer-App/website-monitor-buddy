import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Auth from "./pages/Auth.jsx";

function App() {
  // Check if the user is logged in
  const user = localStorage.getItem("userEmail");

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route path="/dashboard" element={user ? <Index /> : <Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
