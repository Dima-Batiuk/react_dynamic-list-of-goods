import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (

  <ul>
    {goods.map(({ id, color, name }) => (
      <li
        key={id}
        style={{ color }}
      >
        {name}
      </li>
    ))
    }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};