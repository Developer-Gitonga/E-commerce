import React, { useContext, useEffect, useState } from 'react';
import { Footer } from '../components';
import { Link } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { useNavigate } from 'react-router-dom';
import '../styles/extra.css';
import AuthContext from '../context/AuthContext';

function BecomeVendor() {
  const [vendorData, setVendorData] = useState({
    business: '',
    city: '',
    address: '',
    location: '',
  });
  const { setFullUserInfo, user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(vendorData);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...vendorData, user_id: user.user_id }),
    };
    let res = await fetch(
      'https://fichuastore.herokuapp.com/api/user/become-vendor/',
      options
    );
    let data = await res.json();
    console.log(data);
    console.log(res);
    if (res.status === 200) {
      Toastify({
        text: `${data.business} has successfully activate a vendor account`,
        duration: 4000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'green',
        },
      }).showToast();
      setFullUserInfo(data);
      localStorage.setItem('full_user_data', JSON.stringify(data));
      navigate('/dashboard');
    } else {
      Toastify({
        text: data.error,
        duration: 4000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'red',
        },
      }).showToast();
    }
  };
  return (
    <>
      <div className='container loginContainer'>
        <main className='form-signin text-center'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1 className='text-primary px-5 py-3 text-center txt-xl'>
              Become a Vendor
            </h1>

            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingbusinessInput'
                placeholder='Business Name'
                name='business'
                required
                value={vendorData.business}
                onChange={(e) =>
                  setVendorData((prev) => ({
                    ...prev,
                    business: e.target.value,
                  }))
                }
              />
              <label htmlFor='floatingbusinessInput'>Business Name</label>
            </div>
            <br></br>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingcityInput'
                placeholder='City'
                name='city'
                required
                value={vendorData.city}
                onChange={(e) =>
                  setVendorData((prev) => ({ ...prev, city: e.target.value }))
                }
              />
              <label htmlFor='floatingcityInput'>City</label>
            </div>
            <br></br>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingaddressInput'
                placeholder='Address'
                name='address'
                required
                value={vendorData.address}
                onChange={(e) =>
                  setVendorData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
              <label htmlFor='floatingaddressInput'>Address</label>
            </div>
            <br></br>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatinglocation'
                placeholder='Location'
                name='location'
                required
                value={vendorData.location}
                onChange={(e) =>
                  setVendorData((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
              />
              <label htmlFor='floatinglocation'>Location</label>
            </div>
            <br></br>

            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Access
            </button>

            {/* <div className='mt-4'>
              <p>
                Have an Account?{' '}
                <Link to={'/login'}>
                  <span
                    style={{
                      color: '#34b3e5',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Login
                  </span>
                </Link>
              </p>
            </div> */}
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default BecomeVendor;
