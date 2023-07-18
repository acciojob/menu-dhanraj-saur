import React from 'react';
import DishList from './DishList';
import CategoryFilter from './CategoryFilter';

const App = () => {
    return (
        <div>
            <h1>Delicious Dishes</h1>
            <CategoryFilter />
            <DishList />
        </div>
    );
};

export default App;