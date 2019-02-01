import React from 'react';
import { connect } from 'react-redux';

const PageLoader = ({ loading }) => {
  return (
    <div className={`pageloader ${loading && 'page--loading'}`}>
      <span className="title">Loading...</span>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loading.loading
});

export default connect(mapStateToProps)(PageLoader);
