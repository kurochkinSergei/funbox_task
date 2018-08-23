import React from 'react';
import PropTypes from 'prop-types';
import TextButton from './text_button';

const Description = ({
    keyProp, taste, contents, isSelected, isDisabled, onSelection,
}) => (
    <div className="item-description">
        {!isSelected && !isDisabled && (
            <span className="item-description_enabled">
                Чего&nbsp;сидишь?&nbsp;Порадуй&nbsp;котэ,&nbsp;
                <TextButton keyProp={keyProp} clickHandler={onSelection} text="купи" punctMark="." />
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

Description.propTypes = {
    taste: PropTypes.string.isRequired,
    keyProp: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onSelection: PropTypes.func.isRequired,
};

export default Description;
