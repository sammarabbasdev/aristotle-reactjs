import React, { Component } from 'react';
import back_to_login from './../shared/back_to_login';

export default class resetPasswordComponent extends Component {
  render() {
    return (
      <>
        <h4 className='text-center mb-4'>
          Reset Password
        </h4>
        <form>
          <div className='form-group'>
            <label className='mb-1'>
              <strong>Type Password</strong>
            </label>
            <input type='email' className='form-control' />
          </div>
          <div className='form-group'>
            <label className='mb-1'>
              <strong>Re-type Password</strong>
            </label>
            <input type='password' className='form-control' />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='btn btn-primary btn-block'
            >
              Submit
            </button>
          </div>
        </form>
        <back_to_login />
      </>
    )
      ;
  }
}
