import React from 'react';
import Header from './Header';
import PageLoader from './PageLoader';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <PageLoader />
      <div id="content">{children}</div>
    </>
  );
};

export default Layout;
