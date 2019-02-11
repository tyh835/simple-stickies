import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { STICKY_NOTE } from './types';
import { getNoteStyle } from '../../utils/notes';

const Note = ({
  connectDragPreview,
  connectDragSource,
  openEditNoteModal,
  isDragging,
  note
}) => {
  useEffect(() => {
    connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }, []);

  return connectDragSource(
    <div
      className="box"
      style={getNoteStyle(note, isDragging)}
      onDoubleClick={() => openEditNoteModal(note.id)}
    >
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p style={{ cursor: 'grab' }}>
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
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  note: PropTypes.object.isRequired,
  openEditNoteModal: PropTypes.func.isRequired
};

const noteSource = {
  beginDrag(props) {
    const { note } = props;
    const { id, positionX, positionY } = note;
    return { id, note, positionX, positionY };
  }
};

export default DragSource(STICKY_NOTE, noteSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(Note);
