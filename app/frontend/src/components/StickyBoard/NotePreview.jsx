import React from 'react';
import PropTypes from 'prop-types';

const NotePreview = ({ note }) => {
  return (
    <div className="box dragging">
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

NotePreview.propTypes = {
  note: PropTypes.object.isRequired
};

export default NotePreview;
