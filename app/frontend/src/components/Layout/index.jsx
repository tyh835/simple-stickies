import React from 'react';
import Header from './Header';
import PageLoader from './PageLoader';

const Layout = ({ children }) => {
  return (
    <>
      <PageLoader />
      <Header />
      {children}
    </>
  );
};

export default Layout;
