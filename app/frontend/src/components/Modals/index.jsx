import React from 'react';
import EditNoteModal from './EditNoteModal';
import LoginModal from './LoginModal';
import PostNoteModal from './PostNoteModal';
import RegistrationModal from './RegistrationModal';
import {
  EDIT_NOTE_MODAL,
  LOGIN_MODAL,
  POST_NOTE_MODAL,
  REGISTRATION_MODAL
} from '../../actions/modals';

export const renderModal = type => {
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
