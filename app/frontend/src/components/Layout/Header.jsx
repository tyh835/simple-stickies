import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  openLoginModal,
  openRegistrationModal,
  saveNotes,
  toggleMenu
} from '../../actions';

const Header = ({
  isAuthenticated,
  openLoginModal,
  openRegistrationModal,
  showMenu,
  saving,
  saveNotes,
  toggleMenu
}) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container has-px-mobile-5 has-px-desktop-0">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
          <a
            role="button"
            className={`navbar-burger burger ${showMenu ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={`${showMenu}`}
            onClick={toggleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>
          {!isAuthenticated ? (
            <div className="navbar-end">
              <div className="navbar-item is-centered">
                <button
                  className="button is-primary is-outlined"
                  onClick={openRegistrationModal}
                >
                  <strong>Sign up</strong>
                </button>
              </div>
              <div className="navbar-item is-centered">
                <button className="button is-light" onClick={openLoginModal}>
                  Log in
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar-end">
              <div className="navbar-item is-centered">
                <button
                  className={`button is-primary ${saving ? 'is-loading' : ''}`}
                  onClick={e => saveNotes(e)}
                >
                  <strong>Save Changes</strong>
                </button>
              </div>
              <div className="navbar-item is-centered">
                <button className="button is-danger is-outlined">
                  <strong>Logout</strong>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  openRegistrationModal: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  saveNotes: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  showMenu: state.menu.showMenu,
  saving: state.async.saving
});

export default connect(
  mapStateToProps,
  { openLoginModal, openRegistrationModal, saveNotes, toggleMenu }
)(Header);
