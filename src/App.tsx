import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Experience />} path="/experience" />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
