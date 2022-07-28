import React, { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/extra.css';
import AuthContext from '../context/AuthContext';

const DashLayout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { logout } = useContext(AuthContext);
  return (
    <>
      <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
        <a
          className='navbar-brand col-md-3 col-lg-2 me-0 px-3'
          href='/dashboard'
        >
          Fichua
        </a>
        <button
          className='navbar-toggler position-absolute d-md-none collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarMenu'
          aria-controls='sidebarMenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <input
          className='form-control form-control-dark w-100'
          type='text'
          placeholder='Search'
          aria-label='Search'
        />
        <div className='navbar-nav'>
          <div className='nav-item text-nowrap'>
            <a className='nav-link px-3' href='/dashboard'>
              Search
            </a>
          </div>
        </div>
      </header>
      <div className='container-fluid'>
        <div className='row'>
          <nav
            id='sidebarMenu'
            className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'
          >
            <div className='position-sticky pt-3'>
              <ul className='nav flex-column'>
                <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeTab === 'dashboard' ? 'active' : ''
                      }`}
                      onClick={() => setActiveTab('dashboard')}
                      aria-current='page'
                      href='/dashboard'
                    >
                      <span data-feather='home'></span>
                      Dashboard
                    </a>
                  </li>
                </Link>
                <Link
                  to='/dashboard/inventory'
                  style={{ textDecoration: 'none' }}
                >
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeTab === 'Products' ? 'active' : ''
                      }`}
                      onClick={() => setActiveTab('Products')}
                      href='/dashboard/inventory'
                    >
                      <span data-feather='file'></span>
                      Products
                    </a>
                  </li>
                </Link>
                <Link to='/dashboard/orders' style={{ textDecoration: 'none' }}>
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeTab === 'Orders' ? 'active' : ''
                      }`}
                      onClick={() => setActiveTab('Orders')}
                      href='/dashboard/orders'
                    >
                      <span data-feather='shopping-cart'></span>
                      Pending Orders
                    </a>
                  </li>
                </Link>
                <Link
                  to='/dashboard/fullfilled-orders'
                  style={{ textDecoration: 'none' }}
                >
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeTab === 'Fullfilled Orders' ? 'active' : ''
                      }`}
                      onClick={() => setActiveTab('Fullfilled Orders')}
                      href='/dashboard/fullfilled-orders'
                    >
                      <span data-feather='shopping-cart'></span>
                      Fullfilled Orders
                    </a>
                  </li>
                </Link>
                <Link to='/dashboard/create' style={{ textDecoration: 'none' }}>
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeTab === 'Post' ? 'active' : ''
                      }`}
                      onClick={() => setActiveTab('Post')}
                      href='/dashboard'
                    >
                      <span data-feather='users'></span>
                      Post
                    </a>
                  </li>
                </Link>
                <Link
                  to='/dashboard/reports'
                  style={{ textDecoration: 'none' }}
                >
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeTab === 'Reports' ? 'active' : ''
                      }`}
                      onClick={() => setActiveTab('Reports')}
                      href='/dashboard'
                    >
                      <span data-feather='bar-chart-2'></span>
                      Reports
                    </a>
                  </li>
                </Link>
              </ul>
              <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
                <span>Saved reports</span>
                <a
                  className='link-secondary'
                  href='/dashboard'
                  aria-label='Add a new report'
                >
                  <span data-feather='plus-circle'></span>
                </a>
              </h6>
              <ul className='nav flex-column mb-2'>
                <li className='nav-item'>
                  <a className='nav-link' href='/dashboard'>
                    <span data-feather='file-text'></span>
                    Current month
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/dashboard'>
                    <span data-feather='file-text'></span>
                    Last quarter
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/dashboard'>
                    <span data-feather='file-text'></span>
                    Social engagement
                  </a>
                </li>
                <li className='nav-item' onClick={logout}>
                  <a className='nav-link' href=''>
                    <span data-feather='file-text'></span>
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashLayout;
