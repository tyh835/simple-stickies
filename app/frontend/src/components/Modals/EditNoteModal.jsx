import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './Modal';
import { closeModal, deleteNote, saveNotes, updateNote } from '../../actions';

const EditNoteModal = ({
  currentNotes,
  cachedNotes,
  closeModal,
  deleteNote,
  noteId,
  saveNotes,
  saving,
  updateNote
}) => {
  const { title, content } = currentNotes.find(note => note.id === noteId);

  return (
    <Modal>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit note</p>
          <button className="delete" onClick={closeModal} aria-label="close" />
        </header>
        <section className="modal-card-body">
          <form onSubmit={e => saveNotes(e, currentNotes, cachedNotes)}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  name="title"
                  value={title}
                  className="input"
                  onChange={e => updateNote(e, noteId)}
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
                  onChange={e => updateNote(e, noteId)}
                />
              </div>
            </div>
            <div className="field is-centered">
              <div className="control">
                <button
                  className={`button is-primary ${saving ? 'is-loading' : ''}`}
                  type="submit"
                >
                  Save Note
                </button>
                <button
                  className="button is-danger is-outlined has-mx-3"
                  onClick={() => deleteNote(noteId)}
                >
                  Delete Note
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </Modal>
  );
};

EditNoteModal.propTypes = {
  cachedNotes: PropTypes.array.isRequired,
  currentNotes: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  noteId: PropTypes.number.isRequired,
  saveNotes: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentNotes: state.notes.currentNotes,
  cachedNotes: state.notes.cachedNotes,
  noteId: state.modal.noteId,
  saving: state.async.saving
});

export default connect(
  mapStateToProps,
  { closeModal, deleteNote, saveNotes, updateNote }
)(EditNoteModal);
