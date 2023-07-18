import React, { useState } from 'react';
import dishesData from './dishesData';
import Dish from './Dish';

const DishList = () => {
  const [dishes, setDishes] = useState(dishesData);
  return (
    <div>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default DishList;