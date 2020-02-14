import React, { useState, useEffect } from 'react';
import client from '../sanity'
const AdminTable = (props) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad() {
    try {
      const orders = await client.fetch(` *[_type == 'orders']`);
      setOrders(orders);
    
    }
    catch (e) {
      if (e !== "No current product") {
        alert(e)
      }
    }
  }
console.log(orders);
  return(
    <div>
      <div>
        Orders
      </div>
      <div>Orders</div>
      <div>Status</div>
      <div>Shipping</div>
      
    </div>
  )
};
export default AdminTable;