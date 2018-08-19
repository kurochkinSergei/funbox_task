import React from 'react';
import ReactDOM from 'react-dom';
import MainTitle from './main_title';

// The data, an array of foods objects
// const data = {};

ReactDOM.render(
    <section className="content-wrapper">
        <MainTitle title="А ты сегодня покормил кота?" />
        {/* foods components mapped form data here */}
    </section>,
    document.getElementById('react-container'),
);
