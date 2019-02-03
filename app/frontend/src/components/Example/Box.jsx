import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { STICKY_NOTE } from './type';

const getStyles = props => {
  const { left, top, isDragging } = props;
  const transform = `translate3d(${left}px, ${top}px, 0)`;

  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
    cursor: 'pointer'
  };
};

const boxSource = {
  beginDrag(props) {
    const { id, children, left, top } = props;
    return { id, children, left, top };
  }
};

class Box extends Component {
  componentDidMount() {
    const { connectDragPreview } = this.props;
    if (connectDragPreview) {
      connectDragPreview(getEmptyImage(), {
        captureDraggingState: true
      });
    }
  }
  render() {
    const { connectDragSource, children } = this.props;

    return connectDragSource(
      <div className="box" style={getStyles(this.props)}>
        {children}
      </div>
    );
  }
}

export default DragSource(STICKY_NOTE, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(Box);
