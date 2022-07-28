import React, { useContext, useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import AuthContext from '../../context/AuthContext';

const PendingOrders = () => {
  const [order, setOrder] = useState([]);
  const [btnStatus, setBtnStatus] = useState(false);
  const { user } = useContext(AuthContext);
  const url = `https://fichuastore.herokuapp.com/api/shop/order/undone/${user.user_id}/`;

  const fetchOrders = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setOrder(data);
  };

  const handleClick = async (e, id) => {
    let res = await fetch(
      `https://fichuastore.herokuapp.com/api/shop/fulfill/order/${id}/`
    );
    let data = await res.json();
    console.log(data);
    if (res.status === 200) {
      Toastify({
        text: data.success,
        duration: 4000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'green',
        },
      }).showToast();
    }
    setBtnStatus((prev) => !prev);
    recallFunc();
  };

  useState(() => {
    fetchOrders();
  }, []);

  const recallFunc = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setOrder(data);
  };

  return (
    <>
      <div className='mt-2'>.</div>
      <table className='table pt-3 pb-2 mt-2'>
        <thead>
          <tr>
            <th scope='col'>Product_id</th>
            <th scope='col'>Customers_id</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Status</th>
            <th scope='col'>Created</th>
            <th scope='col'>Fulfill</th>
          </tr>
        </thead>
        <tbody>
          {order.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.product}</td>
                <td>{p.customer}</td>
                <td>{p.count}</td>
                <td>{p.amount}</td>
                <td>{JSON.stringify(p.is_fullfilled)}</td>
                <td>{p.order_created}</td>
                <td>
                  <button
                    onClick={(e) => handleClick(e, p.id)}
                    className='btn btn-primary'
                  >
                    Done
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PendingOrders;
