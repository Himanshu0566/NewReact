import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copytask = [...task];
    copytask.push({ title, detail });
    setTask(copytask);
    console.log(copytask);

    setTitle("");
    setDetail("");
  };
  const handleDelet = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    setTask(copytask);
  };

  return (
    <>
      <div className=" h-screen lg:flex bg-black text-white ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex lg:w-1/2 items-start flex-col gap-4 p-10"
        >
          <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>
          <input
            type="text"
            placeholder="Entrn Notes heading"
            className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="flex items-start flex-row px-5 h-32 font-medium w-full py-2 border-2 rounded outline-none"
            placeholder="Enter Detail"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>
          <button className="bg-white active:scale-95 font-medium text-black px-5 py-2 rounded-2xl outline-none">
            Add Note
          </button>
        </form>
        <div className="lg:w-1/2 lg:border-l-2 p-10">
          <h1 className="text-4xl font-bold">Your Notes</h1>
          <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
            {task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  style={{
                    backgroundImage:
                      "url('https://img.freepik.com/free-vector/torn-paper-piece-design-background-vector_1055-12723.jpg')",
                  }}
                  className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4  overflow-autoa"
                >
                  <div>
                    <h3 className="leading-tight text-xl font-bold break-words">
                      {elem.title}
                    </h3>
                    <p className="mt-2 leading-tight font-medium text-gray-500 break-words">
                      {elem.detail}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      handleDelet(idx);
                    }}
                    className="w-full bg-red-500 active:scale-95 py-1 text-sm font-medium text-white rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
