import React from 'react';
import PropTypes from 'prop-types';

const TextButton = ({ text, punctMark }) => (
    <span className="text-button-wrapper">
        <span className="text-button">{text}</span>
        {punctMark}
    </span>
);

TextButton.propTypes = {
    text: PropTypes.string.isRequired,
    punctMark: PropTypes.string,
};

TextButton.defaultProps = {
    punctMark: '',
};

export default TextButton;
