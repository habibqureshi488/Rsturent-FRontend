import React, { useState, useEffect , useContext } from 'react';
import { ItemContext } from '../Context/ItemContext';
import './Vard.css'; 
import Footer from './Footer';
import Navbar from './Navbar';


function Data() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
 


  const fetchData = () => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(data => {
        // console.log(data.recipes);
        if (data && data.recipes) {
          setData(data.recipes); // Assuming the Data returns a 'recipes' array
        } else {
          setError('No Food found');
        }
      })
      .catch(error => setError(error.message));
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (data.length === 0) return <div style={{textAlign:'center'}}>Loading...</div>;


  const { addItem } = useContext(ItemContext);

  return (
    <>
    <Navbar />
    <div className="rooms-suites-container">
      <header className="header">
        <h1>Recipes</h1>
        <p>Explore our Recipes</p>
      </header>
      <section className="rooms-list">
        {data.map((item, index) => (
          <div className="food-item-card">
          <div className="food-item-image">
            <img src={item.image} alt={name} />
          </div>
          <div className="food-item-details">
            <h2 className="food-item-name">{item.name}</h2>
            <p className="food-item-description">{item.instructions}</p>
            
            <button className="food-item-button" onClick={() => addItem({ name: item.name, image: item.image })}>Add to Cart</button>
          </div>
        </div>
        ))}
      </section>
    </div>
<Footer/>
    </>  );
}

export default Data;
