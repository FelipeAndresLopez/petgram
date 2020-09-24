import React from 'react';
import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NavBar } from './components/Navbar';
import Context from './Context';

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path="/" />
      <Home path="/pet/:categoryId" />
      <Detail path="/detail/:detailId" />
    </Router>

    <Context.Consumer>
      {
        ({ isAuth }) => (isAuth
          ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          )
          : (
            <Router>
              <NotRegisteredUser path="/user" />
              <NotRegisteredUser path="/favs" />
            </Router>
          )
        )
      }

    </Context.Consumer>
    <NavBar />
  </div>
);
