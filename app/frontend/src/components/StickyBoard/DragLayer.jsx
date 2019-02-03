import React from 'react';
import { DragLayer } from 'react-dnd';
import { STICKY_NOTE } from './type';
import { NotePreview } from './Note';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0
};

const getItemStyles = props => {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
};

const CustomDragLayer = props => {
  const { isDragging } = props;

  const renderItem = ({ item, itemType }) => {
    switch (itemType) {
      case STICKY_NOTE:
        return <NotePreview note={item.note} />;
      default:
        return null;
    }
  };

  if (!isDragging) {
    return null;
  }
  return (
    <section className="section">
      <div className="container board" style={layerStyles}>
        <div style={getItemStyles(props)}>{renderItem(props)}</div>
      </div>
    </section>
  );
};

export default DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))(CustomDragLayer);
