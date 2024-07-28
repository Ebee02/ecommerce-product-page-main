const Cart = (props) => {
  return (
    <div className="py-3 px-5 text-2xl flex items-center justify-between font-bold bg-light-grayish-blue rounded-md border border-gray-300 shadow-md">
      <button
        onClick={props.onHandleDecrementCounter}
        className="border-none text-main-orange"
      >
        -
      </button>
      <h2 className="text-black font-bold text-4xl">{props.count}</h2>
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
