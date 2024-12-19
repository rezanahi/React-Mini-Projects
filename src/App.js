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
import FoodMenu from "./pages/5-menu/FoodMenu";
import Tabs from "./pages/6-tabs/Tabs";
import Slider from "./pages/7-slider/Slider";
import Lorem from "./pages/8-lorem/Lorem";
import Color from "./pages/9-color/Color";
import ToDoList from "./pages/10-todolist/ToDoList";
import NavBarProject from "./pages/11-navbar-project/NavBarProject";

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
            <Route path="/5-foodmenu" element={<FoodMenu />} />
            <Route path="/6-tabs" element={<Tabs />} />
            <Route path="/7-slider" element={<Slider />} />
            <Route path="/8-lorem" element={<Lorem />} />
            <Route path="/9-color" element={<Color />} />
            <Route path="/10-todolist" element={<ToDoList />} />
            <Route path="/11-navbar" element={<NavBarProject />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
