import React, { useState } from 'react';
import { getFirestore, colecction, addDoc, collection } from 'firebase/firestore';

const OrderForm = ({ items }) => {
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("")
  const [buyerEmail, setBuyerEmail] = useState("")
  const [selectedItems, setSelectedItems] = useState([])
  const [total, setTotal] = useState(0)

  const db = getFirestore()
  const orderCollection = collection(db, "orders")
    const handleSubmit = (event) => {
        event.prevent
    }
  )
  return <div>OrderForm</div>;
};

export default OrderForm;
