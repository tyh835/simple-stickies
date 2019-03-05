import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './layout';
import Modals from './modals';
import StickyBoard from './StickyBoard';
import { closeModal, loadUser, fetchNotes } from '../actions';

const App = ({
  closeModal,
  fetchNotes,
  loadUser,
  isAuthenticated,
  modalType,
  showModal
}) => {
  useEffect(() => {
    if (isAuthenticated) fetchNotes();
    else setTimeout(loadUser, 0);
  }, [isAuthenticated]);

  return (
    <Layout>
      <Modals
        closeModal={closeModal}
        modalType={modalType}
        showModal={showModal}
      />
      <StickyBoard />
    </Layout>
  );
};

App.propTypes = {
  closeModal: PropTypes.func.isRequired,
  fetchNotes: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  modalType: state.modal.modalType,
  showModal: state.modal.showModal
});

export default connect(
  mapStateToProps,
  { closeModal, fetchNotes, loadUser }
)(App);
