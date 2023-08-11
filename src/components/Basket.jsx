import { useSelector, useDispatch } from "react-redux";
import {
  deleteBurger,
  increment,
  decrement,
  removeBasket,
} from "../slice/sliceFolder/BurgerSlice";
const Basket = () => {
  const basketBurgers = useSelector((state) => state.burgers.basket);
  const dispatch = useDispatch();
  const totalprice = basketBurgers.reduce(
    (total, burger) => total + burger.price * burger.quantity,
    0
  );

  return (
    <div className="flex flex-wrap">
      {totalprice}
      {basketBurgers.map((burger) => {
        // const price = basketBurgers.map(burger => burger.price)
        // const quantity = basketBurgers.map(burger => burger.quantity)

        return (
          <div
            className="shadow-2xl mx-5 my-4 w-52 h-96 text-center relative "
            key={burger.id}
          >
            <img
              className="w-full h-32"
              src={burger.image}
              alt={burger.title}
            />
            <h1>{burger.title}</h1>
            <p>{burger.description}</p>
            <p>{burger.price * burger.quantity} ₺</p>
            <button
              className="mx-2"
              onClick={() => dispatch(decrement(burger))}
            >
              -
            </button>
            <span>{burger.quantity}</span>
            <button
              className="mx-2"
              onClick={() => dispatch(increment(burger))}
            >
              +
            </button>
            <button
              onClick={() => dispatch(deleteBurger(burger))}
              className="border border-blue-400 absolute bottom-[5%] left-[30%]"
            >
              Sepetten çıkar
            </button>
          </div>
        );
      })}
      <button onClick={()=> dispatch(removeBasket())}>sepeti boşalt</button>
    </div>
  );
};

export default Basket;
