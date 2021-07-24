import React, { useState } from 'react';
import BacktoLogin from './../shared/back_to_login';

const ForgotPasswordComponent = ({ onSubmit }) => {
  const [method, setMethod] = useState(0);
  return (
    <>
      <h4 className='text-center mb-4'>
        Forgot Password
      </h4>
      <form>
        <div className='form-group'>
          <label className='mb-1'>
            <strong>Please Select a Method</strong>
          </label>
          <div className='form-group'>
            <select className='form-control form-control-lg' value={method}
                    onChange={(e) => setMethod(e.target.value)}>
              <option value='0'>--Select--</option>
              <option value='1'>SSN and Date of Birth</option>
              <option value='2'>Cell # and Agent Code</option>
            </select>
          </div>

        </div>
        {method == 1 && (
          <>
            <div className='form-group'>
              <label className='mb-1'>
                <strong>Social Security Number <span className='text-danger'>*</span></strong>
              </label>
              <input type='number' className='form-control' />
            </div>
            <div className='form-group'>
              <label className='mb-1'>
                <strong>Date of Birth <span className='text-danger'>*</span></strong>
              </label>
              <input type='date' className='form-control' />
            </div>
          </>
        )}
        {method == 2 && (
          <>
            <div className='form-group'>
              <label className='mb-1'>
                <strong>Cell # <span className='text-danger'>*</span></strong>
              </label>
              <input type='text' className='form-control' />
            </div>
            <div className='form-group'>
              <label className='mb-1'>
                <strong>Agent Code <span className='text-danger'>*</span></strong>
              </label>
              <input type='text' className='form-control' />
            </div>
          </>
        )}
        <div className='text-center'>
          <button
            onClick={onSubmit}
            type='submit'
            className='btn btn-primary btn-block'
          >
            Submit
          </button>
        </div>
      </form>
      <BacktoLogin />
    </>
  );
};

export default ForgotPasswordComponent;
