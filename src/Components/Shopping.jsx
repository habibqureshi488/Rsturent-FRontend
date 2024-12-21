import React, { useState, useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../Context/ItemContext';
import './Shopping.css'; // Import CSS for styling
import Navbar from './Navbar';

const ProductTable = () => {
  const { selectedItems } = useContext(ItemContext);

  const navigate = useNavigate();
  const handleProceed = () => {
    alert('Proceeding with the order!');
    navigate('/thankyou')

    // Add your handling logic here
  };

  return (
    <>
      <Navbar />
      <br />
      <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontFamily: 'monospace' }}>
        Add to Cart
      </h1>
      <br />
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              {/* <th>Price</th> */}
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
              <ProductRow key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="proceed-container">
        <button onClick={handleProceed} className="proceed-button">
          Proceed
        </button>
      </div>
    </>
  );
};

const ProductRow = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <img src={item.image} alt={item.name} className="product-image" height={100} width={100} />
      </td>
      <td>
        <div className="quantity-control">
          <button onClick={decreaseQuantity} className="quantity-button">-</button>
          <span className="quantity-count">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">+</button>
        </div>
      </td>
      {/* <td>${item.price}</td> */}
      <td>
        <button style={{ padding: '10px', backgroundColor: 'red', color: 'white' }}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductTable;
