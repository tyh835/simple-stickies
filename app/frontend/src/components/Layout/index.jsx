import React from 'react';
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

export default Layout;
