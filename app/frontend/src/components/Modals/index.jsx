import React from 'react';
import PostNoteModal from './PostNoteModal';
import { POST_NOTE_MODAL } from '../../actions/modals';

export const renderModal = type => {
  switch (type) {
    case POST_NOTE_MODAL:
      return <PostNoteModal />;
    default:
      return null;
  }
};
