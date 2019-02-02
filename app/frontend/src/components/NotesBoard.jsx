import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Note from './Note';
import { fetchNotes, openPostNoteModal } from '../actions';

class NotesBoard extends Component {
  componentDidMount() {
    setTimeout(this.props.fetchNotes, 0);
  }

  render() {
    const { notes, openPostNoteModal } = this.props;
    return (
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

NotesBoard.propTypes = {
  fetchNotes: PropTypes.func,
  notes: PropTypes.array.isRequired,
  openPostNoteModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  notes: state.notes.currentNotes
});

export default connect(
  mapStateToProps,
  { fetchNotes, openPostNoteModal }
)(NotesBoard);
