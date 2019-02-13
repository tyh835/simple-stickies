import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  logout,
  openLoginModal,
  openRegistrationModal,
  saveNotes,
  toggleMenu
} from '../../actions';

const Header = ({
  auth,
  logout,
  openLoginModal,
  openRegistrationModal,
  showMenu,
  saving,
  saveNotes,
  toggleMenu
}) => {
  const { isAuthenticated, user } = auth;

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container has-px-mobile-5 has-px-desktop-0">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <h1 className="subtitle is-3">
              <i className="far fa-sticky-note has-text-primary" />
              &nbsp;
              <i className="far fa-sticky-note has-text-info" />
              &nbsp;
              <i className="far fa-sticky-note has-text-warning" />
              <span className="is-hidden-mobile">&nbsp; Simple Stickies</span>
            </h1>
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
                <span className="welcome">Welcome, {user.username}!</span>
              </div>
              <div className="navbar-item is-centered">
                <button
                  className={`button is-primary ${saving ? 'is-loading' : ''}`}
                  onClick={e => saveNotes(e)}
                >
                  <strong>Save Changes</strong>
                </button>
              </div>
              <div className="navbar-item is-centered">
                <button
                  className="button is-danger is-outlined"
                  onClick={logout}
                >
                  Logout
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
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  openRegistrationModal: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  saveNotes: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  showMenu: state.menu.showMenu,
  saving: state.async.saving
});

export default connect(
  mapStateToProps,
  { logout, openLoginModal, openRegistrationModal, saveNotes, toggleMenu }
)(Header);
