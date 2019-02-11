import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import { STICKY_NOTE } from './types';
import NotePreview from './NotePreview';
import { getLayerStyle } from '../../utils/notes';

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
        style={getLayerStyle(initialOffset, currentOffset)}
      >
        {itemType === STICKY_NOTE && <NotePreview note={item.note} />}
      </div>
    </section>
  );
};

BoardDragLayer.propTypes = {
  currentOffset: PropTypes.object,
  initialOffset: PropTypes.object,
  isDragging: PropTypes.bool.isRequired,
  item: PropTypes.object,
  itemType: PropTypes.string
};

export default DragLayer(monitor => ({
  currentOffset: monitor.getSourceClientOffset(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  isDragging: monitor.isDragging(),
  item: monitor.getItem(),
  itemType: monitor.getItemType()
}))(BoardDragLayer);
