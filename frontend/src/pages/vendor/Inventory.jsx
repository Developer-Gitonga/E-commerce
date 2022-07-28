import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';

function Inventory() {
  const [prods, setProds] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchProds = async () => {
    let res = await fetch(
      `https://fichuastore.herokuapp.com/api/shop/user/products/${user.user_id}/`
    );
    let data = await res.json();
    console.log(data);
    setProds(data);
  };

  useState(() => {
    fetchProds();
  }, []);
  return (
    <>
      <div className='mt-2'>.</div>
      <table className='table pt-3 pb-2 mt-2'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Stock</th>
            <th scope='col'>Mfg</th>
            <th scope='col'>Img</th>
          </tr>
        </thead>
        <tbody>
          {prods.map((p) => {
            return (
              <tr>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>{p.mfg}</td>
                <td>{p.img}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Inventory;
