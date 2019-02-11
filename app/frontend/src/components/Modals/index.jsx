import React from 'react';
import PropTypes from 'prop-types';
import EditNoteModal from './EditNoteModal';
import LoginModal from './LoginModal';
import PostNoteModal from './PostNoteModal';
import RegistrationModal from './RegistrationModal';
import {
  EDIT_NOTE_MODAL,
  LOGIN_MODAL,
  POST_NOTE_MODAL,
  REGISTRATION_MODAL
} from './types';

const renderModal = type => {
  switch (type) {
    case EDIT_NOTE_MODAL:
      return <EditNoteModal />;
    case LOGIN_MODAL:
      return <LoginModal />;
    case POST_NOTE_MODAL:
      return <PostNoteModal />;
    case REGISTRATION_MODAL:
      return <RegistrationModal />;
    default:
      return null;
  }
};

const Modals = ({ closeModal, modalType, showModal }) => {
  if (!showModal) return null;

  return (
    <div className={`modal ${showModal ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={closeModal} />
      {renderModal(modalType)}
    </div>
  );
};

Modals.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired
};

export default Modals;
