import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import Note from './Note';
import { STICKY_NOTE } from './type';
import { fetchNotes, openPostNoteModal } from '../../actions';

const noteTarget = {
  drop(props, monitor, component) {
    if (!component) {
      return;
    }
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    console.log(component);
    component.moveNote(item.id, left, top);
  }
};

class Board extends Component {
  moveNote(a, b, c) {
    return `${a},${b},${c}`;
  }

  componentDidMount() {
    setTimeout(this.props.fetchNotes, 0);
  }

  render() {
    const { connectDropTarget, notes, openPostNoteModal } = this.props;
    return connectDropTarget(
      <section className="section">
        <div className="container board">
          {notes.map(note => (
            <Note note={note} key={note.id || note.tempId} />
          ))}
        </div>
        <div className="container is-centered">
          <button
            className="button is-primary"
            onClick={openPostNoteModal}
            type="submit"
          >
            <strong>Add new Sticky!</strong>
          </button>
        </div>
      </section>
    );
  }
}

Board.propTypes = {
  fetchNotes: PropTypes.func,
  notes: PropTypes.array.isRequired,
  openPostNoteModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  notes: state.notes.currentNotes
});

const StickyBoard = DropTarget(STICKY_NOTE, noteTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Board);

export default connect(
  mapStateToProps,
  { fetchNotes, openPostNoteModal }
)(StickyBoard);
