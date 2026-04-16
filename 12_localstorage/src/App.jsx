function App() {
  // const [count, setCount] = useState(0);
  // localStorage.setItem("user", "Shahiba");
  // console.log(localStorage.getItem("user"));

  // const user = {
  //   name: "mona",
  //   class: 12,
  //   age: 19,
  // };
  // localStorage.setItem("user", JSON.stringify(user));

  console.log(JSON.parse(localStorage.getItem("user")));
  localStorage.clear();

  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;
