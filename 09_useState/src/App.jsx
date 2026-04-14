import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState({ user: "rishi", age: 25 });

  const btnClicked = function () {
    setCount((prev) => ({ ...prev, age: 27 }));
  };

  // const handleIncre = function () {
  //   setCount((prev) => prev + 1);
  // };
  // const handleDecre = function () {
  //   if (count > 0) {
  //     setCount((prev) => prev - 1);
  //   }
  // };

  return (
    <>
      <h1>
        {count.user} {count.age}
      </h1>
      <button onClick={btnClicked}>Click</button>
    </>
  );
}

export default App;
