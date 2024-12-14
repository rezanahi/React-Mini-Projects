import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Menu from './components/Menu/Menu'

//Pages
import Birthday from './pages/1-birthday/Birthday'
import Tours from './pages/2-tours/Tours'
import Reviews from "./pages/3-reviews/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
        <Routes>
            <Route path="/1-birthday" element={<Birthday />} />
            <Route path="/2-Tours" element={<Tours />} />
            <Route path="/3-Reviews" element={<Reviews />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
