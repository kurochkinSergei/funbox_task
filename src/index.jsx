import React from 'react';
import ReactDOM from 'react-dom';
import MainTitle from './main_title';
import Item from './Item';

// The data, an array of foods objects
const catFoods = [
    {
        category: 'Сказочное заморское яство',
        brand: 'Нямушка',
        taste: 'с фуа-гра',
        portionsNum: 10,
        micesNum: 1,
        weight: 0.5,
        inStock: true,
        description: 'Печень утки разварная с артишоками',
    },
];

ReactDOM.render(
    <section className="content-wrapper">
        <MainTitle title="А ты сегодня покормил кота?" />
        { catFoods.map(catFood => (
            <Item key={Date.now()} {...catFood} />))}
    </section>,
    document.getElementById('react-container'),
);
