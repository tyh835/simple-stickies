import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModal } from '../../actions';

const Modal = ({ children, closeModal, showModal }) => {
  return (
    <div className={`modal ${showModal ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={closeModal} />
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  showModal: state.modal.showModal
});

export default connect(
  mapStateToProps,
  { closeModal }
)(Modal);
