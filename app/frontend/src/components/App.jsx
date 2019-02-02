import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './Layout';
import NotesBoard from './NotesBoard';
import { renderModal } from './Modals';

const App = ({ showModal, modalType }) => {
  return (
    <Layout>
      {showModal && renderModal(modalType)}
      <NotesBoard />
    </Layout>
  );
};

App.propTypes = {
  showModal: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  showModal: state.modal.showModal,
  modalType: state.modal.modalType
});

export default connect(mapStateToProps)(App);
