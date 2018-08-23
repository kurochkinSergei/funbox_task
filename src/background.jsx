import React from 'react';
import PropTypes from 'prop-types';

// svg image used as item background
const Background = ({ isSelected, isHovered, isDisabled }) => (
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

Background.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

export default Background;
