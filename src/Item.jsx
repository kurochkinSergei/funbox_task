import React from 'react';
import PropTypes from 'prop-types';
import TextButton from './text_button';

const checkForObject = (props, propName) => (
    (typeof !props[propName] === 'object' || Array.isArray(props[propName]))
        ? new Error(`A ${propName} must be an object with appropriate fields`)
        : null
);

const Item = ({
    weight, status, description,
}) => {
    const { isDisabled } = status;
    return (
        <div className="item-wrapper">
            <div className={`item ${isDisabled && 'item_disabled'}`}>
                <ItemTextContent {...description} {...status} />
                <Weight weight={weight} {...status} />
                <ItemBackground {...status} />
            </div>
            <ItemDescription {...description} {...status} />
        </div>
    );
};

Item.propTypes = {
    // TODO make weight not required
    weight: PropTypes.number.isRequired,
    description: checkForObject,
    status: checkForObject,
};

Item.defaultProps = {
    description: {},
    status: {},
};

// round with weight number in it
const Weight = ({
    weight,
    isSelected,
    isHovered,
    isDisabled,
}) => (
    <div className={`item-weight 
        ${isSelected && 'item-weight_selected'}  
        ${isHovered && 'item-weight_hovered'}
        ${isDisabled && 'item-weight_disabled'}`
    }
    >
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
    isSelected: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

// block with item titles and text
const ItemTextContent = ({
    category, brand, taste, portionsNum, micesNum,
    additionalText, altCategory, isSelected, isHovered, isDisabled,
}) => (
    <div className={`item-text-content  ${isDisabled && 'item-text-content_disabled'}`}>
        {(isSelected && isHovered) ? (
            <div className="item-text-content__category item-text-content__category_alt">
                { altCategory }
            </div>)
            : (
                <div className="item-text-content__category">
                    { category }
                </div>
            )
        }
        <h2 className="item-text-content__brand">
            { brand }
        </h2>
        <h3 className="item-text-content__taste">
            { taste }
        </h3>
        <p className="item-text-content__text">
            {/* TODO: слова склоняются  */}
            {isSelected ? (<b>{portionsNum}</b>) : (<span>{portionsNum}</span>)}
            &nbsp;порций
        </p>
        <p className="item-text-content__text">
            {isSelected ? (<b>{micesNum}</b>) : (<span>{micesNum}</span>)}
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
    altCategory: PropTypes.string,
    isSelected: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

ItemTextContent.defaultProps = {
    portionsNum: 0,
    micesNum: 0,
    additionalText: '',
    altCategory: 'Котэ не одобряет?',
};

const ItemDescription = ({
    taste, contents, isSelected, isDisabled,
}) => (
    <div className="item-description">
        {!isSelected && !isDisabled && (
            <span className="item-description_enabled">
                Чего&nbsp;сидишь?&nbsp;Порадуй&nbsp;котэ,&nbsp;
                <TextButton text="купи" punctMark="." />
            </span>
        )}
        {isSelected && !isDisabled
            && <span className="item-description_selected">{contents}</span>
        }
        {isDisabled && (
            <span className="item-description_disabled">
                Печалька,&nbsp;
                {taste}
                &nbsp;закончился.
            </span>
        )}
    </div>
);

ItemDescription.propTypes = {
    taste: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

// svg image used as item background
const ItemBackground = ({ isSelected, isHovered, isDisabled }) => (
    <svg
        className={`item__background 
            ${isSelected && 'item__background_selected'}  
            ${isHovered && 'item__background_hovered'}
            ${isDisabled && 'item__background_disabled'}`
        }
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 324 484"
        width="0"
        height="0"
        preserveAspectRatio="none"
    >
        <path fillRule="evenodd" strokeWidth="4" d="M310 482H14c-6.63 0-12-5.37-12-12V45L45 2h265c6.63 0 12 5.37 12 12v456c0 6.63-5.37 12-12 12z" />
    </svg>
);

ItemBackground.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

export default Item;
