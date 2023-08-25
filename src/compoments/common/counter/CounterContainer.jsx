import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({product}) => {
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    if (counter <= 50) setCounter(counter + 1);
  };
  const restar = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <>
      <Counter sumar={sumar} restar={restar} counter={counter} product={product}/>
    </>
  );
};

export default CounterContainer;
