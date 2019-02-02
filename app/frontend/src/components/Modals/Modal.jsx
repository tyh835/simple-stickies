import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions';

const Modal = ({ children, closeModal, showModal }) => {
  return (
    <div className={`modal ${showModal ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={closeModal} />
      {children}
    </div>
  );
};

const mapStateToProps = state => ({
  showModal: state.modal.showModal
});

export default connect(
  mapStateToProps,
  { closeModal }
)(Modal);
