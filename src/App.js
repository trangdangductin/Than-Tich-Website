import { Button } from "antd";
import Nav from "./Nav";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css"
import Footer from './Footer.js';
function App() {
  return (
    <div>
      <BrowserRouter>
       <Nav/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/Cards' element={<h1>Cards</h1>}></Route>
        <Route path='/DeckBuilder' element={<h1>Deck Builder</h1>}></Route>
        <Route path='/BanList' element={<h1>Ban list</h1>}></Route>
        <Route path='/Rule' element={<h1>Rule</h1>}></Route>
        <Route path='/Elo' element={<h1>Elo</h1>}></Route>
        
      </Routes>
      </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
