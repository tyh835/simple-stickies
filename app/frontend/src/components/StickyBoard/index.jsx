import React from 'react';
import Board from './Board';
import BoardDragLayer from './BoardDragLayer';

const StickyBoard = () => {
  return (
    <div>
      <Board />
      <BoardDragLayer />
    </div>
  );
};

export default StickyBoard;
