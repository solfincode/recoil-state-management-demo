import React from "react";
import { atom, useRecoilState } from "recoil";

const countNumber = atom({
  key: "countNumber",
  default: 0,
});

const Counter = () => {
  const [number, setNumber] = useRecoilState(countNumber);

  //click event - increase
  const increase = () => {
    setNumber(number + 1);
  };

  //click event - decrease
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>{number < 0 ? 0 : number}</div>
      <button onClick={() => increase()}>up</button>
      <button onClick={() => decrease()}>dowm</button>
    </div>
  );
};

export default Counter;
