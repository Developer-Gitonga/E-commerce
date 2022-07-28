import React, { useState } from 'react';
import SingleCategory from './SingleCategory';

function Categories() {
  const [category, setCategory] = useState([]);

  const fetchCategories = async () => {
    let res = await fetch(
      'https://fichuastore.herokuapp.com/api/shop/categories/'
    );
    let data = await res.json();
    console.log(data);
    setCategory(data);
  };

  useState(() => {
    fetchCategories();
  }, []);

  return (
    <div className='container mt-5'>
      <div className='title text-center'>
        <h2 className='position-relative d-inline-block txt-xl'>Categories</h2>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <span className='textC text-center text-dark'>
          Finding Best Products Now in Your Fingertips
        </span>
      </div>
      <div className='rw py-4'>
        {category.map((item) => (
          <SingleCategory
            name={item.name}
            photo={item.photo}
            slug={item.slug}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
