import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note }) => {
  const { positionX, positionY } = note;
  const position = {
    top: `${positionY}px`,
    left: `${positionX}px`
  };

  return (
    <div className="box" style={position}>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{note.title}</strong>
              <br />
              {note.content}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
