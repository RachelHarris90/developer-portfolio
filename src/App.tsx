import { Header } from "./sections/Header";
import { AboutMe } from "./sections/AboutMe";
import { Experience } from "./sections/Experience/Experience";
import { Main } from "./sections/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./sections/Contact";

export const App = () => {
  return (
    <div className="max-w-8xl mx-auto px-8 md:px-24 py-4">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
