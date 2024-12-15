import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Menu from './components/Menu/Menu'

//Pages
import Birthday from './pages/1-birthday/Birthday'
import Tours from './pages/2-tours/Tours'
import Reviews from "./pages/3-reviews/Reviews";
import Home from "./pages/Home/Home";
import Accordion from "./pages/4-accordion/Accordion";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1-birthday" element={<Birthday />} />
            <Route path="/2-tours" element={<Tours />} />
            <Route path="/3-reviews" element={<Reviews />} />
            <Route path="/4-accordion" element={<Accordion />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
