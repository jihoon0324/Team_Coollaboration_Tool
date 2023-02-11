import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import JoinUs from "./pages/joinUs/JoinUs";
import SignIn from "./pages/signIn/SignIn";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/joinUs" element={<JoinUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
