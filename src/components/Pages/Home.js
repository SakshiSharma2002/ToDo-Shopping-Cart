import React from 'react';
import TodoList from '../TodoList'; // Replace with the actual path to your TodoList component
import ShoppingCart from '../ShoppingCart'; // Replace with the actual path to your ShoppingCart component

const Home = () => {
  return (
    <div className='home-container'>
      <div className='hero-section'>
      <h1>Welcome to the Application!!</h1>
      <p>
          We provide the best solutions for all your needs.
        </p>
      <button>Learn More</button>
      <TodoList />
      <ShoppingCart />
     </div>
    </div>
  );
};

export default Home;
