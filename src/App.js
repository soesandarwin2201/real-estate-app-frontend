import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/logo";
import Home from "./pages/home";
import Navbar from "./layouts/navbar/navbar";
import Form from "./pages/signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Form />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/home" element={<Home />} />
         
      </Routes>
    </Router>
  );
};

export default App;


