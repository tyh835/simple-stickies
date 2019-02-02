import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postNote, updateNewNote } from '../actions';

const NoteForm = ({ newNote, postNote, updateNewNote }) => {
  const { title, content } = newNote;
  return (
    <form className="container" onSubmit={e => postNote(e, newNote)}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            type="text"
            name="title"
            value={title}
            className="input"
            onChange={updateNewNote}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Content</label>
        <div className="control">
          <textarea
            type="text"
            name="content"
            value={content}
            className="textarea"
            onChange={updateNewNote}
          />
        </div>
      </div>
      <div className="field is-centered">
        <div className="control">
          <button className="button is-primary" type="submit">
            Add new Sticky!
          </button>
        </div>
      </div>
    </form>
  );
};

NoteForm.propTypes = {
  newNote: PropTypes.object.isRequired,
  postNote: PropTypes.func.isRequired,
  updateNewNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  newNote: state.notes.newNote
});

export default connect(
  mapStateToProps,
  { postNote, updateNewNote }
)(NoteForm);
