import React from 'react';
import Header from './Header';
import PageLoader from './PageLoader';
import Alerts from './Alerts';

const Layout = ({ children }) => {
  return (
    <>
      <Alerts />
      <Header />
      <PageLoader />

      <div id="content">{children}</div>
    </>
  );
};

export default Layout;
