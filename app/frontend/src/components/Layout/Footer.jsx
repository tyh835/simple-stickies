import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openPostNoteModal } from '../../actions';

const Footer = ({ isAuthenticated, openPostNoteModal }) => {
  return (
    <nav
      className="navbar is-fixed-bottom"
      role="navigation"
      aria-label="secondary navigation"
    >
      <div
        className="container is-centered"
        style={{ visibility: isAuthenticated ? 'visible' : 'hidden' }}
      >
        <button
          className="button is-primary"
          onClick={openPostNoteModal}
          type="submit"
        >
          <strong>Add new Sticky!</strong>
        </button>
      </div>
    </nav>
  );
};

Footer.propTypes = {
  openPostNoteModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { openPostNoteModal }
)(Footer);
