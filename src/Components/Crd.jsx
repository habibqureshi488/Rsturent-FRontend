import React from 'react';
import './Crd.css';
import image1 from '../assets/Food/1.jpg'
import image2 from '../assets/Food/2.jpg'
import image3 from '../assets/Food/3.jpg'
import image4 from '../assets/Food/4.jpg'
import image5 from '../assets/Food/5.jpg'
import image6 from '../assets/Food/6.jpg'
import image7 from '../assets/Food/7.jpg'
import image8 from '../assets/Food/8.jpg'
import { useNavigate } from 'react-router-dom';

const foodItems = [
  {
    id: 1,
    name: 'Pizza',
    imageUrl: image1,
    description: 'Delicious cheese pizza with toppings.',
  },
  {
    id: 2,
    name: 'Burger',
    imageUrl: image2,
    description: 'Juicy beef burger with lettuce and tomato.',
  },
  {
    id: 3,
    name: 'Sushi',
    imageUrl: image3,
    description: 'Fresh sushi with wasabi and soy sauce.',
  },
  {
    id: 4,
    name: 'Pasta',
    imageUrl: image4,
    description: 'Creamy Alfredo pasta with chicken.',
  },
  {
    id: 5,
    name: 'Salad',
    imageUrl: image5,
    description: 'Healthy green salad with vinaigrette.',
  },
  {
    id: 6,
    name: 'Tacos',
    imageUrl: image6,
    description: 'Spicy beef tacos with salsa.',
  },
  {
    id: 7,
    name: 'Steak',
    imageUrl: image7,
    description: 'Grilled steak with garlic butter.',
  },
  {
    id: 8,
    name: 'Ice Cream',
    imageUrl: image8,
    description: 'Vanilla ice cream with chocolate syrup.',
  },
];

function FoodPage() {
    const navigate = useNavigate();
const handleExploreClick = () => {
    navigate('/food');
  };
  return (
    <div className="food-page">
      <header className="food-header">
        <h1>Food Selection</h1>
        <p>Explore our exclusive dishes</p>
      </header>
      <section className="food-list">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.imageUrl} alt={item.name} className="food-image" />
            <div className="food-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <button className="explore-button" onClick={handleExploreClick}>Explore Now</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FoodPage;
