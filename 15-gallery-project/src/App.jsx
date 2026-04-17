import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const res = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=30",
    );
    setUserData(res.data);
  };

  useEffect(function () {
    getData();
  }, []);
  let printUserData = (
    <h3 className="text-xs text-gray-400">No user avalable</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 bg-white rounded-2xl">
              <img
                className="h-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg"> {elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <>
      <div className="bg-black h-screen overflow-auto text-white p-4">
        <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>
        <div className="flex justify-center gap-6  items-center p-4">
          <button className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
            prev
          </button>
          <button className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
