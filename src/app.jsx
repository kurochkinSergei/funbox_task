import React, { Component } from 'react';
import MainTitle from './main_title';
import Item from './Item';

const uuidv1 = require('uuid/v1');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // The data, an array of foods objects
            items: [
                {
                    weight: 0.5,
                    inStock: true,
                    isSelected: false,
                    isHovered: false,
                    description: {
                        category: 'Сказочное заморское яство',
                        brand: 'Нямушка',
                        taste: 'с фуа-гра',
                        portionsNum: 10,
                        micesNum: 1,
                        additionalText: 'заказчик доволен',
                        contents: 'Печень утки разварная с артишоками',
                    },
                },
            ],
        };
    }

    render() {
        const { items } = this.state;
        return (
            <section className="content-wrapper">
                <MainTitle title="А ты сегодня покормил кота?" />
                { items.map(catFood => (
                    <Item key={uuidv1} {...catFood} />))}
            </section>
        );
    }
}

export default App;
