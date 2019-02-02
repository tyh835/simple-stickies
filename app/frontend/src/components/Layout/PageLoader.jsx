import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PageLoader = ({ loading }) => {
  return (
    <div className={`pageloader ${loading && 'is-loading'}`}>
      <span className="title">Loading...</span>
    </div>
  );
};

PageLoader.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading.loading
});

export default connect(mapStateToProps)(PageLoader);
