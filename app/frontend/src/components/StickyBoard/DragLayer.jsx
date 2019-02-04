import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import { STICKY_NOTE } from './type';
import { NotePreview } from './Note';

const getItemStyles = props => {
  const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0
  };

  const { initialOffset, currentOffset } = props;
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

const renderItem = ({ item, itemType }) => {
  switch (itemType) {
    case STICKY_NOTE:
      return <NotePreview note={item.note} />;
    default:
      return null;
  }
};

const CustomDragLayer = props => {
  const { isDragging } = props;

  if (!isDragging) {
    return null;
  }
  return (
    <section className="section">
      <div className="container board" style={getItemStyles(props)}>
        {renderItem(props)}
      </div>
    </section>
  );
};

CustomDragLayer.propTypes = {
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
}))(CustomDragLayer);
