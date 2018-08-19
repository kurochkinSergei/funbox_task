import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Food extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
            isHovered: false,
        };
    }

    // componentWillMount() {
    //     const { inStock } = this.props;
    //     if (starsSelected) {
    //         this.setState({starsSelected})
    //     }
    // }

    render() {
        const { category } = this.props;
        const { brand } = this.props;
        const { taste } = this.props;
        const { weight } = this.props;
        return (
            <div className="food-wrapper">
                <div className="food">
                    <div className="food-category">
                        { category }
                    </div>
                    <div className="food-brand">
                        { brand }
                    </div>
                    <div className="food-taste">
                        { taste }
                    </div>
                    {/* description blocks here */}
                    <div className="food-weight">
                        { `${weight} кг` }
                    </div>
                    <svg className="food-bg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 484" width="0" height="0" preserveAspectRatio="none">
                        <path fillRule="evenodd" strokeWidth="4" d="M310 482H14c-6.63 0-12-5.37-12-12V45L45 2h265c6.63 0 12 5.37 12 12v456c0 6.63-5.37 12-12 12z" />
                    </svg>
                </div>
                <div className="">
                    Чего сидишь? Порадуй котэ, купи.
                </div>
            </div>
        );
    }
}

Food.propTypes = {
    category: PropTypes.string.isRequired,
    categorySelectedHover: PropTypes.string,
    brand: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    portionsNum: PropTypes.number,
    micesNum: PropTypes.number,
    additionalText: PropTypes.string,
    weight: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
};

Food.defaultProps = {
    categorySelectedHover: 'Котэ не одобряет?',
    portionsNum: 0,
    micesNum: 0,
    additionalText: 'Заказчик доволен',
};

export default Food;
