import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Blog from "./Blog";
import Services from "./Services";
import Mentions from "./Mentions";
import Realisations from "./Realisations";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Home />
      <Blog />
      <Services />
      <Mentions />
      <Realisations />
      <Contact />
      <NavLink />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Realisations" element={<Realisations />}></Route>
        <Route path="/Mentions" element={<Mentions />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
