import React from 'react';
import Board from './Board';
import DragLayer from './DragLayer';

const StickyBoard = () => {
  return (
    <div>
      <Board />
      <DragLayer />
    </div>
  );
};

export default StickyBoard;
