import React from 'react';
import PropTypes from 'prop-types';

const DynamicText = ({ text, isSelected }) => (
    <p className="item-text-content__text">
        {isSelected ? (
            <span>
                <b>{parseInt(text, 10) ? parseInt(text, 10) : ''}</b>
                {text.replace(/[0-9]/g, '')}
            </span>) : (<span>{text}</span>)}
    </p>
);

DynamicText.propTypes = {
    text: PropTypes.string,
    isSelected: PropTypes.bool,
};

DynamicText.defaultProps = {
    text: '',
    isSelected: false,
};

export default DynamicText;
