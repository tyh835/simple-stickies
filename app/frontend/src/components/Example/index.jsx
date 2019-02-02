import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';
import CustomDragLayer from './CustomDragLayer';

const Example = () => {
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <Container />
      <CustomDragLayer />
    </DragDropContextProvider>
  );
};
export default Example;
