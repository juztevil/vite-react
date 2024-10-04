import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NavBar from "./NavBar";

function App(){
  return (
    <>
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;