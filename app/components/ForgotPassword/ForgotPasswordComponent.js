import React, { Component } from 'react';

export default class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ method: e.target.value });
  }

  render() {

    return (
      <>
        <div className="h-100" style={{ marginTop: 200 }}>
          <div className="authincation h-100">
            <div className="scontainer h-100">
              <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-4">
                  <div className="authincation-content">
                    <div className="row no-gutters">
                      <div className="col-xl-12">
                        <div className="auth-form">
                          <h4 className="text-center mb-4">
                            Forgot Password
                          </h4>
                          <form action="index.html">
                            <div className="form-group">
                              <label className="mb-1">
                                <strong>Please Select a Method</strong>
                              </label>
                              <div className="form-group">
                                <select className="form-control form-control-lg" value={this.state.method}
                                        onChange={this.handleChange}>
                                  <option value="0">--Select--</option>
                                  <option value="1">SSN and Date of Birth</option>
                                  <option value="2">Cell # and Agent Code</option>
                                </select>
                              </div>

                            </div>
                            {this.state.method == 1 && (
                              <>
                                <div className="form-group">
                                  <label className="mb-1">
                                    <strong>Social Security Number <span className="text-danger">*</span></strong>
                                  </label>
                                  <input type="number" className="form-control" />
                                </div>
                                <div className="form-group">
                                  <label className="mb-1">
                                    <strong>Date of Birth <span className="text-danger">*</span></strong>
                                  </label>
                                  <input type="date" className="form-control" />
                                </div>
                              </>
                            )}
                            {this.state.method == 2 && (
                              <>
                                <div className="form-group">
                                  <label className="mb-1">
                                    <strong>Cell # <span className="text-danger">*</span></strong>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                  <label className="mb-1">
                                    <strong>Agent Code <span className="text-danger">*</span></strong>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </>
                            )}


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
                            <p className="mt-3">
                              <a
                                className="text-primary"
                                href="/"
                              >
                                Back to Aristotle Login
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
