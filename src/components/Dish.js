import React from 'react';

const Dish = ({ dish }) => {
  const { title, category, price, img, desc } = dish;

  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{category}</h4>
      <h4>${price}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Dish;