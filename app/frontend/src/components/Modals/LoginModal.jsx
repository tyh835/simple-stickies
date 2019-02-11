import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModal, login, updateLoginForm } from '../../actions';

const LoginModal = ({ closeModal, login, loginForm, updateLoginForm }) => {
  const { username, password } = loginForm;

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Login</p>
        <button className="delete" onClick={closeModal} aria-label="close" />
      </header>
      <section className="modal-card-body">
        <form onSubmit={e => login(e)}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left">
              <input
                type="text"
                name="username"
                value={username}
                className="input"
                onChange={updateLoginForm}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left">
              <input
                type="password"
                name="password"
                value={password}
                className="input"
                onChange={updateLoginForm}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </div>
          </div>
          <div className="field is-centered">
            <div className="control">
              <button className="button is-primary" type="submit">
                <strong>Login</strong>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

LoginModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginForm: PropTypes.object.isRequired,
  updateLoginForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginForm: state.auth.loginForm
});

export default connect(
  mapStateToProps,
  { closeModal, login, updateLoginForm }
)(LoginModal);
