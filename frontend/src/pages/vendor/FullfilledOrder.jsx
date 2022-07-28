import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const FullfilledOrder = () => {
  const [order, setOrder] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://fichuastore.herokuapp.com/api/shop/order/done/${user.user_id}/`;
  const fetchOrders = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setOrder(data);
  };

  useState(() => {
    fetchOrders();
  }, []);

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
            <th scope='col'>Updated</th>
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
                <td>{p.order_updated}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FullfilledOrder;
