import React from 'react';
import PropTypes from 'prop-types';

const MainTitle = ({ title }) => (
    <h1 className="main-title">
        { title }
    </h1>
);

MainTitle.propTypes = {
    title: PropTypes.string,
};

MainTitle.defaultProps = {
    title: '[заголовок]',
};

export default MainTitle;
