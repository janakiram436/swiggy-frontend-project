import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <section className="topBarSectionpage">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <Link to='/home' className="navbar-brand">
            <h2 className="m-0" style={{color:"orange"}}>SUBY</h2>
          </Link>

          <div className="d-flex ms-auto align-items-center">
            <div className="searchBarpage me-3">
              <input type="text" className="form-control" placeholder="Search..." />
            </div>

            <div className="userAuthpage me-3">
              <Link to="/" className="btn btn-outline-primary">
                Logout
              </Link>
            </div>

            <div>
              <Link to="/vendor" className="btn btn-outline-secondary" style={{color:"red"}}>
                VendorPage
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default TopBar;
