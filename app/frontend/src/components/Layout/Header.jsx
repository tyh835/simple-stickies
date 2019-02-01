import React, { Component } from 'react';

class Header extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = e => {
    e.preventDefault();
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  };

  render() {
    const { showMenu } = this.state;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
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
              className={`navbar-burger burger ${showMenu && 'is-active'}`}
              aria-label="menu"
              aria-expanded={`${showMenu}`}
              onClick={this.toggleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div className={`navbar-menu ${showMenu && 'is-active'}`}>
            <div className="navbar-end">
              <div className="navbar-item is-centered">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
              </div>
              <div className="navbar-item is-centered">
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
