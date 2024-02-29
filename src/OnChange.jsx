import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");
  const [qty, setQty] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQty(e) {
    setQty(e.target.value);
  }

  function handleComment(e) {
    setComment(e.target.value);
  }

  function handlePayment(e) {
    setPayment(e.target.value);
  }
  function handleShipping(e) {
    setShipping(e.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name} </p>
      <input type="text" value={qty} onChange={handleQty} />
      <p>qty: {qty} </p>
      <textarea
        name=""
        id=""
        value={comment}
        onChange={handleComment}
        placeholder="enter delivery"
      ></textarea>
      <p>Comment : {comment}</p>
      <select value={payment} onChange={handlePayment}>
        <option value="">select an option</option>
        <option value="visa"> Visa </option>
        <option value="mastercard"> Mastercard </option>
        <option value="giftcard"> giftcard </option>
      </select>
      <p> Payment : {payment}</p>
      <label>
        <input
          type="radio"
          value="pick up"
          checked={shipping === "pick up"}
          onChange={handleShipping}
        ></input>
        pick up
      </label>{" "}
      <br />
      <label>
        <input
          type="radio"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShipping}
        ></input>
        delivery
      </label>
      <p>Shipping : {shipping}</p>
    </div>
  );
}
export default OnChange;
