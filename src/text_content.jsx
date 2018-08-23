import React from 'react';
import PropTypes from 'prop-types';
import DynamicText from './dynamic_text';

// block with item titles and text
const TextContent = ({
    category, brand, taste, portions, mices,
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

        {/* TODO as separatee component */}
        <DynamicText text={portions} isSelected={isSelected} />
        <DynamicText text={mices} isSelected={isSelected} />
        <DynamicText text={additionalText} />
    </div>
);

TextContent.propTypes = {
    category: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    portions: PropTypes.string,
    mices: PropTypes.string,
    additionalText: PropTypes.string,
    altCategory: PropTypes.string,
    isSelected: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

TextContent.defaultProps = {
    portions: '',
    mices: '',
    additionalText: '',
    altCategory: 'Котэ не одобряет?',
};

export default TextContent;
