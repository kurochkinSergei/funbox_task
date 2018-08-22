import React from 'react';
import PropTypes from 'prop-types';

const TextButton = ({
    keyProp, text, punctMark, clickHandler,
}) => (
    <span onClick={() => clickHandler(keyProp)} aria-hidden role="button" className="text-button-wrapper">
        <span className="text-button">{text}</span>
        {punctMark}
    </span>
);

TextButton.propTypes = {
    keyProp: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    punctMark: PropTypes.string,
    clickHandler: PropTypes.func.isRequired,
};

TextButton.defaultProps = {
    punctMark: '',
};

export default TextButton;
