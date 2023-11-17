import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/site.css";
import "./assets/css/utilities.css";
import "./components/performace/performace.css";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Footer from "./components/ui/Footer";
import PerformancesPage from "./pages/PerformancesPage";

import PerformanceDetailPage from "./pages/PerformanceDetailPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/performances" element={<PerformancesPage />} />
          <Route path="/performance/:id" element={<PerformanceDetailPage />} />
        </Routes>
      </BrowserRouter>
      <Footer text="K-pop Entertainment &copy; 2023" />
    </>
  );
};

export default App;
