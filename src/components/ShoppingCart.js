import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

const ShoppingCart = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = e.target.item.value;
    if (newItem.trim() !== '') {
      addItemToCart(newItem);
      e.target.reset();
    }
  };

  return (
    <div className="shopping-cart" >
      <h2>Shopping Cart</h2>
      <form onSubmit={handleAddToCart}>
        <input type="text" name="item" placeholder="Add item to cart" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.item}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items in Cart: {cartItems.length}</p>
    </div>
  );
};

export default ShoppingCart;
