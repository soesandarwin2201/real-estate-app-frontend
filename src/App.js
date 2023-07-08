import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/logo";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;


