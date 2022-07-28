import React, { useContext, useEffect, useState } from 'react';
import { Footer, SingleProduct } from '../../components';
import '../../styles/extra.css';
import useFetch from '../../services/useFetch';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function ProductPage() {
  const [mainProd, setMainProd] = useState({});
  const { setCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(mainProd);
  // console.log(data);

  const handleAddToCart = () => {
    setCart((prev) => [
      ...prev,
      { ...mainProd, count: 1, amount: parseFloat(mainProd.price) },
    ]);

    Toastify({
      text: `${mainProd.name.substring(0, 10)}... added to cart successfully`,
      duration: 2000,
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: 'green',
      },
    }).showToast();
  };

  const buyNow = () => {
    setCart((prev) => [
      ...prev,
      { ...mainProd, count: 1, amount: parseFloat(mainProd.price) },
    ]);

    Toastify({
      text: `${mainProd.name.substring(0, 10)}... added to cart successfully`,
      duration: 2000,
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: 'green',
      },
    }).showToast();
    navigate('/cart');
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(`https://fichuastore.herokuapp.com/api/shop/product/${id}/`)
      .then((response) => {
        setMainProd(response.data);
      });
  }, [id]);

  const { data } = useFetch(
    `https://fichuastore.herokuapp.com/api/shop/similar_items/${mainProd.category}/`
  );
  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='card pro'>
          <div className='row g-0'>
            <div className='col-md-6 border-end'>
              <div className='d-flex flex-column justify-content-center'>
                <div className='main_image'>
                  {' '}
                  <img
                    src={`https://res.cloudinary.com/fichua-store/${mainProd.photo}`}
                    id='main_product_image'
                    width='350'
                    alt=''
                  />{' '}
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='p-3 right-side'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h3 className='txt-xl'>{mainProd.name}</h3>
                </div>
                <div className='mt-2 pr-3 content'>
                  <p>{mainProd.details}</p>
                </div>
                <h3>Ksh. {mainProd.price}</h3>

                <div className='rating mt-3'>
                  <span className=''>
                    <i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
                  </span>
                  <span className=''>
                    <i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
                  </span>
                  <span className=''>
                    <i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
                  </span>
                  <span className=''>
                    <i style={{ color: '#f19c3a' }} className='fa fa-star'></i>
                  </span>
                  <span className=''>
                    <i className='fa fa-star'></i>
                  </span>

                  <span style={{ marginLeft: '10px' }}>441 reviews</span>
                </div>

                <div className='d-flex flex-row mt-5 gap-3'>
                  {' '}
                  <button
                    style={{ backgroundColor: '#34b3e5', color: '#fff' }}
                    className='btn btn-primary mt-1'
                    style={{ color: '#000', backgroundColor: 'orange' }}
                    onClick={buyNow}
                  >
                    Buy now
                  </button>
                  <button
                    className='btn btn-primary mt-1'
                    style={{ color: '#fff' }}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='py-5'>
        <div className='container'>
          <div className='title text-center'>
            <h2 className='position-relative d-inline-block'>
              Related Products
            </h2>
          </div>

          <div className='container special-list'>
            <div className='row'>
              {data.map((item) => {
                return (
                  <div key={item.id} className='col-lg-3'>
                    <SingleProduct product={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductPage;
