import Header from "./components/Header/Header";
import MainSlider from "./components/Slider/Slider";
import Cart from "./components/Cart/Cart";
import Button from "./components/Button/Button";
import React from "react";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const onHandleSubmit = () => {
    console.log("button clicked...");
  };
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="main-container w-[375px] h-[810px] shadow-lg my-6">
        <Header count={counter} />
        <MainSlider />
        <div className="px-6">
          <h3 className="text-main-orange text-base my-5 font-bold tracking-wider">
            SNEAKER COMPANY
          </h3>
          <h1 className="text-3xl font-bold text-super-dark-blue mb-5">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-sm text-dark-grayish-blue tracking-wide font-semibold leading-7 mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="stats flex items-center justify-between font-bold text-super-dark-blue">
            <div className="flex items-center gap-x-6">
              <h2 className="text-3xl ">$125.00</h2>
              <div className="bg-pale-orange text-main-orange px-2  rounded-sm shadow-sm">
                50%
              </div>
            </div>
            <h3 className="text-xl line-through text-dark-grayish-blue">
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
          <Button onHandleCart={onHandleSubmit} />
        </div>
      </div>
    </main>
  );
};

export default App;
