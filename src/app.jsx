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
                    status: {
                        isDisabled: false,
                        isSelected: false,
                        isHovered: true,
                    },
                    description: {
                        category: 'Сказочное заморское яство',
                        brand: 'Нямушка',
                        taste: 'с фуа-гра',
                        portionsNum: 10,
                        micesNum: 1,
                        contents: 'Печень утки разварная с артишоками.',
                    },
                },
                {
                    weight: 0.5,
                    status: {
                        isDisabled: false,
                        isSelected: true,
                        isHovered: true,
                    },
                    description: {
                        category: 'Сказочное заморское яство',
                        brand: 'Нямушка',
                        taste: 'с рыбой',
                        portionsNum: 40,
                        micesNum: 2,
                        contents: 'Головы щучьи с чесноком, да свежайшая сёмгушка.',
                    },
                },
                {
                    weight: 0.5,
                    status: {
                        isDisabled: true,
                        isSelected: false,
                        isHovered: false,
                    },
                    description: {
                        category: 'Сказочное заморское яство',
                        brand: 'Нямушка',
                        taste: 'с фуа-гра',
                        portionsNum: 100,
                        micesNum: 5,
                        additionalText: 'заказчик доволен',
                        contents: 'Филе цыплят с трюфелями в бульоне.',
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
                <div className="items-wrapper">
                    { items.map(catFood => (
                        <Item key={uuidv1()} {...catFood} />))}
                </div>
            </section>
        );
    }
}

export default App;
