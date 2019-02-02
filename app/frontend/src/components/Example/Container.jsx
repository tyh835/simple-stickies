import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Box from './Box';
import { STICKY_NOTE } from './type';

const styles = {
  width: 300,
  height: 300,
  border: '1px solid black',
  position: 'relative'
};

const boxTarget = {
  drop(props, monitor, component) {
    if (!component) {
      return;
    }
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(item.id, left, top);
  }
};

class Container extends Component {
  state = {
    boxes: {
      a: { top: 20, left: 80, title: 'Drag me around' },
      b: { top: 180, left: 20, title: 'Drag me too' }
    }
  };

  render() {
    const { connectDropTarget } = this.props;
    const { boxes } = this.state;

    return connectDropTarget(
      <div className="container" style={styles}>
        {Object.keys(boxes).map(key => {
          const { left, top, title } = boxes[key];
          return (
            <Box key={key} id={key} left={left} top={top}>
              {title}
            </Box>
          );
        })}
      </div>
    );
  }

  moveBox(id, left, top) {
    this.setState(state => ({
      boxes: {
        ...state.boxes,
        [id]: {
          ...state.boxes[id],
          left,
          top
        }
      }
    }));
  }
}
export default DropTarget(STICKY_NOTE, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Container);
