import React from 'react';
import { connect } from 'react-redux';
import { dismissError } from '../../actions';

const Alerts = ({ dismissError, errors }) => {
  return (
    <div className="container">
      {errors.map(error => (
        <div className="notification is-danger" key={error.key}>
          <button className="delete" onClick={() => dismissError(error.key)} />
          {error.message}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  errors: state.async.errors
});

export default connect(
  mapStateToProps,
  { dismissError }
)(Alerts);
