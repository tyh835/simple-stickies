import React from 'react';
import PropTypes from 'prop-types';
import Alerts from './Alerts';
import Footer from './Footer';
import Header from './Header';
import PageLoader from './PageLoader';

const Layout = ({ children }) => {
  return (
    <>
      <Alerts />
      <Header />
      <PageLoader />
      <div id="content">{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

export default Layout;
