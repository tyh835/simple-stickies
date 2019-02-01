import React, { Fragment } from 'react';
import Header from './Header/Header.jsx';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Hello React!</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
