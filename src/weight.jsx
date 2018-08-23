import React from 'react';
import PropTypes from 'prop-types';

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

export default Weight;
