import React from 'react';
import loadable from 'utils/loadable';

const LoginPage = loadable(() => import('./NonMember/LoginPage'));

const routes = [
  {
    path: '/business',
    component: LoginPage,
  }, {
    path: '/users',
    component: LoginPage,
  },
];

export default routes;

export const loginRoute = [
  {
    path: '/login',
    component: LoginPage,
  }, {
    path: '/forgot-password',
    component: LoginPage,
  }, {
    path: '/reset-password',
    component: LoginPage,
  },
];
