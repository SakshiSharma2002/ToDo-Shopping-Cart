import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { CartProvider } from './context/CartContext';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import "./styles.css";
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <TodoProvider>
        <CartProvider>
          <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
            {/* <TodoList />
            <ShoppingCart /> */}
          </div>
        </CartProvider>
      </TodoProvider>
    </Router>
  );
};

export default App;
