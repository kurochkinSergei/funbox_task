import React, { Component } from 'react';
import MainTitle from './main_title';
import Item from './Item';

const uuidv1 = require('uuid/v1');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainTitle: 'А ты сегодня покормил кота?',
            // The data, an array of foods objects
            items: [
                {
                    key: uuidv1(),
                    weight: 0.5,
                    status: {
                        isDisabled: false,
                        isSelected: false,
                        isHovered: false,
                        keepHover: false,
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
                    key: uuidv1(),
                    weight: 2,
                    status: {
                        isDisabled: false,
                        isSelected: true,
                        isHovered: false,
                        keepHover: false,
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
                    key: uuidv1(),
                    weight: 5,
                    status: {
                        isDisabled: true,
                        isSelected: false,
                        isHovered: false,
                        keepHover: false,
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

        this.selectItem = this.selectItem.bind(this);
        this.hoverItem = this.hoverItem.bind(this);
    }

    selectItem(key) {
        const { items } = this.state;
        const updatedItems = items.map((item) => {
            if (item.key === key && !item.status.isDisabled) {
                const { status } = item;
                const { isSelected } = status;
                const newStatus = isSelected
                    ? {
                        ...status, isSelected: false, isHovered: true, keepHover: false,
                    }
                    : {
                        ...status, isSelected: true, isHovered: false, keepHover: true,
                    };
                return { ...item, status: newStatus };
            }

            return item;
        });

        this.setState({ items: updatedItems });
    }

    hoverItem(key) {
        const { items } = this.state;
        const updatedItems = items.map((item) => {
            if (item.key === key && !item.status.isDisabled) {
                const { status } = item;
                const { isHovered } = status;
                const { keepHover } = status;
                let newStatus = {};

                if (!keepHover) {
                    newStatus = isHovered
                        ? { ...status, isHovered: false }
                        : { ...status, isHovered: true };
                } else {
                    newStatus = { ...status, keepHover: false };
                }
                return { ...item, status: newStatus };
            }

            return item;
        });
        this.setState({ items: updatedItems });
    }

    render() {
        const { mainTitle } = this.state;
        const { items } = this.state;
        return (
            <section className="content-wrapper">
                <MainTitle title={mainTitle} />
                <div className="items-wrapper">
                    { items.map(catFood => (
                        <Item
                            keyProp={catFood.key}
                            {...catFood}
                            onSelection={this.selectItem}
                            onHover={this.hoverItem}
                        />))}
                </div>
            </section>
        );
    }
}

export default App;
