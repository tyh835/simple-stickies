import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';
import {
  closeModal,
  postNote,
  updateNewNote,
  updateNewNoteColor
} from '../../actions';

const PostNoteModal = ({
  closeModal,
  newNote,
  postNote,
  updateNewNote,
  updateNewNoteColor
}) => {
  const { title, content } = newNote;

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Add new note</p>
        <button className="delete" onClick={closeModal} aria-label="close" />
      </header>
      <section className="modal-card-body">
        <form onSubmit={e => postNote(e, newNote)}>
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
          <ColorPicker handleColorChange={updateNewNoteColor} />
          <div className="field is-centered">
            <div className="control">
              <button className="button is-primary" type="submit">
                <strong>Save Note</strong>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

PostNoteModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  newNote: PropTypes.object.isRequired,
  postNote: PropTypes.func.isRequired,
  updateNewNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  newNote: state.notes.newNote
});

export default connect(
  mapStateToProps,
  { closeModal, postNote, updateNewNote, updateNewNoteColor }
)(PostNoteModal);
