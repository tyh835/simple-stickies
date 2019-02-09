import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import { STICKY_NOTE } from './type';
import NotePreview from './NotePreview';

const getItemStyles = (initialOffset, currentOffset) => {
  const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0
  };

  if (!initialOffset || !currentOffset) {
    return {
      ...layerStyles,
      display: 'none'
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    ...layerStyles,
    transform
  };
};

const BoardDragLayer = ({
  currentOffset,
  initialOffset,
  isDragging,
  item,
  itemType
}) => {
  if (!isDragging) {
    return null;
  }
  return (
    <section className="section">
      <div
        className="container board"
        style={getItemStyles(initialOffset, currentOffset)}
      >
        {itemType === STICKY_NOTE && <NotePreview note={item.note} />}
      </div>
    </section>
  );
};

BoardDragLayer.propTypes = {
  currentOffset: PropTypes.object,
  initialOffset: PropTypes.object,
  item: PropTypes.object,
  itemType: PropTypes.string,
  isDragging: PropTypes.bool.isRequired
};

export default DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))(BoardDragLayer);
