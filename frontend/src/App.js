import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import AddAUser from "./pages/AddAUser";
import ViewUser from "./pages/ViewUser";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddAUser />} />
        <Route path="/view" element={<ViewUser />} />
      </Routes>
    </Router>
  );
}

export default App;
