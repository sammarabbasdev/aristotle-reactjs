import React from 'react';

const Master = (props) => {
  return (
    <>
      <header>
        <div className='header'>
          <div className='header-content'>
            <nav className='navbar navbar-expand'>
              <div className='collapse navbar-collapse justify-content-between'>
                <div className='header-left'>
                  <div className='search_bar dropdown show'>
                    <div className='dropdown-menu p-0 m-0 show'>
                      <form>
                        <input className='form-control' type='search' placeholder='Search Here' aria-label='Search' />
                      </form>
                    </div>
                    <span className='search_icon p-3 c-pointer' data-toggle='dropdown'>

                                </span>
                  </div>
                </div>

                <ul className='navbar-nav header-right'>
                  <li className='nav-item dropdown notification_dropdown'>
                    <a className='nav-link dz-fullscreen primary' href='#'>
                    </a>
                  </li>
                  <li className='nav-item dropdown notification_dropdown'>
                    <a className='nav-link bell bell-link primary' href='#'>
                    </a>
                  </li>
                  <li className='nav-item dropdown notification_dropdown'>
                    <a className='nav-link  ai-icon warning' href='#' role='button' data-toggle='dropdown'>
                      <div className='pulse-css'></div>
                    </a>
                  </li>
                  <li className='nav-item dropdown header-profile'>
                    <a className='nav-link' href='#' role='button' data-toggle='dropdown'>
                      <div className='header-info'>
                        <span>Hello, <strong>Samuel</strong></span>
                      </div>
                      <img src='images/profile/pic1.jpg' width='20' alt='' />
                    </a>
                    <div className='dropdown-menu dropdown-menu-right'>
                      <a href='./app-profile.html' className='dropdown-item ai-icon'>
                        <span className='ml-2'>Profile </span>
                      </a>
                      <a href='./email-inbox.html' className='dropdown-item ai-icon'>
                        <span className='ml-2'>Inbox </span>
                      </a>
                      <a href='./page-login.html' className='dropdown-item ai-icon'>
                        <span className='ml-2'>Logout </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {props.children}
      <footer>
        Footer goes here
      </footer>
    </>
  );
};

export default Master;
