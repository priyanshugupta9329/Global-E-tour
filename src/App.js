import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Book from "./pages/Book";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Subsector from "./pages/Subsector";
import Tour from "./pages/Tour";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subsector" element={<Subsector />} />
        <Route path="/tour" element={<Tour />} />
      
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
