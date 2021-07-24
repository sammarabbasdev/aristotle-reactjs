import React, { Component } from 'react';

export default class RegisterComponent extends Component {
  render() {
    return (
      <>
        <div className="h-100" style={{ marginTop: 200 }}>
          <div className="authincation h-100">
            <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-9">
                  <div className="authincation-content">
                    <div className="row no-gutters">
                      <div className="col-xl-12">
                        <div className="auth-form">
                          <h4 className="text-center mb-4">
                            Sign in your account
                          </h4>
                          <form action="index.html">
                            <div className="form-group">
                              <label className="mb-1">
                                <strong>Email</strong>
                              </label>
                              <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label className="mb-1">
                                <strong>Password</strong>
                              </label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="form-row d-flex justify-content-between mt-4 mb-2">
                              <div className="form-group">
                                <div className="custom-control custom-checkbox ml-1">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="basic_checkbox_1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="basic_checkbox_1"
                                  >
                                    Remember my preference
                                  </label>
                                </div>
                              </div>
                              <div className="form-group">
                                <a href="page-forgot-password.html">
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-primary btn-block"
                              >
                                Sign Me In
                              </button>
                            </div>
                          </form>
                          <div className="new-account mt-3">
                            <p>
                              Don't have an account?{' '}
                              <a
                                className="text-primary"
                                href="./page-register.html"
                              >
                                Sign up
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}