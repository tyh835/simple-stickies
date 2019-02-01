import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotes } from '../actions';

const NotesBoard = ({ fetchNotes, notes }) => {
  return (
    <>
      <section className="section">
        <div className="container">Hello React!</div>
      </section>
    </>
  );
};

NotesBoard.propTypes = {
  fetchNotes: PropTypes.func,
  notes: PropTypes.shape({
    loading: PropTypes.bool,
    currentNotes: PropTypes.array,
    cachedNotes: PropTypes.array
  })
};

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = {
  fetchNotes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesBoard);
