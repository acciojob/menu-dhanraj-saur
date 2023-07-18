import React, { useState } from 'react';
import dishesData from './dishesData';

const CategoryFilter = () => {
  const categories = ['all', 'breakfast', 'lunch', 'shakes'];
  const [filter, setFilter] = useState('all');
  const [dishes, setDishes] = useState(dishesData);

  const filterDishes = (category) => {
    if (category === 'all') {
      setDishes(dishesData);
    } else {
      const filteredDishes = dishesData.filter(
        (dish) => dish.category === category
      );
      setDishes(filteredDishes);
    }
    setFilter(category);
  };

  return (
    <div>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filterDishes(category)}
          className={filter === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;