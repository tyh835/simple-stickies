import React from 'react';
import PostNoteModal from './PostNoteModal';
import EditNoteModal from './EditNoteModal';
import { EDIT_NOTE_MODAL, POST_NOTE_MODAL } from '../../actions/modals';

export const renderModal = type => {
  switch (type) {
    case EDIT_NOTE_MODAL:
      return <EditNoteModal />;
    case POST_NOTE_MODAL:
      return <PostNoteModal />;
    default:
      return null;
  }
};
