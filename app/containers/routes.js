import LoginPage from './NonMember/LoginPage';
import ForgotPasswordPage from './NonMember/ForgotPasswordPage';
import ResetPasswordPage from './NonMember/ResetPasswordPage';
import DashboardPage from './Dashboard';

const routes = [
  {
    path: '/dashboard',
    component: DashboardPage,
  },
  {
    path: '/users',
    component: LoginPage,
  },
];

export default routes;

export const loginRoute = [
  // {
  //   path: '/',
  //   component: LoginPage,
  // },
  // {
  //   path: '/register',
  //   component: LoginPage,
  // },
  {
    path: '/forgot-password',
    component: ForgotPasswordPage,
  },
  // {
  //   path: '/reset-password',
  //   component: ResetPasswordPage,
  // },
];
