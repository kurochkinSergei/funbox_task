import React from 'react';
import ReactDOM from 'react-dom';

const helloWorld = React.createElement('h1', null, 'Hellow world!');
ReactDOM.render(helloWorld, document.getElementById('react-container'));
