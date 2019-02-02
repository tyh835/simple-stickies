import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import NotesBoard from './NotesBoard';
import PostNoteModal from './Modals/PostNoteModal';
import { POST_NOTE_MODAL } from '../actions/modals';

const App = ({ showModal, modalType }) => {
  const renderModal = () => {
    switch (modalType) {
      case POST_NOTE_MODAL:
        return <PostNoteModal />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      {showModal && renderModal()}
      <NotesBoard />
    </Layout>
  );
};

const mapStateToProps = state => ({
  showModal: state.modal.showModal,
  modalType: state.modal.modalType
});

export default connect(mapStateToProps)(App);
