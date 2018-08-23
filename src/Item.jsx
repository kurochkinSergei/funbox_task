import React from 'react';
import PropTypes from 'prop-types';
import Weight from './weight';
import Description from './description';
import Background from './background';
import TextContent from './text_content';

const checkForObject = (props, propName) => (
    (typeof !props[propName] === 'object' || Array.isArray(props[propName]))
        ? new Error(`A ${propName} must be an object with appropriate fields`)
        : null
);

const Item = ({
    keyProp, weight, status, description, onSelection, onHover,
}) => {
    const { isDisabled } = status;
    return (
        <div className="item-wrapper">
            <div
                aria-hidden
                role="button"
                className={`item ${isDisabled && 'item_disabled'}`}
                onClick={() => onSelection(keyProp)}
                onKeyDown={() => {}}
                onMouseEnter={() => onHover(keyProp)}
                onMouseLeave={() => onHover(keyProp)}
            >
                <TextContent {...description} {...status} />
                <Weight weight={weight} {...status} />
                <Background {...status} />
            </div>
            <Description
                keyProp={keyProp}
                {...description}
                {...status}
                onSelection={onSelection}
            />
        </div>
    );
};

Item.propTypes = {
    // TODO make weight not required
    weight: PropTypes.number.isRequired,
    keyProp: PropTypes.string.isRequired,
    description: checkForObject,
    status: checkForObject,
    onSelection: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
};

Item.defaultProps = {
    description: {},
    status: {},
};

export default Item;
