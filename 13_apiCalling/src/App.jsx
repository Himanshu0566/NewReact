import { useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState([]);

  // const getData = async () => {
  //   const getUrl = await fetch("https://jsonplaceholder.typicode.com/users");

  //   const data = await getUrl.json();
  //   console.log(data);
  // };

  // const getData = async () => {
  //   const getUrl = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users",
  //   );
  //   console.log(getUrl.data);
  // };

  const getData = async () => {
    const getUrl = await axios.get("https://picsum.photos/v2/list");
    setCount(getUrl.data);
  };

  return (
    <>
      <h1>Api Calling</h1>
      <button onClick={getData}> Click Me </button>
      <div>
        {count.map(function (elem, idx) {
          return (
            <h3>
              Hello {elem.author} {idx}
            </h3>
          );
        })}
      </div>
    </>
  );
}

export default App;
