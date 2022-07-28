import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const success = Toastify({
  text: 'Success',
  duration: 2000,
  close: true,
  gravity: 'bottom', // `top` or `bottom`
  position: 'center', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: 'green',
  },
}).showToast();

export const danger = Toastify({
  text: 'Danger',
  duration: 2000,
  close: true,
  gravity: 'bottom', // `top` or `bottom`
  position: 'center', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: 'red',
  },
}).showToast();
