import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveNotes, toggleMenu } from '../../actions';

const Header = ({
  currentNotes,
  cachedNotes,
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
          <div className="navbar-end">
            <div className="navbar-item is-centered">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
            </div>
            <div className="navbar-item is-centered">
              <a className="button is-light">Log in</a>
            </div>
            <div className="navbar-item is-centered">
              <a
                className={`button is-primary ${saving ? 'is-loading' : ''}`}
                onClick={e => saveNotes(e, currentNotes, cachedNotes)}
              >
                <strong>Save Changes</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentNotes: state.notes.currentNotes,
  cachedNotes: state.notes.cachedNotes,
  showMenu: state.menu.showMenu,
  saving: state.save.saving
});

export default connect(
  mapStateToProps,
  { saveNotes, toggleMenu }
)(Header);
