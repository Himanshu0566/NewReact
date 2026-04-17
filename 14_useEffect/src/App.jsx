import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(function () {
    console.log("useEffect Is running...");
  }, []);

  return (
    <div>
      <h1>{num}</h1>
      <h2>{num2}</h2>
      <button
        onMouseEnter={() => {
          setNum(num + 10);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 100);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
