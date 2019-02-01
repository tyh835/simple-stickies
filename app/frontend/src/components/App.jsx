import React, { Fragment } from 'react';
import Header from './Header/Header.jsx';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-1 has-text-centered">Hello React!</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
