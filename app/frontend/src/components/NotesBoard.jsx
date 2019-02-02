import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Note from './Note';
import { fetchNotes } from '../actions';

class NotesBoard extends Component {
  componentDidMount() {
    setTimeout(this.props.fetchNotes, 0);
  }

  render() {
    const { notes } = this.props;
    return (
      <section className="section">
        <div className="container">
          <h2 className="subtitle is-2 has-text-centered">Sticky Notes</h2>
          {notes.map(note => (
            <Note note={note} key={note.id} />
          ))}
        </div>
      </section>
    );
  }
}

NotesBoard.propTypes = {
  fetchNotes: PropTypes.func,
  notes: PropTypes.array
};

const mapStateToProps = state => ({
  notes: state.notes.currentNotes
});

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesBoard);
