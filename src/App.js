import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/logo";
import Home from "./pages/home";
import Navbar from "./layouts/navbar/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;


