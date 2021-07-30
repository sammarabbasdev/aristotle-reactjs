import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onSubmit }) => {
  const [user_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <form onSubmit={(e) => onSubmit(e, { user_name, password })}>
        <h4 className='text-center mb-4'>
          Sign in your account
        </h4>
        <div className='form-group'>
          <label className='mb-1'>
            <strong>Username</strong>
          </label>
          <input type='text' className='form-control' name="user_name" value={user_name}
                 onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-group'>
          <label className='mb-1'>
            <strong>Password</strong>
          </label>
          <input type='password' className='form-control' name='password' value={password}
                 onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='form-row d-flex justify-content-between mt-4 mb-2'>
          <div className='form-group'>
            <div className='custom-control custom-checkbox ml-1'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='basic_checkbox_1'
              />
              <label
                className='custom-control-label'
                htmlFor='basic_checkbox_1'
              >
                Remember my preference
              </label>
            </div>
          </div>
          <div className='form-group'>
            <Link to={'/forgot-password'}>
              Forgot Password?
            </Link>

          </div>
        </div>
        <div className='text-center'>
          <button style={{ paddingTop: 9 }} type="submit" className="btn btn-primary btn-block">
            Sign Me In
          </button>
        </div>

        <div className='new-account mt-3'>
          <p>
            Don't have an account?{' '}
            <Link to={'/register'} className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;

