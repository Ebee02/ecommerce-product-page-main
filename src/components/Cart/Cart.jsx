import React from "react";

const Cart = (props) => {
  return (
    <div className="py-3 px-5 text-2xl flex items-center justify-between font-bold bg-light-grayish-blue rounded-md">
      <button
        onClick={props.onHandleDecrementCounter}
        className="border-none text-main-orange"
      >
        -
      </button>
      <p className="text-dark-grayish-blue">{props.count}</p>
      <button
        onClick={props.onHandleIncrementCounter}
        className="border-none text-main-orange"
      >
        +
      </button>
    </div>
  );
};

export default Cart;
