import React, { useState } from "react";
import axios from "axios";

function UpdateOrder() {
  const [orderID, setOrderID] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async () => {
    const payload = { order_id: orderID, address: address };
    const response = await axios.post(
      "http://localhost:8000/update_order/",
      payload
    );
    alert(`Order updated: ${response.data.success}`);
  };

  return (
    <div>
      <input
        type="text"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
        placeholder="Order ID"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <button onClick={handleSubmit}>Update Order</button>
    </div>
  );
}

export default UpdateOrder;
