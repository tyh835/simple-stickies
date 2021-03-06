import React from 'react';
import PropTypes from 'prop-types';
import MultilineText from './MultilineText';
import { getNotePreviewStyle } from '../../utils/notes.js';

const NotePreview = ({ note }) => {
  const { title, content } = note;
  return (
    <div className="box dragging" style={getNotePreviewStyle(note)}>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{title}</strong>
              <br />
              <MultilineText content={content} />
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

NotePreview.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default NotePreview;
