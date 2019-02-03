import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { STICKY_NOTE } from './type';

const getStyles = props => {
  const { note, isDragging } = props;
  const { positionX, positionY } = note;
  const transform = `translate3d(${positionX}px, ${positionY}px, 0)`;

  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
    cursor: 'pointer'
  };
};

const noteSource = {
  beginDrag(props) {
    const { id, note } = props;
    const { positionX, positionY } = note;
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
    const { connectDragSource, note } = this.props;

    return connectDragSource(
      <div className="box" style={getStyles(this.props)}>
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
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};

const previewStyle = {
  display: 'inline-block',
  cursor: 'pointer'
};

export const NotePreview = ({ note }) => {
  return (
    <div className="box dragging" style={previewStyle}>
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

export default DragSource(STICKY_NOTE, noteSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(Note);
