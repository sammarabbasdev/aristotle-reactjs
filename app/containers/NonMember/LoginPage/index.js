/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLoading, makeSelectError } from '../../App/selectors';
import { onSubmitForm } from './actions';
import LoginComponent from '../../../components/Login';

const key = 'login';

export function LoginPage({ onSubmitForm }) {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginComponent onSubmit={onSubmitForm} />
    </>
  );
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
};

// functions
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
