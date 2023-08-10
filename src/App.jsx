import BurgerItems from "./components/BurgerItems";
import Basket from "./components/Basket";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<MainContent/>} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/Burgers" element={<BurgerItems />} />
      </Routes>
    </>
  );
};

export default App;
