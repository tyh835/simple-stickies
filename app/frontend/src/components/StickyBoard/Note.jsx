import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { openEditNoteModal } from '../../actions';
import { STICKY_NOTE } from './type';

const getStyles = (note, isDragging) => {
  const { positionX, positionY } = note;
  const transform = `translate3d(${positionX}px, ${positionY}px, 0)`;

  return {
    position: 'absolute',
    transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ''
  };
};

const Note = ({
  connectDragPreview,
  connectDragSource,
  isDragging,
  note,
  openEditNoteModal
}) => {
  useEffect(() => {
    connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  });

  return connectDragSource(
    <div
      className="box"
      style={getStyles(note, isDragging)}
      onDoubleClick={() => openEditNoteModal(note.id)}
    >
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p style={{ cursor: 'pointer' }}>
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
  note: PropTypes.object.isRequired
};

const noteSource = {
  beginDrag(props) {
    const { note } = props;
    const { id, positionX, positionY } = note;
    return { id, note, positionX, positionY };
  }
};

const DraggableNote = DragSource(
  STICKY_NOTE,
  noteSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
)(Note);

export default connect(
  null,
  { openEditNoteModal }
)(DraggableNote);
