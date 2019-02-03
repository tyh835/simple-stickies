import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Board from './Board';
import DragLayer from './DragLayer';

const StickyBoard = () => {
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <Board />
      <DragLayer />
    </DragDropContextProvider>
  );
};

export default StickyBoard;
