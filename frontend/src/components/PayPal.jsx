import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const PayPal = (props) => {
  const paypal = useRef();
  const navigate = useNavigate();
  const { cart, setCart, setData } = props;

  let all_purchase = [];
  let total = 0;
  for (let c of cart) {
    let unit = {
      description: c.name,
      amount: {
        currency_code: 'USD',
        value: c.amount / 100,
      },
    };
    total = total + c.amount;
    all_purchase.push(unit);
  }
  let totalUSd = parseFloat(total / 100);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'From kenya +254',

                amount: {
                  currency_code: 'USD',
                  value: totalUSd,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          Toastify({
            text: 'Payment successful',
            duration: 4000,
            gravity: 'bottom', // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: 'green',
            },
          }).showToast();
          setData(order);
          navigate('/cart/done');
        },
        onError: (error) => {
          console.log(error);
          Toastify({
            text: 'Error occured during payment',
            duration: 4000,
            gravity: 'bottom', // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: 'red',
            },
          }).showToast();
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPal;
