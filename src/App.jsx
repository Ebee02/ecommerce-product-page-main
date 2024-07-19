import Header from "./components/Header";
import MainSlider from "./components/Slider";
import Cart from "./components/Cart";
import Button from "./components/Button";
import React from "react";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const [cartItem, setCardItem] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const addToCart = () => {
    setCardItem((prevState) => prevState + counter);
    setCounter(0);
  };
  return (
    <main className="min-h-screen w-full bg-slate-100 flex items-center justify-center">
      <div className="main-container bg-white w-[390px] border border-gray-300 shadow-md my-6 rounded-md">
        <Header cartItem={cartItem} />
        <MainSlider />
        <div className="px-6">
          <h3 className="text-main-orange text-base my-5 font-bold tracking-wide">
            SNEAKER COMPANY
          </h3>
          <h1 className="text-3xl font-bold text-super-dark-blue mb-5">
            Fall Limited Edition Sneakers
          </h1>
          <p className=" text-dark-grayish-blue tracking-wide font-semibold leading-7 mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="stats flex py-1 justify-between font-bold text-super-dark-blue">
            <div className="flex items-center gap-x-6">
              <h2 className="text-3xl font-bold ">$125.00</h2>
              <div className="bg-pale-orange text-main-orange border border-[text-main-orange]  py-[3px] px-2 rounded-sm shadow-sm font-bold">
                50%
              </div>
            </div>
            <h3 className="line-through text-dark-grayish-blue font-bold">
              $250.00{" "}
            </h3>
          </div>
          <div className="mt-6">
            <Cart
              count={counter}
              onHandleIncrementCounter={incrementCounter}
              onHandleDecrementCounter={decrementCounter}
            />
          </div>
          <Button onHandleCart={addToCart} />
        </div>
      </div>
    </main>
  );
};

export default App;
