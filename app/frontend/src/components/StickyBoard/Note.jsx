import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { YELLOW_STICKY } from './types';
import { getNoteStyle } from '../../utils/notes';

const noteSource = {
  beginDrag(props) {
    const { note } = props;
    const { id, positionX, positionY } = note;
    return { id, note, positionX, positionY };
  }
};

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

  const { id, title, content } = note;

  return connectDragSource(
    <div
      className="box"
      style={getNoteStyle(note, isDragging)}
      onDoubleClick={() => openEditNoteModal(id)}
    >
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p className="can-grab">
              <strong>{title}</strong>
              <br />
              {content}
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

export default DragSource(YELLOW_STICKY, noteSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(Note);
