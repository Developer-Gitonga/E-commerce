import React, { useContext, useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import * as urlSlug from 'url-slug';
import { v4 as uuidv4 } from 'uuid';
import AuthContext from '../../context/AuthContext';

function Create() {
  const [photoData, setPhotoData] = useState('');
  const [category, setCategory] = useState([]);
  const [postData, setPostData] = useState({
    id: '',
    vendor: '',
    name: '',
    slug: '',
    photo: '',
    price: '',
    stock: '',
    details: '',
    category: '',
  });
  const { user } = useContext(AuthContext);

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

  const handlePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let file of photoData) {
      formData.append('file', file);
    }
    formData.append('upload_preset', 'vendor');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/fichua-store/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const jData = await data.json();
    console.log(data);
    console.log(jData);
    setPostData((prev) => ({ ...prev, photo: jData.secure_url }));

    if (data.status === 200) {
      console.log('now you can post your rest of the data');
      const { name, category, price, details, stock } = postData;
      let save_url = jData.secure_url;
      let short_url = save_url.substring(40);
      console.log(short_url);
      const content = {
        id: uuidv4(),
        name: name,
        vendor: user.user_id,
        slug: urlSlug.convert(name),
        photo: short_url,
        price: price,
        stock: stock,
        details: details,
        category: category,
      };
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      };
      const res = await fetch(
        'https://fichuastore.herokuapp.com/api/shop/post/product/',
        option
      );
      const data = await res.json();
      console.log(data);
      console.log(res);
      if (res.status === 200) {
        Toastify({
          text: data.success,
          duration: 3000,
          gravity: 'bottom', // `top` or `bottom`
          position: 'center', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'green',
          },
        }).showToast();
      } else {
        Toastify({
          text: 'Error occured when posting the product details',
          duration: 3000,
          // close: true,
          gravity: 'bottom', // `top` or `bottom`
          position: 'center', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'red',
          },
        }).showToast();
      }
    } else {
      console.log('Image Upload was unsucessful');
      Toastify({
        text: 'Error occured when uploading the product image',
        duration: 3000,
        // close: true,
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
    <div className='container pt-3 pb-2'>
      <h6>Post a Product</h6>
      <form onSubmit={(e) => handlePost(e)}>
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            id='floatingText'
            placeholder='Name'
            name='name'
            required
            value={postData.name}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <label htmlFor='floatingText'>Name</label>
        </div>
        <div className='form-floating mb-3'>
          <select
            name='category'
            placeholder='Select a Category'
            id=''
            defaultValue={(e) => e.target.value}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, category: e.target.value }))
            }
          >
            {category.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className='form-floating mb-3'>
          <input
            type='number'
            className='form-control'
            id='floatingPrice'
            placeholder='Price'
            name='price'
            required
            value={postData.price}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, price: e.target.value }))
            }
          />
          <label htmlFor='floatingPrice'>Price</label>
        </div>
        <div className='form-floating mb-3'>
          <input
            type='number'
            className='form-control'
            id='floatingStock'
            placeholder='Stock'
            name='stock'
            required
            value={postData.stock}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, stock: e.target.value }))
            }
          />
          <label htmlFor='floatingStock'>Stock</label>
        </div>
        <div className='form-floating mb-3'>
          <textarea
            className='form-control'
            id='floatingDes'
            placeholder='Details'
            required
            value={postData.details}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, details: e.target.value }))
            }
          ></textarea>
          <label htmlFor='floatingDesc'>Details</label>
        </div>

        <div className='mb-3'>
          <label htmlFor='formFile' className='form-label'>
            Upload an Image
          </label>
          <input
            className='form-control'
            type='file'
            required
            id='formFile'
            onChange={(e) => setPhotoData(e.target.files)}
          />
        </div>
        <button className='btn btn-primary-outline'>Post</button>
      </form>

      {/* <photo src={photoUrl} alt='' /> */}
    </div>
  );
}

export default Create;
