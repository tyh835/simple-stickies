import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { openEditNoteModal } from '../../actions';
import { STICKY_NOTE } from './type';

const getStyles = props => {
  const { note, isDragging } = props;
  const { positionX, positionY } = note;
  const transform = `translate3d(${positionX}px, ${positionY}px, 0)`;

  return {
    position: 'absolute',
    transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ''
  };
};

const noteSource = {
  beginDrag(props) {
    const { note } = props;
    const { id, positionX, positionY } = note;
    return { id, note, positionX, positionY };
  }
};

class Note extends Component {
  componentDidMount() {
    const { connectDragPreview } = this.props;
    if (connectDragPreview) {
      connectDragPreview(getEmptyImage(), {
        captureDraggingState: true
      });
    }
  }

  render() {
    const { connectDragSource, note, openEditNoteModal } = this.props;

    return connectDragSource(
      <div
        className="box"
        style={getStyles(this.props)}
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
  }
}

Note.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  note: PropTypes.object.isRequired
};

export const NotePreview = ({ note }) => {
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
