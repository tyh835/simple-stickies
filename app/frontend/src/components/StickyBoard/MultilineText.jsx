import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MultilineText = ({ content }) => {
  return (
    <Fragment>
      {content.split('\n').map((line, i) => {
        return (
          <Fragment key={i}>
            {line}
            <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

MultilineText.propTypes = {
  content: PropTypes.string.isRequired
};

export default MultilineText;
