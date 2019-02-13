import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import Note from './Note';
import { STICKY_NOTE } from './types';
import { moveNote, openEditNoteModal } from '../../actions';

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

const Board = ({ connectDropTarget, openEditNoteModal, notes }) => {
  return connectDropTarget(
    <section className="section">
      <div className="container board board--main">
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            openEditNoteModal={openEditNoteModal}
          />
        ))}
      </div>
    </section>
  );
};

Board.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  moveNote: PropTypes.func.isRequired,
  openEditNoteModal: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

const StickyBoard = DropTarget(STICKY_NOTE, noteTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Board);

const mapStateToProps = state => ({
  notes: state.notes.currentNotes
});

export default connect(
  mapStateToProps,
  { moveNote, openEditNoteModal }
)(StickyBoard);
