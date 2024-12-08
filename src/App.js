import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Menu from './components/Menu/Menu'

//Pages
import Birthday from './pages/1-birthday/Birthday'

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
        <Routes>
            <Route path="/1-birthday" element={<Birthday />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
