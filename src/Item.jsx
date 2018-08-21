import React from 'react';
import PropTypes from 'prop-types';
import TextButton from './text_button';

const Item = ({
    weight, description,
}) => (
    <div className="item-wrapper">
        <div className="item">
            <ItemTextContent {...description} />
            <Weight weight={weight} />
            <ItemBackground />
        </div>
        <div className="item-description">
            Чего&nbsp;сидишь?&nbsp;Порадуй&nbsp;котэ,&nbsp;
            <TextButton text="купи" punctMark="." />
        </div>
    </div>
);

Item.propTypes = {
    categorySelectedHover: PropTypes.string,
    // TODO make weight not required
    weight: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    description: (props, propName) => (
        (typeof !props[propName] === 'object' || Array.isArray(props[propName]))
            ? new Error('A description must be an object with appropriate fields')
            : null
    ),
};

Item.defaultProps = {
    categorySelectedHover: 'Котэ не одобряет?',
    description: {},
};

// round with weight number in it
const Weight = ({ weight }) => (
    <div className="item-weight">
        <div className="item-weight__number">
            { weight.toString().replace(/\./g, ',') }
        </div>
        <div className="item-weight__unit">
            кг
        </div>
    </div>
);

Weight.propTypes = {
    weight: PropTypes.number.isRequired,
};

// block with item titles and text
const ItemTextContent = ({
    category, brand, taste, portionsNum, micesNum, additionalText,
}) => (
    <div className="item-text-content">
        <div className="item-text-content__category">
            { category }
        </div>
        <h2 className="item-text-content__brand">
            { brand }
        </h2>
        <h3 className="item-text-content__taste">
            { taste }
        </h3>
        <p className="item-text-content__text">
            {/* TODO: слова склоняются  */}
            {/* bold when selected <b>{portionsNum}</b> */}
            {portionsNum}
            &nbsp;порций
        </p>
        <p className="item-text-content__text">
            {/* bold when selected <b>{micesNum}</b> */}
            {micesNum}
            &nbsp;мышей в подарок
        </p>
        <p className="item-text-content__text">{additionalText}</p>
    </div>
);

ItemTextContent.propTypes = {
    category: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    portionsNum: PropTypes.number,
    micesNum: PropTypes.number,
    additionalText: PropTypes.string,
};

ItemTextContent.defaultProps = {
    portionsNum: 0,
    micesNum: 0,
    additionalText: '',
};

// svg image used as item background
const ItemBackground = () => (
    <svg className="item__background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 484" width="0" height="0" preserveAspectRatio="none">
        <path fillRule="evenodd" strokeWidth="4" d="M310 482H14c-6.63 0-12-5.37-12-12V45L45 2h265c6.63 0 12 5.37 12 12v456c0 6.63-5.37 12-12 12z" />
    </svg>
);

export default Item;
