import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import Note from './Note';
import { STICKY_NOTE } from './type';
import { moveNote, openPostNoteModal } from '../../actions';

const Board = ({ connectDropTarget, notes, openPostNoteModal }) => {
  return connectDropTarget(
    <section className="section">
      <div className="container board" style={{ overflowY: 'hidden' }}>
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
};

Board.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  fetchNotes: PropTypes.func.isRequired,
  moveNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
  openPostNoteModal: PropTypes.func.isRequired
};

const noteTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    const { id, positionX, positionY } = item.note;
    const delta = monitor.getDifferenceFromInitialOffset();
    const x = Math.round(positionX + delta.x);
    const y = Math.round(positionY + delta.y);
    props.moveNote(id, x, y);
  }
};

const StickyBoard = DropTarget(STICKY_NOTE, noteTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Board);

const mapStateToProps = state => ({
  notes: state.notes.currentNotes
});

export default connect(
  mapStateToProps,
  { moveNote, openPostNoteModal }
)(StickyBoard);
