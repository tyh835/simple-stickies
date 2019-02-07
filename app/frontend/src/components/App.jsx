import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './Layout';
import StickyBoard from './StickyBoard';
import { renderModal } from './Modals';
import { loadUser, fetchNotes } from '../actions';

const App = ({
  fetchNotes,
  isAuthenticated,
  loadUser,
  showModal,
  modalType
}) => {
  useEffect(() => {
    if (isAuthenticated) fetchNotes();
    else setTimeout(loadUser, 0);
  }, [isAuthenticated]);

  return (
    <Layout>
      {showModal && renderModal(modalType)}
      <StickyBoard />
    </Layout>
  );
};

App.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  showModal: state.modal.showModal,
  modalType: state.modal.modalType
});

export default connect(
  mapStateToProps,
  { fetchNotes, loadUser }
)(App);
