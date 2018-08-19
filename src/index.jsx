import React from 'react';
import ReactDOM from 'react-dom';

// The data, an array of foods objects
// const data = {};

ReactDOM.render(
    <div className="content-wrapper">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        {/* foods components mapped form data here */}
    </div>,
    document.getElementById('react-container'),
);
