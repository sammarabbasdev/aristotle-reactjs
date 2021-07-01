import LoginPage from './NonMember/LoginPage';

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
