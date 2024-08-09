import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Menu from './components/Menu/Menu'

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
    </BrowserRouter>
  );
}

export default App;
