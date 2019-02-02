import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note }) => {
  return (
    <div className="box">
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
  note: PropTypes.object
};

export default Note;
