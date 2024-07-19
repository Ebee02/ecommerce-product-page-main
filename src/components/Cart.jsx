const Cart = (props) => {
  return (
    <div className="py-3 px-5 text-2xl flex items-center justify-between font-bold bg-light-grayish-blue rounded-sm border border-gray-300 shadow-sm">
      <button
        onClick={props.onHandleDecrementCounter}
        className="border-none text-main-orange"
      >
        -
      </button>
      <p className="text-black font-semibold">{props.count}</p>
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
