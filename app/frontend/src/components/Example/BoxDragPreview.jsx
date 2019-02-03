import React from 'react';

const style = {
  display: 'inline-block',
  cursor: 'pointer'
};

const BoxDragPreview = ({ children }) => {
  return (
    <div className="box box__dragging" style={style}>
      {children}
    </div>
  );
};

export default BoxDragPreview;
