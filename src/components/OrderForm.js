import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const OrderForm = ({ items, total, clearCart }) => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const resetForm = () => {
    setBuyerName('');
    setBuyerPhone('');
    setBuyerEmail('');
    setConfirmEmail('');
  };

  const db = getFirestore();
  const orderCollection = collection(db, 'orders');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (buyerEmail === confirmEmail && items.length !== 0) {
      const order = {
        buyer: {
          name: buyerName,
          phone: buyerPhone,
          email: buyerEmail,
        },
        items: items,
        total: total,
      };
      addDoc(orderCollection, order)
        .then(() => {
          const MySwal = withReactContent(Swal);

          MySwal.fire({
            title: <strong>Order placed successfully!</strong>,
            icon: 'success',
          });
          clearCart();
          resetForm();
        })
        .catch((event) => {
          const MySwal = withReactContent(Swal);

          MySwal.fire({
            title: <strong>OOPS! Something went wrong!</strong>,
            icon: 'error',
          });
        });
    } else if (items.length === 0) {
      alert('The cart is empty');
    } else {
      alert('Email adress and confirmation email do not match');
    }
  };
  return (
    <div>
      <form className='order-form' onSubmit={handleSubmit}>
        <label className='label-form'>Full Name:</label>
        <input
          type='text'
          value={buyerName}
          onChange={(event) => setBuyerName(event.target.value)}
        />
        <label className='label-form'>Phone Number:</label>
        <input
          type='text'
          value={buyerPhone}
          onChange={(event) => setBuyerPhone(event.target.value)}
        />
        <label className='label-form'>Email address:</label>
        <input
          type='text'
          value={buyerEmail}
          onChange={(event) => setBuyerEmail(event.target.value)}
        />
        <label className='label-form'>Confirm Email address:</label>
        <input
          type='text'
          value={confirmEmail}
          onChange={(event) => setConfirmEmail(event.target.value)}
        />
        <button className='cart-button' type='submit'>
          Checkout
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
