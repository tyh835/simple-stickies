import React from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';

const ColorPicker = ({ handleColorChange }) => {
  const handleChange = color => {
    handleColorChange(color.hex);
  };

  const colors = ['#fffeb7', '#88ff89', '#80ffec', '#ffcce0', '#d3ffce'];

  return (
    <>
      <div className="field">
        <label className="label">Color</label>
        <div className="control is-centered">
          <CirclePicker
            width={`${colors.length * 42 + 14}px`}
            colors={colors}
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
    </>
  );
};

export default ColorPicker;
