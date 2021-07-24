import React from 'react';

const Master = (props) => {
  return (
    <>
      <header>
        <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="search_bar dropdown show">
                    <div className="dropdown-menu p-0 m-0 show">
                      <form>
                        <input className="form-control" type="search" placeholder="Search Here" aria-label="Search"/>
                      </form>
                    </div>
                    <span className="search_icon p-3 c-pointer" data-toggle="dropdown">

                                </span>
                  </div>
                </div>

                <ul className="navbar-nav header-right">
                  <li className="nav-item dropdown notification_dropdown">
                    <a className="nav-link dz-fullscreen primary" href="#">
                    </a>
                  </li>
                  <li className="nav-item dropdown notification_dropdown">
                    <a className="nav-link bell bell-link primary" href="#">
                    </a>
                  </li>
                  <li className="nav-item dropdown notification_dropdown">
                    <a className="nav-link  ai-icon warning" href="#" role="button" data-toggle="dropdown">
                      <div className="pulse-css"></div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3 ps" style="height:380px;">
                        <ul className="timeline">
                          <li>
                            <div className="timeline-panel">
                              <div className="media mr-2">
                                <img alt="image" width="50" src="images/avatar/1.jpg"/>
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media mr-2 media-info">
                                KG
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Resport created successfully</h6>
                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media mr-2 media-success">
                                <i className="fa fa-home"></i>
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media mr-2">
                                <img alt="image" width="50" src="images/avatar/1.jpg"/>
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media mr-2 media-danger">
                                KG
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Resport created successfully</h6>
                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media mr-2 media-primary">
                                <i className="fa fa-home"></i>
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                <small className="d-block">29 July 2020 - 02:26 PM</small>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="ps__rail-x" style="left: 0px; bottom: 0px;">
                          <div className="ps__thumb-x" tabIndex="0" style="left: 0px; width: 0px;"></div>
                        </div>
                        <div className="ps__rail-y" style="top: 0px; right: 0px;">
                          <div className="ps__thumb-y" tabIndex="0" style="top: 0px; height: 0px;"></div>
                        </div>
                      </div>
                      <a className="all-notification" href="#">See all notifications <i className="ti-arrow-right"></i></a>
                    </div>
                  </li>
                  <li className="nav-item dropdown header-profile">
                    <a className="nav-link" href="#" role="button" data-toggle="dropdown">
                      <div className="header-info">
                        <span>Hello, <strong>Samuel</strong></span>
                      </div>
                      <img src="images/profile/pic1.jpg" width="20" alt=""/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="./app-profile.html" className="dropdown-item ai-icon">
                        <span className="ml-2">Profile </span>
                      </a>
                      <a href="./email-inbox.html" className="dropdown-item ai-icon">
                        <span className="ml-2">Inbox </span>
                      </a>
                      <a href="./page-login.html" className="dropdown-item ai-icon">
                        <span className="ml-2">Logout </span>
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
