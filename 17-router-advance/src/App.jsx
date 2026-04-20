import { Routes } from "react-router-dom";
import Footer from "./componant/Footer";
import Navbar from "./componant/Navbar";
import Routess from "./routes/Routess";

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white">
        <Navbar />
        <Routess />
        <Footer />
      </div>
    </>
  );
}

export default App;
