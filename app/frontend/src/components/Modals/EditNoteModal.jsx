import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModal, deleteNote, saveNotes, updateNote } from '../../actions';

const EditNoteModal = ({
  closeModal,
  deleteNote,
  note,
  saveNotes,
  saving,
  updateNote
}) => {
  const { title, content } = note;

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Edit note</p>
        <button className="delete" onClick={closeModal} aria-label="close" />
      </header>
      <section className="modal-card-body">
        <form onSubmit={e => saveNotes(e)}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                name="title"
                value={title}
                className="input"
                onChange={e => updateNote(e, note.id)}
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
                onChange={e => updateNote(e, note.id)}
              />
            </div>
          </div>
          <div className="field is-centered">
            <div className="control">
              <button
                className={`button is-primary ${saving ? 'is-loading' : ''}`}
                type="submit"
              >
                <strong>Save Note</strong>
              </button>
              <button
                className="button is-danger is-outlined has-mx-3"
                onClick={() => deleteNote(note.id)}
              >
                Delete Note
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

EditNoteModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
  saveNotes: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  updateNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  note: state.notes.currentNotes.find(note => note.id === state.modal.noteId),
  saving: state.async.saving
});

export default connect(
  mapStateToProps,
  { closeModal, deleteNote, saveNotes, updateNote }
)(EditNoteModal);
