import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Create from "./components/Create";
import List from "./components/List";
import Product from "./components/Product";
import { ContextProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="app">
      <ContextProvider>
   
      
        <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
