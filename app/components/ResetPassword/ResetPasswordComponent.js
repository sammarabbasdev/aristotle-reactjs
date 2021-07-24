import React, { Component } from 'react';

export default class resetPasswordComponent extends Component {
  render() {
    return (
      <>
        <div className="h-100" style={{ marginTop: 200 }}>
          <div className="authincation h-100">
            <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                  <div className="authincation-content">
                    <div classNsame="row no-gutters">
                      <div className="col-xl-12">
                        <div className="auth-form">
                          <h4 className="text-center mb-4">
                            Reset Password
                          </h4>
                          <form action="index.html">
                            <div className="form-group">
                              <label className="mb-1">
                                <strong>Type Password</strong>
                              </label>
                              <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label className="mb-1">
                                <strong>Re-type Password</strong>
                              </label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-primary btn-block"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                          <div className="new-account mt-3 text-center">
                            <p>
                              <a
                                className="text-primary"
                                href="/"
                              >
                                Back to Aristotle Logins
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
