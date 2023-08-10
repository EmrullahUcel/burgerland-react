import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../slice/sliceFolder/BurgerSlice";

const BurgerItems = () => {
  const burgersData = useSelector((state) => state.burgers.burgersData);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap justify-center ml-[20%] mr-[20%]">
      {burgersData.map((burger) => {
        return (
          <div
            className="shadow-2xl mx-5 my-4 w-52 h-72 text-center relative "
            key={burger.id}
          >
            <img
              className="w-full h-32"
              src={burger.image}
              alt={burger.title}
            />
            <h1>{burger.title}</h1>
            <p>{burger.description}</p>
            {/* <label htmlFor="sogan">
              <input name="sogan" type="radio" />
              <input name="sogan" type="radio" />
            </label> */}
            <p>{burger.price} ₺</p>
            <button
              className="border border-blue-400 absolute bottom-[5%] left-[30%]"
              onClick={() => dispatch(addToBasket(burger))}
            >
              Sepete ekle
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BurgerItems;
