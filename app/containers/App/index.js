/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import routes, { loginRoute } from '../routes';
import { HeaderNonMember, FooterNonMember } from '../NonMember/headerFooter';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate='%s - React.js Boilerplate'
        defaultTitle='React.js Boilerplate'
      >
        <meta name='description' content='A React.js Boilerplate application' />
      </Helmet>
      <Switch>

        {/*No Logged in Member routing*/}
        <Route path={'/login'}>
          <HeaderNonMember />
          {
            loginRoute.map(
              (route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ),
            )
          }
          <FooterNonMember />
        </Route>

        {/*Logged in Member routing*/}
        <Route path={'/dashboard'}>
          <>
            <Header />
            {
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))
            }
            <Footer />
          </>
        </Route>
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
